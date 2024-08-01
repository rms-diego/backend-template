import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { Exception } from "@/utils/exception";
import { logger } from "@/utils/logger";

export function errorMiddleware(
  err: FastifyError,
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const responseTime = Date.now() - req.logStart;
  const stackError = err.stack ? `stack error` : "";

  logger.error(`${req.method} ${req.url} ${stackError} - ${responseTime}ms`);

  if (err instanceof Exception) {
    return reply.status(err.statusCode).send({ error: err.message });
  }

  return reply.status(500).send({ error: err.message });
}
