
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Mutation_log
 * 
 */
export type Mutation_log = {
  id: string
  mutation: string
  argsjson: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mutation_logs
 * const mutation_logs = await prisma.mutation_log.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mutation_logs
   * const mutation_logs = await prisma.mutation_log.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.mutation_log`: Exposes CRUD operations for the **Mutation_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mutation_logs
    * const mutation_logs = await prisma.mutation_log.findMany()
    * ```
    */
  get mutation_log(): Prisma.Mutation_logDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Mutation_log: 'Mutation_log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Mutation_log
   */


  export type AggregateMutation_log = {
    _count: Mutation_logCountAggregateOutputType | null
    _min: Mutation_logMinAggregateOutputType | null
    _max: Mutation_logMaxAggregateOutputType | null
  }

  export type Mutation_logMinAggregateOutputType = {
    id: string | null
    mutation: string | null
    argsjson: string | null
  }

  export type Mutation_logMaxAggregateOutputType = {
    id: string | null
    mutation: string | null
    argsjson: string | null
  }

  export type Mutation_logCountAggregateOutputType = {
    id: number
    mutation: number
    argsjson: number
    _all: number
  }


  export type Mutation_logMinAggregateInputType = {
    id?: true
    mutation?: true
    argsjson?: true
  }

  export type Mutation_logMaxAggregateInputType = {
    id?: true
    mutation?: true
    argsjson?: true
  }

  export type Mutation_logCountAggregateInputType = {
    id?: true
    mutation?: true
    argsjson?: true
    _all?: true
  }

  export type Mutation_logAggregateArgs = {
    /**
     * Filter which Mutation_log to aggregate.
     * 
    **/
    where?: Mutation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mutation_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<Mutation_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mutation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mutation_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mutation_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mutation_logs
    **/
    _count?: true | Mutation_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mutation_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mutation_logMaxAggregateInputType
  }

  export type GetMutation_logAggregateType<T extends Mutation_logAggregateArgs> = {
        [P in keyof T & keyof AggregateMutation_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMutation_log[P]>
      : GetScalarType<T[P], AggregateMutation_log[P]>
  }




  export type Mutation_logGroupByArgs = {
    where?: Mutation_logWhereInput
    orderBy?: Enumerable<Mutation_logOrderByWithAggregationInput>
    by: Array<Mutation_logScalarFieldEnum>
    having?: Mutation_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mutation_logCountAggregateInputType | true
    _min?: Mutation_logMinAggregateInputType
    _max?: Mutation_logMaxAggregateInputType
  }


  export type Mutation_logGroupByOutputType = {
    id: string
    mutation: string
    argsjson: string
    _count: Mutation_logCountAggregateOutputType | null
    _min: Mutation_logMinAggregateOutputType | null
    _max: Mutation_logMaxAggregateOutputType | null
  }

  type GetMutation_logGroupByPayload<T extends Mutation_logGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mutation_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mutation_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mutation_logGroupByOutputType[P]>
            : GetScalarType<T[P], Mutation_logGroupByOutputType[P]>
        }
      >
    >


  export type Mutation_logSelect = {
    id?: boolean
    mutation?: boolean
    argsjson?: boolean
  }


  export type Mutation_logGetPayload<S extends boolean | null | undefined | Mutation_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mutation_log :
    S extends undefined ? never :
    S extends { include: any } & (Mutation_logArgs | Mutation_logFindManyArgs)
    ? Mutation_log 
    : S extends { select: any } & (Mutation_logArgs | Mutation_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mutation_log ? Mutation_log[P] : never
  } 
      : Mutation_log


  type Mutation_logCountArgs = Merge<
    Omit<Mutation_logFindManyArgs, 'select' | 'include'> & {
      select?: Mutation_logCountAggregateInputType | true
    }
  >

  export interface Mutation_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mutation_log that matches the filter.
     * @param {Mutation_logFindUniqueArgs} args - Arguments to find a Mutation_log
     * @example
     * // Get one Mutation_log
     * const mutation_log = await prisma.mutation_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mutation_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mutation_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mutation_log'> extends True ? Prisma__Mutation_logClient<Mutation_logGetPayload<T>> : Prisma__Mutation_logClient<Mutation_logGetPayload<T> | null, null>

    /**
     * Find one Mutation_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Mutation_logFindUniqueOrThrowArgs} args - Arguments to find a Mutation_log
     * @example
     * // Get one Mutation_log
     * const mutation_log = await prisma.mutation_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Mutation_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Mutation_logFindUniqueOrThrowArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Find the first Mutation_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logFindFirstArgs} args - Arguments to find a Mutation_log
     * @example
     * // Get one Mutation_log
     * const mutation_log = await prisma.mutation_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mutation_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mutation_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mutation_log'> extends True ? Prisma__Mutation_logClient<Mutation_logGetPayload<T>> : Prisma__Mutation_logClient<Mutation_logGetPayload<T> | null, null>

    /**
     * Find the first Mutation_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logFindFirstOrThrowArgs} args - Arguments to find a Mutation_log
     * @example
     * // Get one Mutation_log
     * const mutation_log = await prisma.mutation_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Mutation_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Mutation_logFindFirstOrThrowArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Find zero or more Mutation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mutation_logs
     * const mutation_logs = await prisma.mutation_log.findMany()
     * 
     * // Get first 10 Mutation_logs
     * const mutation_logs = await prisma.mutation_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mutation_logWithIdOnly = await prisma.mutation_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mutation_logFindManyArgs>(
      args?: SelectSubset<T, Mutation_logFindManyArgs>
    ): PrismaPromise<Array<Mutation_logGetPayload<T>>>

    /**
     * Create a Mutation_log.
     * @param {Mutation_logCreateArgs} args - Arguments to create a Mutation_log.
     * @example
     * // Create one Mutation_log
     * const Mutation_log = await prisma.mutation_log.create({
     *   data: {
     *     // ... data to create a Mutation_log
     *   }
     * })
     * 
    **/
    create<T extends Mutation_logCreateArgs>(
      args: SelectSubset<T, Mutation_logCreateArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Create many Mutation_logs.
     *     @param {Mutation_logCreateManyArgs} args - Arguments to create many Mutation_logs.
     *     @example
     *     // Create many Mutation_logs
     *     const mutation_log = await prisma.mutation_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mutation_logCreateManyArgs>(
      args?: SelectSubset<T, Mutation_logCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mutation_log.
     * @param {Mutation_logDeleteArgs} args - Arguments to delete one Mutation_log.
     * @example
     * // Delete one Mutation_log
     * const Mutation_log = await prisma.mutation_log.delete({
     *   where: {
     *     // ... filter to delete one Mutation_log
     *   }
     * })
     * 
    **/
    delete<T extends Mutation_logDeleteArgs>(
      args: SelectSubset<T, Mutation_logDeleteArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Update one Mutation_log.
     * @param {Mutation_logUpdateArgs} args - Arguments to update one Mutation_log.
     * @example
     * // Update one Mutation_log
     * const mutation_log = await prisma.mutation_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mutation_logUpdateArgs>(
      args: SelectSubset<T, Mutation_logUpdateArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Delete zero or more Mutation_logs.
     * @param {Mutation_logDeleteManyArgs} args - Arguments to filter Mutation_logs to delete.
     * @example
     * // Delete a few Mutation_logs
     * const { count } = await prisma.mutation_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mutation_logDeleteManyArgs>(
      args?: SelectSubset<T, Mutation_logDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mutation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mutation_logs
     * const mutation_log = await prisma.mutation_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mutation_logUpdateManyArgs>(
      args: SelectSubset<T, Mutation_logUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mutation_log.
     * @param {Mutation_logUpsertArgs} args - Arguments to update or create a Mutation_log.
     * @example
     * // Update or create a Mutation_log
     * const mutation_log = await prisma.mutation_log.upsert({
     *   create: {
     *     // ... data to create a Mutation_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mutation_log we want to update
     *   }
     * })
    **/
    upsert<T extends Mutation_logUpsertArgs>(
      args: SelectSubset<T, Mutation_logUpsertArgs>
    ): Prisma__Mutation_logClient<Mutation_logGetPayload<T>>

    /**
     * Count the number of Mutation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logCountArgs} args - Arguments to filter Mutation_logs to count.
     * @example
     * // Count the number of Mutation_logs
     * const count = await prisma.mutation_log.count({
     *   where: {
     *     // ... the filter for the Mutation_logs we want to count
     *   }
     * })
    **/
    count<T extends Mutation_logCountArgs>(
      args?: Subset<T, Mutation_logCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mutation_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mutation_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mutation_logAggregateArgs>(args: Subset<T, Mutation_logAggregateArgs>): PrismaPromise<GetMutation_logAggregateType<T>>

    /**
     * Group by Mutation_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutation_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mutation_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mutation_logGroupByArgs['orderBy'] }
        : { orderBy?: Mutation_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mutation_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMutation_logGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mutation_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mutation_logClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Mutation_log base type for findUnique actions
   */
  export type Mutation_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter, which Mutation_log to fetch.
     * 
    **/
    where: Mutation_logWhereUniqueInput
  }

  /**
   * Mutation_log findUnique
   */
  export interface Mutation_logFindUniqueArgs extends Mutation_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mutation_log findUniqueOrThrow
   */
  export type Mutation_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter, which Mutation_log to fetch.
     * 
    **/
    where: Mutation_logWhereUniqueInput
  }


  /**
   * Mutation_log base type for findFirst actions
   */
  export type Mutation_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter, which Mutation_log to fetch.
     * 
    **/
    where?: Mutation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mutation_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<Mutation_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mutation_logs.
     * 
    **/
    cursor?: Mutation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mutation_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mutation_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mutation_logs.
     * 
    **/
    distinct?: Enumerable<Mutation_logScalarFieldEnum>
  }

  /**
   * Mutation_log findFirst
   */
  export interface Mutation_logFindFirstArgs extends Mutation_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mutation_log findFirstOrThrow
   */
  export type Mutation_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter, which Mutation_log to fetch.
     * 
    **/
    where?: Mutation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mutation_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<Mutation_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mutation_logs.
     * 
    **/
    cursor?: Mutation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mutation_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mutation_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mutation_logs.
     * 
    **/
    distinct?: Enumerable<Mutation_logScalarFieldEnum>
  }


  /**
   * Mutation_log findMany
   */
  export type Mutation_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter, which Mutation_logs to fetch.
     * 
    **/
    where?: Mutation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mutation_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<Mutation_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mutation_logs.
     * 
    **/
    cursor?: Mutation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mutation_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mutation_logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mutation_logScalarFieldEnum>
  }


  /**
   * Mutation_log create
   */
  export type Mutation_logCreateArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * The data needed to create a Mutation_log.
     * 
    **/
    data: XOR<Mutation_logCreateInput, Mutation_logUncheckedCreateInput>
  }


  /**
   * Mutation_log createMany
   */
  export type Mutation_logCreateManyArgs = {
    /**
     * The data used to create many Mutation_logs.
     * 
    **/
    data: Enumerable<Mutation_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mutation_log update
   */
  export type Mutation_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * The data needed to update a Mutation_log.
     * 
    **/
    data: XOR<Mutation_logUpdateInput, Mutation_logUncheckedUpdateInput>
    /**
     * Choose, which Mutation_log to update.
     * 
    **/
    where: Mutation_logWhereUniqueInput
  }


  /**
   * Mutation_log updateMany
   */
  export type Mutation_logUpdateManyArgs = {
    /**
     * The data used to update Mutation_logs.
     * 
    **/
    data: XOR<Mutation_logUpdateManyMutationInput, Mutation_logUncheckedUpdateManyInput>
    /**
     * Filter which Mutation_logs to update
     * 
    **/
    where?: Mutation_logWhereInput
  }


  /**
   * Mutation_log upsert
   */
  export type Mutation_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * The filter to search for the Mutation_log to update in case it exists.
     * 
    **/
    where: Mutation_logWhereUniqueInput
    /**
     * In case the Mutation_log found by the `where` argument doesn't exist, create a new Mutation_log with this data.
     * 
    **/
    create: XOR<Mutation_logCreateInput, Mutation_logUncheckedCreateInput>
    /**
     * In case the Mutation_log was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mutation_logUpdateInput, Mutation_logUncheckedUpdateInput>
  }


  /**
   * Mutation_log delete
   */
  export type Mutation_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
    /**
     * Filter which Mutation_log to delete.
     * 
    **/
    where: Mutation_logWhereUniqueInput
  }


  /**
   * Mutation_log deleteMany
   */
  export type Mutation_logDeleteManyArgs = {
    /**
     * Filter which Mutation_logs to delete
     * 
    **/
    where?: Mutation_logWhereInput
  }


  /**
   * Mutation_log without action
   */
  export type Mutation_logArgs = {
    /**
     * Select specific fields to fetch from the Mutation_log
     * 
    **/
    select?: Mutation_logSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Mutation_logScalarFieldEnum: {
    id: 'id',
    mutation: 'mutation',
    argsjson: 'argsjson'
  };

  export type Mutation_logScalarFieldEnum = (typeof Mutation_logScalarFieldEnum)[keyof typeof Mutation_logScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type Mutation_logWhereInput = {
    AND?: Enumerable<Mutation_logWhereInput>
    OR?: Enumerable<Mutation_logWhereInput>
    NOT?: Enumerable<Mutation_logWhereInput>
    id?: StringFilter | string
    mutation?: StringFilter | string
    argsjson?: StringFilter | string
  }

  export type Mutation_logOrderByWithRelationInput = {
    id?: SortOrder
    mutation?: SortOrder
    argsjson?: SortOrder
  }

  export type Mutation_logWhereUniqueInput = {
    id?: string
  }

  export type Mutation_logOrderByWithAggregationInput = {
    id?: SortOrder
    mutation?: SortOrder
    argsjson?: SortOrder
    _count?: Mutation_logCountOrderByAggregateInput
    _max?: Mutation_logMaxOrderByAggregateInput
    _min?: Mutation_logMinOrderByAggregateInput
  }

  export type Mutation_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mutation_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mutation_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mutation_logScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    mutation?: StringWithAggregatesFilter | string
    argsjson?: StringWithAggregatesFilter | string
  }

  export type Mutation_logCreateInput = {
    id: string
    mutation: string
    argsjson: string
  }

  export type Mutation_logUncheckedCreateInput = {
    id: string
    mutation: string
    argsjson: string
  }

  export type Mutation_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutation?: StringFieldUpdateOperationsInput | string
    argsjson?: StringFieldUpdateOperationsInput | string
  }

  export type Mutation_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutation?: StringFieldUpdateOperationsInput | string
    argsjson?: StringFieldUpdateOperationsInput | string
  }

  export type Mutation_logCreateManyInput = {
    id: string
    mutation: string
    argsjson: string
  }

  export type Mutation_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutation?: StringFieldUpdateOperationsInput | string
    argsjson?: StringFieldUpdateOperationsInput | string
  }

  export type Mutation_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutation?: StringFieldUpdateOperationsInput | string
    argsjson?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type Mutation_logCountOrderByAggregateInput = {
    id?: SortOrder
    mutation?: SortOrder
    argsjson?: SortOrder
  }

  export type Mutation_logMaxOrderByAggregateInput = {
    id?: SortOrder
    mutation?: SortOrder
    argsjson?: SortOrder
  }

  export type Mutation_logMinOrderByAggregateInput = {
    id?: SortOrder
    mutation?: SortOrder
    argsjson?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

type Buffer = Omit<Uint8Array, 'set'>
