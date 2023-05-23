import { FastifyReply, FastifyRequest } from "fastify";

export class HelloController {
  public async hello(_request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ message: "hello world!" });
  }
}
