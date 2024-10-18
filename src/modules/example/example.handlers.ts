import { FastifyReply, FastifyRequest } from 'fastify';
import { ExampleService } from './example.service';

const exampleService = new ExampleService();

export async function getExampleHandler(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const result = await exampleService.getExample();
  reply.send(result);
}
