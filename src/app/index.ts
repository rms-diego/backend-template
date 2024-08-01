import "dotenv/config";
import fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import apiDocs from "@docs/api-docs.json";

import fastifyApiReference from "@scalar/fastify-api-reference";

import { errorMiddleware } from "@/middleware/error-middleware";
import { appRoutes } from "@/modules/app-routes";
import { logger } from "@/utils/logger";

const app = fastify();

app.register(helmet, { global: true });
app.register(cors);
app.register(fastifyApiReference, {
  routePrefix: "/docs",
  configuration: {
    title: "Example API doc",
    spec: {
      content: apiDocs,
    },
  },
});

// http
app.addHook("onRequest", (request, _, done) => {
  request.logStart = Date.now();
  done();
});

app.addHook("onResponse", (request, reply, done) => {
  const { method, url } = request.raw;
  const { statusCode } = reply;
  const responseTime = Date.now() - request.logStart;

  if (statusCode >= 400) {
    return done();
  }

  logger.info(`${method} ${url} ${statusCode} - ${responseTime}ms`);
  done();
});

app.setErrorHandler(errorMiddleware);
app.register(appRoutes);

export { app };
