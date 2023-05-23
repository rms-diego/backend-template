import fastify from "fastify";

import cors from "@fastify/cors";
import { appRoutes } from "../http/routes";
import { erroHandler } from "../http/middlewares/error-handler";

const app = fastify({ logger: true });

app.register(appRoutes);
app.setErrorHandler(erroHandler);
app.register(cors);

export { app };
