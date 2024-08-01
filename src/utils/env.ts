import { z as zod } from 'zod';

const environmentVariablesSchema = zod.object({
  PORT: zod.coerce.number().default(3333),
});

const _env = environmentVariablesSchema.safeParse(process.env);

if (!_env.success) {
  throw new Error('environments variable must be declare');
}

export const env = _env.data;
