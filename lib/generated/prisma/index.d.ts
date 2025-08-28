
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EmojiList
 * 
 */
export type EmojiList = $Result.DefaultSelection<Prisma.$EmojiListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EmojiLists
 * const emojiLists = await prisma.emojiList.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EmojiLists
   * const emojiLists = await prisma.emojiList.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.emojiList`: Exposes CRUD operations for the **EmojiList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmojiLists
    * const emojiLists = await prisma.emojiList.findMany()
    * ```
    */
  get emojiList(): Prisma.EmojiListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    EmojiList: 'EmojiList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "emojiList"
      txIsolationLevel: never
    }
    model: {
      EmojiList: {
        payload: Prisma.$EmojiListPayload<ExtArgs>
        fields: Prisma.EmojiListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmojiListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmojiListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          findFirst: {
            args: Prisma.EmojiListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmojiListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          findMany: {
            args: Prisma.EmojiListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>[]
          }
          create: {
            args: Prisma.EmojiListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          createMany: {
            args: Prisma.EmojiListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmojiListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          update: {
            args: Prisma.EmojiListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          deleteMany: {
            args: Prisma.EmojiListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmojiListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmojiListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiListPayload>
          }
          aggregate: {
            args: Prisma.EmojiListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmojiList>
          }
          groupBy: {
            args: Prisma.EmojiListGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmojiListGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmojiListFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmojiListAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmojiListCountArgs<ExtArgs>
            result: $Utils.Optional<EmojiListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    emojiList?: EmojiListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
   * Model EmojiList
   */

  export type AggregateEmojiList = {
    _count: EmojiListCountAggregateOutputType | null
    _min: EmojiListMinAggregateOutputType | null
    _max: EmojiListMaxAggregateOutputType | null
  }

  export type EmojiListMinAggregateOutputType = {
    id: string | null
    emoji: string | null
    answerTR: string | null
    answerEN: string | null
    answerSP: string | null
    answerDU: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type EmojiListMaxAggregateOutputType = {
    id: string | null
    emoji: string | null
    answerTR: string | null
    answerEN: string | null
    answerSP: string | null
    answerDU: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type EmojiListCountAggregateOutputType = {
    id: number
    emoji: number
    answerTR: number
    answerEN: number
    answerSP: number
    answerDU: number
    startTime: number
    endTime: number
    _all: number
  }


  export type EmojiListMinAggregateInputType = {
    id?: true
    emoji?: true
    answerTR?: true
    answerEN?: true
    answerSP?: true
    answerDU?: true
    startTime?: true
    endTime?: true
  }

  export type EmojiListMaxAggregateInputType = {
    id?: true
    emoji?: true
    answerTR?: true
    answerEN?: true
    answerSP?: true
    answerDU?: true
    startTime?: true
    endTime?: true
  }

  export type EmojiListCountAggregateInputType = {
    id?: true
    emoji?: true
    answerTR?: true
    answerEN?: true
    answerSP?: true
    answerDU?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type EmojiListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiList to aggregate.
     */
    where?: EmojiListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiLists to fetch.
     */
    orderBy?: EmojiListOrderByWithRelationInput | EmojiListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmojiListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmojiLists
    **/
    _count?: true | EmojiListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmojiListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmojiListMaxAggregateInputType
  }

  export type GetEmojiListAggregateType<T extends EmojiListAggregateArgs> = {
        [P in keyof T & keyof AggregateEmojiList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmojiList[P]>
      : GetScalarType<T[P], AggregateEmojiList[P]>
  }




  export type EmojiListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmojiListWhereInput
    orderBy?: EmojiListOrderByWithAggregationInput | EmojiListOrderByWithAggregationInput[]
    by: EmojiListScalarFieldEnum[] | EmojiListScalarFieldEnum
    having?: EmojiListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmojiListCountAggregateInputType | true
    _min?: EmojiListMinAggregateInputType
    _max?: EmojiListMaxAggregateInputType
  }

  export type EmojiListGroupByOutputType = {
    id: string
    emoji: string
    answerTR: string
    answerEN: string
    answerSP: string
    answerDU: string
    startTime: Date | null
    endTime: Date | null
    _count: EmojiListCountAggregateOutputType | null
    _min: EmojiListMinAggregateOutputType | null
    _max: EmojiListMaxAggregateOutputType | null
  }

  type GetEmojiListGroupByPayload<T extends EmojiListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmojiListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmojiListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmojiListGroupByOutputType[P]>
            : GetScalarType<T[P], EmojiListGroupByOutputType[P]>
        }
      >
    >


  export type EmojiListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    answerTR?: boolean
    answerEN?: boolean
    answerSP?: boolean
    answerDU?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["emojiList"]>



  export type EmojiListSelectScalar = {
    id?: boolean
    emoji?: boolean
    answerTR?: boolean
    answerEN?: boolean
    answerSP?: boolean
    answerDU?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type EmojiListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emoji" | "answerTR" | "answerEN" | "answerSP" | "answerDU" | "startTime" | "endTime", ExtArgs["result"]["emojiList"]>

  export type $EmojiListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmojiList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emoji: string
      answerTR: string
      answerEN: string
      answerSP: string
      answerDU: string
      startTime: Date | null
      endTime: Date | null
    }, ExtArgs["result"]["emojiList"]>
    composites: {}
  }

  type EmojiListGetPayload<S extends boolean | null | undefined | EmojiListDefaultArgs> = $Result.GetResult<Prisma.$EmojiListPayload, S>

  type EmojiListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmojiListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmojiListCountAggregateInputType | true
    }

  export interface EmojiListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmojiList'], meta: { name: 'EmojiList' } }
    /**
     * Find zero or one EmojiList that matches the filter.
     * @param {EmojiListFindUniqueArgs} args - Arguments to find a EmojiList
     * @example
     * // Get one EmojiList
     * const emojiList = await prisma.emojiList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmojiListFindUniqueArgs>(args: SelectSubset<T, EmojiListFindUniqueArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmojiList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmojiListFindUniqueOrThrowArgs} args - Arguments to find a EmojiList
     * @example
     * // Get one EmojiList
     * const emojiList = await prisma.emojiList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmojiListFindUniqueOrThrowArgs>(args: SelectSubset<T, EmojiListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListFindFirstArgs} args - Arguments to find a EmojiList
     * @example
     * // Get one EmojiList
     * const emojiList = await prisma.emojiList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmojiListFindFirstArgs>(args?: SelectSubset<T, EmojiListFindFirstArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListFindFirstOrThrowArgs} args - Arguments to find a EmojiList
     * @example
     * // Get one EmojiList
     * const emojiList = await prisma.emojiList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmojiListFindFirstOrThrowArgs>(args?: SelectSubset<T, EmojiListFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmojiLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmojiLists
     * const emojiLists = await prisma.emojiList.findMany()
     * 
     * // Get first 10 EmojiLists
     * const emojiLists = await prisma.emojiList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emojiListWithIdOnly = await prisma.emojiList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmojiListFindManyArgs>(args?: SelectSubset<T, EmojiListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmojiList.
     * @param {EmojiListCreateArgs} args - Arguments to create a EmojiList.
     * @example
     * // Create one EmojiList
     * const EmojiList = await prisma.emojiList.create({
     *   data: {
     *     // ... data to create a EmojiList
     *   }
     * })
     * 
     */
    create<T extends EmojiListCreateArgs>(args: SelectSubset<T, EmojiListCreateArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmojiLists.
     * @param {EmojiListCreateManyArgs} args - Arguments to create many EmojiLists.
     * @example
     * // Create many EmojiLists
     * const emojiList = await prisma.emojiList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmojiListCreateManyArgs>(args?: SelectSubset<T, EmojiListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmojiList.
     * @param {EmojiListDeleteArgs} args - Arguments to delete one EmojiList.
     * @example
     * // Delete one EmojiList
     * const EmojiList = await prisma.emojiList.delete({
     *   where: {
     *     // ... filter to delete one EmojiList
     *   }
     * })
     * 
     */
    delete<T extends EmojiListDeleteArgs>(args: SelectSubset<T, EmojiListDeleteArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmojiList.
     * @param {EmojiListUpdateArgs} args - Arguments to update one EmojiList.
     * @example
     * // Update one EmojiList
     * const emojiList = await prisma.emojiList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmojiListUpdateArgs>(args: SelectSubset<T, EmojiListUpdateArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmojiLists.
     * @param {EmojiListDeleteManyArgs} args - Arguments to filter EmojiLists to delete.
     * @example
     * // Delete a few EmojiLists
     * const { count } = await prisma.emojiList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmojiListDeleteManyArgs>(args?: SelectSubset<T, EmojiListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmojiLists
     * const emojiList = await prisma.emojiList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmojiListUpdateManyArgs>(args: SelectSubset<T, EmojiListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmojiList.
     * @param {EmojiListUpsertArgs} args - Arguments to update or create a EmojiList.
     * @example
     * // Update or create a EmojiList
     * const emojiList = await prisma.emojiList.upsert({
     *   create: {
     *     // ... data to create a EmojiList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmojiList we want to update
     *   }
     * })
     */
    upsert<T extends EmojiListUpsertArgs>(args: SelectSubset<T, EmojiListUpsertArgs<ExtArgs>>): Prisma__EmojiListClient<$Result.GetResult<Prisma.$EmojiListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmojiLists that matches the filter.
     * @param {EmojiListFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const emojiList = await prisma.emojiList.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmojiListFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EmojiList.
     * @param {EmojiListAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const emojiList = await prisma.emojiList.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmojiListAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EmojiLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListCountArgs} args - Arguments to filter EmojiLists to count.
     * @example
     * // Count the number of EmojiLists
     * const count = await prisma.emojiList.count({
     *   where: {
     *     // ... the filter for the EmojiLists we want to count
     *   }
     * })
    **/
    count<T extends EmojiListCountArgs>(
      args?: Subset<T, EmojiListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmojiListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmojiList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmojiListAggregateArgs>(args: Subset<T, EmojiListAggregateArgs>): Prisma.PrismaPromise<GetEmojiListAggregateType<T>>

    /**
     * Group by EmojiList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiListGroupByArgs} args - Group by arguments.
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
      T extends EmojiListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmojiListGroupByArgs['orderBy'] }
        : { orderBy?: EmojiListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmojiListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmojiListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmojiList model
   */
  readonly fields: EmojiListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmojiList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmojiListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmojiList model
   */
  interface EmojiListFieldRefs {
    readonly id: FieldRef<"EmojiList", 'String'>
    readonly emoji: FieldRef<"EmojiList", 'String'>
    readonly answerTR: FieldRef<"EmojiList", 'String'>
    readonly answerEN: FieldRef<"EmojiList", 'String'>
    readonly answerSP: FieldRef<"EmojiList", 'String'>
    readonly answerDU: FieldRef<"EmojiList", 'String'>
    readonly startTime: FieldRef<"EmojiList", 'DateTime'>
    readonly endTime: FieldRef<"EmojiList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmojiList findUnique
   */
  export type EmojiListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter, which EmojiList to fetch.
     */
    where: EmojiListWhereUniqueInput
  }

  /**
   * EmojiList findUniqueOrThrow
   */
  export type EmojiListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter, which EmojiList to fetch.
     */
    where: EmojiListWhereUniqueInput
  }

  /**
   * EmojiList findFirst
   */
  export type EmojiListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter, which EmojiList to fetch.
     */
    where?: EmojiListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiLists to fetch.
     */
    orderBy?: EmojiListOrderByWithRelationInput | EmojiListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiLists.
     */
    cursor?: EmojiListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiLists.
     */
    distinct?: EmojiListScalarFieldEnum | EmojiListScalarFieldEnum[]
  }

  /**
   * EmojiList findFirstOrThrow
   */
  export type EmojiListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter, which EmojiList to fetch.
     */
    where?: EmojiListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiLists to fetch.
     */
    orderBy?: EmojiListOrderByWithRelationInput | EmojiListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiLists.
     */
    cursor?: EmojiListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiLists.
     */
    distinct?: EmojiListScalarFieldEnum | EmojiListScalarFieldEnum[]
  }

  /**
   * EmojiList findMany
   */
  export type EmojiListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter, which EmojiLists to fetch.
     */
    where?: EmojiListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiLists to fetch.
     */
    orderBy?: EmojiListOrderByWithRelationInput | EmojiListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmojiLists.
     */
    cursor?: EmojiListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiLists.
     */
    skip?: number
    distinct?: EmojiListScalarFieldEnum | EmojiListScalarFieldEnum[]
  }

  /**
   * EmojiList create
   */
  export type EmojiListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * The data needed to create a EmojiList.
     */
    data: XOR<EmojiListCreateInput, EmojiListUncheckedCreateInput>
  }

  /**
   * EmojiList createMany
   */
  export type EmojiListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmojiLists.
     */
    data: EmojiListCreateManyInput | EmojiListCreateManyInput[]
  }

  /**
   * EmojiList update
   */
  export type EmojiListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * The data needed to update a EmojiList.
     */
    data: XOR<EmojiListUpdateInput, EmojiListUncheckedUpdateInput>
    /**
     * Choose, which EmojiList to update.
     */
    where: EmojiListWhereUniqueInput
  }

  /**
   * EmojiList updateMany
   */
  export type EmojiListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmojiLists.
     */
    data: XOR<EmojiListUpdateManyMutationInput, EmojiListUncheckedUpdateManyInput>
    /**
     * Filter which EmojiLists to update
     */
    where?: EmojiListWhereInput
    /**
     * Limit how many EmojiLists to update.
     */
    limit?: number
  }

  /**
   * EmojiList upsert
   */
  export type EmojiListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * The filter to search for the EmojiList to update in case it exists.
     */
    where: EmojiListWhereUniqueInput
    /**
     * In case the EmojiList found by the `where` argument doesn't exist, create a new EmojiList with this data.
     */
    create: XOR<EmojiListCreateInput, EmojiListUncheckedCreateInput>
    /**
     * In case the EmojiList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmojiListUpdateInput, EmojiListUncheckedUpdateInput>
  }

  /**
   * EmojiList delete
   */
  export type EmojiListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
    /**
     * Filter which EmojiList to delete.
     */
    where: EmojiListWhereUniqueInput
  }

  /**
   * EmojiList deleteMany
   */
  export type EmojiListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiLists to delete
     */
    where?: EmojiListWhereInput
    /**
     * Limit how many EmojiLists to delete.
     */
    limit?: number
  }

  /**
   * EmojiList findRaw
   */
  export type EmojiListFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EmojiList aggregateRaw
   */
  export type EmojiListAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EmojiList without action
   */
  export type EmojiListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiList
     */
    select?: EmojiListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiList
     */
    omit?: EmojiListOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const EmojiListScalarFieldEnum: {
    id: 'id',
    emoji: 'emoji',
    answerTR: 'answerTR',
    answerEN: 'answerEN',
    answerSP: 'answerSP',
    answerDU: 'answerDU',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type EmojiListScalarFieldEnum = (typeof EmojiListScalarFieldEnum)[keyof typeof EmojiListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EmojiListWhereInput = {
    AND?: EmojiListWhereInput | EmojiListWhereInput[]
    OR?: EmojiListWhereInput[]
    NOT?: EmojiListWhereInput | EmojiListWhereInput[]
    id?: StringFilter<"EmojiList"> | string
    emoji?: StringFilter<"EmojiList"> | string
    answerTR?: StringFilter<"EmojiList"> | string
    answerEN?: StringFilter<"EmojiList"> | string
    answerSP?: StringFilter<"EmojiList"> | string
    answerDU?: StringFilter<"EmojiList"> | string
    startTime?: DateTimeNullableFilter<"EmojiList"> | Date | string | null
    endTime?: DateTimeNullableFilter<"EmojiList"> | Date | string | null
  }

  export type EmojiListOrderByWithRelationInput = {
    id?: SortOrder
    emoji?: SortOrder
    answerTR?: SortOrder
    answerEN?: SortOrder
    answerSP?: SortOrder
    answerDU?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EmojiListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emoji?: string
    AND?: EmojiListWhereInput | EmojiListWhereInput[]
    OR?: EmojiListWhereInput[]
    NOT?: EmojiListWhereInput | EmojiListWhereInput[]
    answerTR?: StringFilter<"EmojiList"> | string
    answerEN?: StringFilter<"EmojiList"> | string
    answerSP?: StringFilter<"EmojiList"> | string
    answerDU?: StringFilter<"EmojiList"> | string
    startTime?: DateTimeNullableFilter<"EmojiList"> | Date | string | null
    endTime?: DateTimeNullableFilter<"EmojiList"> | Date | string | null
  }, "id" | "emoji">

  export type EmojiListOrderByWithAggregationInput = {
    id?: SortOrder
    emoji?: SortOrder
    answerTR?: SortOrder
    answerEN?: SortOrder
    answerSP?: SortOrder
    answerDU?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: EmojiListCountOrderByAggregateInput
    _max?: EmojiListMaxOrderByAggregateInput
    _min?: EmojiListMinOrderByAggregateInput
  }

  export type EmojiListScalarWhereWithAggregatesInput = {
    AND?: EmojiListScalarWhereWithAggregatesInput | EmojiListScalarWhereWithAggregatesInput[]
    OR?: EmojiListScalarWhereWithAggregatesInput[]
    NOT?: EmojiListScalarWhereWithAggregatesInput | EmojiListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmojiList"> | string
    emoji?: StringWithAggregatesFilter<"EmojiList"> | string
    answerTR?: StringWithAggregatesFilter<"EmojiList"> | string
    answerEN?: StringWithAggregatesFilter<"EmojiList"> | string
    answerSP?: StringWithAggregatesFilter<"EmojiList"> | string
    answerDU?: StringWithAggregatesFilter<"EmojiList"> | string
    startTime?: DateTimeNullableWithAggregatesFilter<"EmojiList"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"EmojiList"> | Date | string | null
  }

  export type EmojiListCreateInput = {
    id?: string
    emoji: string
    answerTR: string
    answerEN: string
    answerSP: string
    answerDU: string
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type EmojiListUncheckedCreateInput = {
    id?: string
    emoji: string
    answerTR: string
    answerEN: string
    answerSP: string
    answerDU: string
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type EmojiListUpdateInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    answerTR?: StringFieldUpdateOperationsInput | string
    answerEN?: StringFieldUpdateOperationsInput | string
    answerSP?: StringFieldUpdateOperationsInput | string
    answerDU?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmojiListUncheckedUpdateInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    answerTR?: StringFieldUpdateOperationsInput | string
    answerEN?: StringFieldUpdateOperationsInput | string
    answerSP?: StringFieldUpdateOperationsInput | string
    answerDU?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmojiListCreateManyInput = {
    id?: string
    emoji: string
    answerTR: string
    answerEN: string
    answerSP: string
    answerDU: string
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type EmojiListUpdateManyMutationInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    answerTR?: StringFieldUpdateOperationsInput | string
    answerEN?: StringFieldUpdateOperationsInput | string
    answerSP?: StringFieldUpdateOperationsInput | string
    answerDU?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmojiListUncheckedUpdateManyInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    answerTR?: StringFieldUpdateOperationsInput | string
    answerEN?: StringFieldUpdateOperationsInput | string
    answerSP?: StringFieldUpdateOperationsInput | string
    answerDU?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EmojiListCountOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    answerTR?: SortOrder
    answerEN?: SortOrder
    answerSP?: SortOrder
    answerDU?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EmojiListMaxOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    answerTR?: SortOrder
    answerEN?: SortOrder
    answerSP?: SortOrder
    answerDU?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EmojiListMinOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    answerTR?: SortOrder
    answerEN?: SortOrder
    answerSP?: SortOrder
    answerDU?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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