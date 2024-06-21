/// <reference lib="dom" />

import type { SyncImpl } from '@livestore/common'
import type { Scope } from '@livestore/utils/effect'
import { Deferred, Effect, PubSub, Queue, Schema, Stream, SubscriptionRef } from '@livestore/utils/effect'

import { WSMessage } from '../common/index.js'
import { ElectricConfig } from 'electric-sql'
import { Electric, schema } from '../generated/client/index.js'
import { insecureAuthToken } from 'electric-sql/auth'
import { MutationEvent } from '@livestore/common/schema'

// TODO: remove all stiff from CF worker
export const makeWsSync = (wsBaseUrl: string, roomId: string): Effect.Effect<SyncImpl, never, Scope.Scope> =>
  Effect.gen(function* () {
    const wsUrl = `${wsBaseUrl}/websocket?room=${roomId}`

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

    let userId = 'FAKE_USER_ID'
    const authToken = insecureAuthToken({ sub: userId })
    yield* Effect.promise(() => electric.connect(authToken))

    const { isConnected } = yield* connect(wsUrl)

    const queue = yield* Queue.bounded<MutationEvent.AnyEncoded>(100)

    const _unsubConnectivityCb = electric.notifier.subscribeToConnectivityStateChanges((event) => {
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

    const _unsubDataChangeFunc = electric.notifier.subscribeToDataChanges((notification) => {
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
              console.log('enqueueing mutation', _)
              Queue.offer(queue, _).pipe(Effect.runSync)
            }),
        ),
        Stream.runDrain,
      )

      Effect.runPromise(pushChanges)
    })
    const api = {
      isConnected,
      pull: (cursor) =>
        Effect.gen(function* () {
          console.log('pulling from electric')

          const events: MutationEvent.AnyEncoded[] = yield* Effect.promise(async () => {
            const { synced } = await electric.db.mutation_log.sync()
            await synced

            const mutations = await electric.db.mutation_log.findMany()
            return mutations
              .map((row: any) => ({
                id: row.id,
                mutation: row.mutation,
                args: JSON.parse(row.argsjson),
              }))
              .filter((_) => (cursor ? _.id > cursor : true))
          })

          return Stream.fromIterable(events)
        }).pipe(Stream.unwrap),
      pushes: Stream.fromQueue(queue).pipe(Stream.map((_) => ({ mutationEventEncoded: _, persisted: true }))), // TODO: not sure what persisted means
      push: (mutationEventEncoded, persisted) =>
        Effect.gen(function* () {
          // TODO: mutation schema needs to be simplified
          // TODO: need to hanhdle connectivity events
          // TODO: here we don't wait for any ack from the server, while original impl would
          // We're not sending persistend events to electruc
          yield* Effect.promise(async () =>
            electric?.db.mutation_log.create({
              data: {
                id: mutationEventEncoded.id,
                mutation: mutationEventEncoded.mutation,
                argsjson: JSON.stringify(mutationEventEncoded.args ?? {})                
              },
            }),
          )
        }),
    } satisfies SyncImpl

    return api
  })

const connect = (wsUrl: string) =>
  Effect.gen(function* () {
    const isConnected = yield* SubscriptionRef.make(false)
    const wsRef: { current: WebSocket | undefined } = { current: undefined }

    const incomingMessages = yield* PubSub.unbounded<Exclude<WSMessage.IncomingMessage, WSMessage.Pong>>()

    const waitUntilOnline = SubscriptionRef.changeStreamIncludingCurrent(isConnected).pipe(
      Stream.filter(Boolean),
      Stream.take(1),
      Stream.runDrain,
    )

    const send = (message: WSMessage.Message) =>
      Effect.gen(function* () {
        // Wait first until we're online
        yield* waitUntilOnline

        wsRef.current!.send(Schema.encodeSync(Schema.parseJson(WSMessage.Message))(message))
      })

    const innerConnect = Effect.gen(function* () {
      // If the browser already tells us we're offline, then we'll at least wait until the browser
      // thinks we're online again. (We'll only know for sure once the WS conneciton is established.)
      while (navigator.onLine === false) {
        yield* Effect.sleep(1000)
      }
      // if (navigator.onLine === false) {
      //   yield* Effect.async((cb) => self.addEventListener('online', () => cb(Effect.void)))
      // }

      const ws = new WebSocket(wsUrl)
      const connectionClosed = yield* Deferred.make<void>()

      const pongMessages = yield* Queue.unbounded<WSMessage.Pong>()

      const messageHandler = (event: MessageEvent<any>): void => {
        const decodedEventRes = Schema.decodeUnknownEither(Schema.parseJson(WSMessage.IncomingMessage))(event.data)

        if (decodedEventRes._tag === 'Left') {
          console.error('Sync: Invalid message received', decodedEventRes.left)
          return
        } else {
          if (decodedEventRes.right._tag === 'WSMessage.Pong') {
            Queue.offer(pongMessages, decodedEventRes.right).pipe(Effect.runSync)
          } else {
            PubSub.publish(incomingMessages, decodedEventRes.right).pipe(Effect.runSync)
          }
        }
      }

      const offlineHandler = () => {
        Deferred.succeed(connectionClosed, void 0).pipe(Effect.runSync)
      }

      // NOTE it seems that this callback doesn't work reliably on a worker but only via `window.addEventListener`
      // We might need to proxy the event from the main thread to the worker if we want this to work reliably.
      self.addEventListener('offline', offlineHandler)

      yield* Effect.addFinalizer(() =>
        Effect.gen(function* () {
          // TODO: remove event listeners here
          ws.removeEventListener('message', messageHandler)
          self.removeEventListener('offline', offlineHandler)
          wsRef.current?.close()
          wsRef.current = undefined
          yield* SubscriptionRef.set(isConnected, false)
        }),
      )

      ws.addEventListener('message', messageHandler)

      if (ws.readyState === WebSocket.OPEN) {
        wsRef.current = ws
        SubscriptionRef.set(isConnected, true).pipe(Effect.runSync)
      } else {
        ws.addEventListener('open', () => {
          wsRef.current = ws
          SubscriptionRef.set(isConnected, true).pipe(Effect.runSync)
        })
      }

      ws.addEventListener('close', () => {
        Deferred.succeed(connectionClosed, void 0).pipe(Effect.runSync)
      })

      ws.addEventListener('error', () => {
        ws.close()
        Deferred.succeed(connectionClosed, void 0).pipe(Effect.runSync)
      })

      const checkPingPong = Effect.gen(function* () {
        // TODO include pong latency infomation in network status
        yield* send({ _tag: 'WSMessage.Ping', requestId: 'ping' })

        // NOTE those numbers might need more fine-tuning to allow for bad network conditions
        yield* Queue.take(pongMessages).pipe(Effect.timeout(5000))

        yield* Effect.sleep(25_000)
      })

      yield* waitUntilOnline.pipe(
        Effect.andThen(checkPingPong.pipe(Effect.forever)),
        Effect.tapErrorCause(() => Deferred.succeed(connectionClosed, void 0)),
        Effect.forkScoped,
      )

      yield* Deferred.await(connectionClosed)
    }).pipe(Effect.scoped)

    yield* innerConnect.pipe(Effect.forever, Effect.tapCauseLogPretty, Effect.forkScoped)

    return { isConnected, incomingMessages, send }
  })
