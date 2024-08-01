import 'dotenv/config';
import fastify from 'fastify';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';

import { errorMiddleware } from '@/middleware/error-middleware';
import { appRoutes } from '@/modules/app-routes';

const app = fastify();

app.register(helmet, { global: true });
app.register(cors);

app.setErrorHandler(errorMiddleware);
app.register(appRoutes);

export { app };
