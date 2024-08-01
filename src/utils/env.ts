import { z as zod } from "zod";

const environmentVariablesSchema = zod.object({
  PORT: zod.coerce.number().default(3333),
});

const isValidEnv = environmentVariablesSchema.safeParse(process.env);

if (!isValidEnv.success) {
  throw new Error("environments variable must be declare");
}

export const env = isValidEnv.data;
