import { FastifyInstance } from "fastify";
import { HelloController } from "./controllers/hello-controller";

const helloController = new HelloController();

export const appRoutes = async (app: FastifyInstance) => {
  app.get("/", helloController.hello);
};
