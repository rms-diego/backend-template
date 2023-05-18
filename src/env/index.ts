import "dotenv/config";

import { z as zod } from "zod";

/* 
  Adicionar suas variáveis de ambiente aqui !
  ao adicionar o zod fará a validação se tem essas variáveis de ambiente no arquivo '.env'

  caso não tenha será retornado um erro no terminal
*/

const environmentVariablesSchema = zod.object({
  PORT: zod.coerce.number(),
});

const _env = environmentVariablesSchema.safeParse(process.env);

if (!_env.success) {
  const errorMessage = JSON.stringify(_env.error.format());

  throw new Error(errorMessage);
}

export const env = _env.data;
