import 'dotenv/config';
import fastify from 'fastify';

import { errorMiddleware } from '@/middleware/error-middleware';

const app = fastify();

app.setErrorHandler(errorMiddleware);

export { app };
