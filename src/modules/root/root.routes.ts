import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getRootHandler } from './root.handlers';

export const rootRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance
) => {
  fastify.get('/', getRootHandler);
};
