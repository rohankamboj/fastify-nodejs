import fastify, { FastifyInstance } from 'fastify';
import { config } from './core/config';
import { errorHandler } from './core/middleware/error-handler';
import { exampleRoutes } from './modules/example/example.routes';
import { rootRoutes } from './modules/root/root.routes';
import { sequelize } from './core/database/sequelize';

const server: FastifyInstance = fastify({
  logger: true,
});
const PORT = 5000;
async function startServer(): Promise<void> {
  try {
    await server.register(config);
    server.setErrorHandler(errorHandler);

    // Sync database
    await sequelize.sync();
    server.log.info('Database synchronized');

    // Register routes
    await server.register(rootRoutes);
    await server.register(exampleRoutes, { prefix: '/api/example' });

    await server.listen({ port: PORT });
    server.log.info(`Server listening on ${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

startServer();
