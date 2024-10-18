import { FastifyReply, FastifyRequest } from 'fastify';
import { RootService } from './root.service';

const rootService = new RootService();

export async function getRootHandler(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const result = await rootService.getHelloWorld();
  reply.send(result);
}
