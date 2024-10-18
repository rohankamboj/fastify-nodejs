import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getExampleHandler } from './example.handlers';

export const exampleRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance
) => {
  fastify.get('/', getExampleHandler);
};
