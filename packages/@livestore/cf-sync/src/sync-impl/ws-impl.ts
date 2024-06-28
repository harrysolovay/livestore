/// <reference lib="dom" />

import type { SyncImpl } from '@livestore/common'
import type { Scope } from '@livestore/utils/effect'
import { Deferred, Effect, Queue, Stream, SubscriptionRef } from '@livestore/utils/effect'

import { ElectricConfig } from 'electric-sql'
import { Electric, schema } from '../generated/client/index.js'
import { insecureAuthToken } from 'electric-sql/auth'
import { MutationEvent } from '@livestore/common/schema'

export const makeWsSync = (roomId: string): Effect.Effect<SyncImpl, never, Scope.Scope> =>
  Effect.gen(function* () {    
    // TODO: env vars
    const config: ElectricConfig = {
      url: 'ws://localhost:5133',
      debug: true,
      disableForeignKeysDownstream: true,
    }

    const dbName = `livestore-${roomId}`
    const electric: Electric = yield* Effect.promise(async () => {
      const { electrify, ElectricDatabase } = await import('electric-sql/wa-sqlite')
      const conn = await ElectricDatabase.init(dbName)
      return electrify(conn, schema, config)
    })
    
    const queue = yield* Queue.bounded<MutationEvent.AnyEncoded>(100)
    const { isConnected } = yield* connect(electric, queue)
    
    const api = {
      isConnected,
      pull: (cursor) =>
        Effect.gen(function* () {
          
          const events: MutationEvent.AnyEncoded[] = yield* Effect.promise(async () => {
            const currTime = Date.now()
            const { synced } = await electric.db.mutation_log.sync({
              where: {
                room: roomId
              },
            
            })
            await synced
            if(cursor === undefined){
              console.log('synching shape took', Date.now() - currTime, 'ms')         
            }else{
              console.log('initial shape already synced. Will catch up with pending changes')
            }

            const mutations = await electric.db.mutation_log.findMany()
            return mutations
              .map((row: any) => ({
                id: row.id,
                mutation: row.mutation,
                args: JSON.parse(row.argsjson),
              }))
              .filter((_) => (cursor ? _.id > cursor : true))
          })

          // TODO: should write in batch for initial sync
          return Stream.fromIterable(events)
        }).pipe(Stream.unwrap),
      pushes: Stream.fromQueue(queue).pipe(
        Stream.map((_) => ({ mutationEventEncoded: _, persisted: true })),
      ),        
      push: (mutationEventEncoded) =>
        Effect.gen(function* () {
          // TODO: here we don't wait for any ack from the server, while original impl would
          yield* Effect.promise(async () =>
            electric?.db.mutation_log.create({
              data: {
                id: mutationEventEncoded.id,
                mutation: mutationEventEncoded.mutation,
                argsjson: JSON.stringify(mutationEventEncoded.args ?? {}),
                room: roomId,
              },
            }),
          )
        }),
    } satisfies SyncImpl

    return api
  })

const connect = (electric: Electric, queue: Queue.Queue<MutationEvent.AnyEncoded>) =>
  Effect.gen(function* () {
    
    const isConnected = yield* SubscriptionRef.make(false)
    let userId = 'FAKE_USER_ID'
    const authToken = insecureAuthToken({ sub: userId })
    yield* Effect.promise(() => electric.connect(authToken))

    const unsubConnectivityCb = electric.notifier.subscribeToConnectivityStateChanges((event) => {
      Effect.runSync(
        Effect.sync(() =>{
          console.log("isConnected")
          event.connectivityState.status === 'connected'
            ? SubscriptionRef.set(isConnected, true)
            : SubscriptionRef.set(isConnected, false)
          }
        ),
      )
    })

    const unsubDataChangeFunc = electric.notifier.subscribeToDataChanges((notification) => {
      if (notification.origin !== 'remote') {
        return
      }

      const pks = notification.changes
        .filter((_) => _.recordChanges !== undefined)
        .flatMap((_) => _.recordChanges)
        .map((_) => _!.primaryKey)

      const pushChanges = Stream.fromIterable(pks).pipe(
        Stream.map((pk) =>
          Effect.promise(() =>
            electric.db.mutation_log.findFirst({
              where: {
                id: pk!.id as string,
              },
            }),
          ),
        ),
        Stream.map((_) =>
          Effect.runPromise(_)
            .then((row) => ({
              id: row!.id,
              mutation: row!.mutation,
              args: JSON.parse(row!.argsjson),
            }))
            .then((_) => {
              Queue.offer(queue, _).pipe(Effect.runPromise)
            }),
        ),
        Stream.runDrain,
      )

      Effect.runPromise(pushChanges)
    })
    
    // TODO: check connectivity events          
    SubscriptionRef.set(isConnected, true).pipe(Effect.runSync)

    const waitUntilOnline = SubscriptionRef.changeStreamIncludingCurrent(isConnected).pipe(
      Stream.filter(Boolean),
      Stream.take(1),
      Stream.runDrain,
    )

    const innerConnect = Effect.gen(function* () {
      // If the browser already tells us we're offline, then we'll at least wait until the browser
      // thinks we're online again. (We'll only know for sure once the WS conneciton is established.)
      while (navigator.onLine === false) {
        yield* Effect.sleep(1000)
      }
      // if (navigator.onLine === false) {
      //   yield* Effect.async((cb) => self.addEventListener('online', () => cb(Effect.void)))
      // }

      const connectionClosed = yield* Deferred.make<void>()

      const offlineHandler = () => {
        Deferred.succeed(connectionClosed, void 0).pipe(Effect.runSync)
      }

      // NOTE it seems that this callback doesn't work reliably on a worker but only via `window.addEventListener`
      // We might need to proxy the event from the main thread to the worker if we want this to work reliably.
      self.addEventListener('offline', offlineHandler)

      yield* Effect.addFinalizer(() =>
        Effect.gen(function* () {
          unsubConnectivityCb()
          unsubDataChangeFunc()
          electric.close()
          self.removeEventListener('offline', offlineHandler)
          yield* SubscriptionRef.set(isConnected, false)
        }),
      )

      yield* waitUntilOnline.pipe(
        Effect.tapErrorCause(() => Deferred.succeed(connectionClosed, void 0)),
        Effect.forkScoped,
      )

      yield* Deferred.await(connectionClosed)
    }).pipe(Effect.scoped)

    yield* innerConnect.pipe(Effect.forever, Effect.tapCauseLogPretty, Effect.forkScoped)

    return { isConnected}
  })
