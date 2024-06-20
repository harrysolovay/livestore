import { z } from 'zod';
import type { Prisma } from './prismaClient.js';
import { type TableSchema, DbSchema, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations.js';
import pgMigrations from './pg-migrations.js';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const Mutation_logScalarFieldEnumSchema = z.enum(['id','mutation','argsjson','schemahash','createdat','syncstatus']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// MUTATION LOG SCHEMA
/////////////////////////////////////////

export const Mutation_logSchema = z.object({
  id: z.string(),
  mutation: z.string(),
  argsjson: z.string(),
  schemahash: z.number().int().gte(-2147483648).lte(2147483647),
  createdat: z.string(),
  syncstatus: z.string(),
})

export type Mutation_log = z.infer<typeof Mutation_logSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// MUTATION LOG
//------------------------------------------------------

export const Mutation_logSelectSchema: z.ZodType<Prisma.Mutation_logSelect> = z.object({
  id: z.boolean().optional(),
  mutation: z.boolean().optional(),
  argsjson: z.boolean().optional(),
  schemahash: z.boolean().optional(),
  createdat: z.boolean().optional(),
  syncstatus: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Mutation_logWhereInputSchema: z.ZodType<Prisma.Mutation_logWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Mutation_logWhereInputSchema),z.lazy(() => Mutation_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Mutation_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Mutation_logWhereInputSchema),z.lazy(() => Mutation_logWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mutation: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  argsjson: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  schemahash: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdat: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  syncstatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const Mutation_logOrderByWithRelationInputSchema: z.ZodType<Prisma.Mutation_logOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mutation: z.lazy(() => SortOrderSchema).optional(),
  argsjson: z.lazy(() => SortOrderSchema).optional(),
  schemahash: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  syncstatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Mutation_logWhereUniqueInputSchema: z.ZodType<Prisma.Mutation_logWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const Mutation_logOrderByWithAggregationInputSchema: z.ZodType<Prisma.Mutation_logOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mutation: z.lazy(() => SortOrderSchema).optional(),
  argsjson: z.lazy(() => SortOrderSchema).optional(),
  schemahash: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  syncstatus: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Mutation_logCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Mutation_logAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Mutation_logMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Mutation_logMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Mutation_logSumOrderByAggregateInputSchema).optional()
}).strict();

export const Mutation_logScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Mutation_logScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Mutation_logScalarWhereWithAggregatesInputSchema),z.lazy(() => Mutation_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Mutation_logScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Mutation_logScalarWhereWithAggregatesInputSchema),z.lazy(() => Mutation_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mutation: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  argsjson: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  schemahash: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdat: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  syncstatus: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const Mutation_logCreateInputSchema: z.ZodType<Prisma.Mutation_logCreateInput> = z.object({
  id: z.string(),
  mutation: z.string(),
  argsjson: z.string(),
  schemahash: z.number().int().gte(-2147483648).lte(2147483647),
  createdat: z.string(),
  syncstatus: z.string()
}).strict();

export const Mutation_logUncheckedCreateInputSchema: z.ZodType<Prisma.Mutation_logUncheckedCreateInput> = z.object({
  id: z.string(),
  mutation: z.string(),
  argsjson: z.string(),
  schemahash: z.number().int().gte(-2147483648).lte(2147483647),
  createdat: z.string(),
  syncstatus: z.string()
}).strict();

export const Mutation_logUpdateInputSchema: z.ZodType<Prisma.Mutation_logUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mutation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  argsjson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  schemahash: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  syncstatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Mutation_logUncheckedUpdateInputSchema: z.ZodType<Prisma.Mutation_logUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mutation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  argsjson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  schemahash: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  syncstatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Mutation_logCreateManyInputSchema: z.ZodType<Prisma.Mutation_logCreateManyInput> = z.object({
  id: z.string(),
  mutation: z.string(),
  argsjson: z.string(),
  schemahash: z.number().int().gte(-2147483648).lte(2147483647),
  createdat: z.string(),
  syncstatus: z.string()
}).strict();

export const Mutation_logUpdateManyMutationInputSchema: z.ZodType<Prisma.Mutation_logUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mutation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  argsjson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  schemahash: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  syncstatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Mutation_logUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Mutation_logUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mutation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  argsjson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  schemahash: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  syncstatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const Mutation_logCountOrderByAggregateInputSchema: z.ZodType<Prisma.Mutation_logCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mutation: z.lazy(() => SortOrderSchema).optional(),
  argsjson: z.lazy(() => SortOrderSchema).optional(),
  schemahash: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  syncstatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Mutation_logAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Mutation_logAvgOrderByAggregateInput> = z.object({
  schemahash: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Mutation_logMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Mutation_logMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mutation: z.lazy(() => SortOrderSchema).optional(),
  argsjson: z.lazy(() => SortOrderSchema).optional(),
  schemahash: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  syncstatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Mutation_logMinOrderByAggregateInputSchema: z.ZodType<Prisma.Mutation_logMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mutation: z.lazy(() => SortOrderSchema).optional(),
  argsjson: z.lazy(() => SortOrderSchema).optional(),
  schemahash: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  syncstatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Mutation_logSumOrderByAggregateInputSchema: z.ZodType<Prisma.Mutation_logSumOrderByAggregateInput> = z.object({
  schemahash: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Mutation_logFindFirstArgsSchema: z.ZodType<Prisma.Mutation_logFindFirstArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereInputSchema.optional(),
  orderBy: z.union([ Mutation_logOrderByWithRelationInputSchema.array(),Mutation_logOrderByWithRelationInputSchema ]).optional(),
  cursor: Mutation_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Mutation_logScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Mutation_logFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Mutation_logFindFirstOrThrowArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereInputSchema.optional(),
  orderBy: z.union([ Mutation_logOrderByWithRelationInputSchema.array(),Mutation_logOrderByWithRelationInputSchema ]).optional(),
  cursor: Mutation_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Mutation_logScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Mutation_logFindManyArgsSchema: z.ZodType<Prisma.Mutation_logFindManyArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereInputSchema.optional(),
  orderBy: z.union([ Mutation_logOrderByWithRelationInputSchema.array(),Mutation_logOrderByWithRelationInputSchema ]).optional(),
  cursor: Mutation_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Mutation_logScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Mutation_logAggregateArgsSchema: z.ZodType<Prisma.Mutation_logAggregateArgs> = z.object({
  where: Mutation_logWhereInputSchema.optional(),
  orderBy: z.union([ Mutation_logOrderByWithRelationInputSchema.array(),Mutation_logOrderByWithRelationInputSchema ]).optional(),
  cursor: Mutation_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const Mutation_logGroupByArgsSchema: z.ZodType<Prisma.Mutation_logGroupByArgs> = z.object({
  where: Mutation_logWhereInputSchema.optional(),
  orderBy: z.union([ Mutation_logOrderByWithAggregationInputSchema.array(),Mutation_logOrderByWithAggregationInputSchema ]).optional(),
  by: Mutation_logScalarFieldEnumSchema.array(),
  having: Mutation_logScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const Mutation_logFindUniqueArgsSchema: z.ZodType<Prisma.Mutation_logFindUniqueArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereUniqueInputSchema,
}).strict() 

export const Mutation_logFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Mutation_logFindUniqueOrThrowArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereUniqueInputSchema,
}).strict() 

export const Mutation_logCreateArgsSchema: z.ZodType<Prisma.Mutation_logCreateArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  data: z.union([ Mutation_logCreateInputSchema,Mutation_logUncheckedCreateInputSchema ]),
}).strict() 

export const Mutation_logUpsertArgsSchema: z.ZodType<Prisma.Mutation_logUpsertArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereUniqueInputSchema,
  create: z.union([ Mutation_logCreateInputSchema,Mutation_logUncheckedCreateInputSchema ]),
  update: z.union([ Mutation_logUpdateInputSchema,Mutation_logUncheckedUpdateInputSchema ]),
}).strict() 

export const Mutation_logCreateManyArgsSchema: z.ZodType<Prisma.Mutation_logCreateManyArgs> = z.object({
  data: Mutation_logCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const Mutation_logDeleteArgsSchema: z.ZodType<Prisma.Mutation_logDeleteArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  where: Mutation_logWhereUniqueInputSchema,
}).strict() 

export const Mutation_logUpdateArgsSchema: z.ZodType<Prisma.Mutation_logUpdateArgs> = z.object({
  select: Mutation_logSelectSchema.optional(),
  data: z.union([ Mutation_logUpdateInputSchema,Mutation_logUncheckedUpdateInputSchema ]),
  where: Mutation_logWhereUniqueInputSchema,
}).strict() 

export const Mutation_logUpdateManyArgsSchema: z.ZodType<Prisma.Mutation_logUpdateManyArgs> = z.object({
  data: z.union([ Mutation_logUpdateManyMutationInputSchema,Mutation_logUncheckedUpdateManyInputSchema ]),
  where: Mutation_logWhereInputSchema.optional(),
}).strict() 

export const Mutation_logDeleteManyArgsSchema: z.ZodType<Prisma.Mutation_logDeleteManyArgs> = z.object({
  where: Mutation_logWhereInputSchema.optional(),
}).strict() 

interface Mutation_logGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Mutation_logArgs
  readonly type: Omit<Prisma.Mutation_logGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  mutation_log: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "mutation",
        "TEXT"
      ],
      [
        "argsjson",
        "TEXT"
      ],
      [
        "schemahash",
        "INT4"
      ],
      [
        "createdat",
        "TEXT"
      ],
      [
        "syncstatus",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (Mutation_logCreateInputSchema as any)
      .partial()
      .or((Mutation_logUncheckedCreateInputSchema as any).partial()),
    createSchema: Mutation_logCreateArgsSchema,
    createManySchema: Mutation_logCreateManyArgsSchema,
    findUniqueSchema: Mutation_logFindUniqueArgsSchema,
    findSchema: Mutation_logFindFirstArgsSchema,
    updateSchema: Mutation_logUpdateArgsSchema,
    updateManySchema: Mutation_logUpdateManyArgsSchema,
    upsertSchema: Mutation_logUpsertArgsSchema,
    deleteSchema: Mutation_logDeleteArgsSchema,
    deleteManySchema: Mutation_logDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Mutation_logUncheckedCreateInputSchema>,
    Prisma.Mutation_logCreateArgs['data'],
    Prisma.Mutation_logUpdateArgs['data'],
    Prisma.Mutation_logFindFirstArgs['select'],
    Prisma.Mutation_logFindFirstArgs['where'],
    Prisma.Mutation_logFindUniqueArgs['where'],
    never,
    Prisma.Mutation_logFindFirstArgs['orderBy'],
    Prisma.Mutation_logScalarFieldEnum,
    Mutation_logGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations, pgMigrations)
export type Electric = ElectricClient<typeof schema>
