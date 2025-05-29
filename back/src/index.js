import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify({ logger: true });

app.register(cors, { origin: true });

app.get('/', async () => {
  return { message: 'Hello from Fastify!' };
});

app.get('/api/status', async () => {
  return { status: 'OK', timestamp: new Date() };
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});
