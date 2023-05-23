import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { Exception } from "../../Exception";

export const erroHandler = async (
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  if (error instanceof Exception) {
    return reply.status(error.statusCode).send({ error: error.message });
  }

  return reply.status(500).send({ error: error.message });
};
