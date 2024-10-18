import fastifyEnv from '@fastify/env';
import { FastifyInstance } from 'fastify';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
  },
};

const options = {
  confKey: 'config',
  schema: schema,
  dotenv: true,
};

export async function config(fastify: FastifyInstance): Promise<void> {
  await fastify.register(fastifyEnv, options);
}

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number;
    };
  }
}
