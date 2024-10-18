import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
): void {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message || 'Internal Server Error';

  // Log the error
  request.log.error(error);

  // Send the error response
  reply.status(statusCode).send({
    error: {
      message: errorMessage,
      statusCode: statusCode,
    },
  });
}
