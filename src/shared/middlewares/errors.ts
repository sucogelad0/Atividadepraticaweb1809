import type { ErrorRequestHandler, RequestHandler } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError.js';

export const asyncHandler = (
  handler: RequestHandler
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve()
      .then(() => handler(req, res, next))
      .catch(next);
  };
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  if (error instanceof AppError) {
    res.status(error.status).json({
      error: error.code,
      message: error.message,
      ...(error.details === undefined ? {} : { details: error.details })
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      error: 'VALIDATION_ERROR',
      message: 'Dados de entrada inválidos.',
      details: error.issues.map(i => ({
        field: i.path.join('.'),
        message: i.message
      }))
    });
    return;
  }

  if (error instanceof SyntaxError && 'status' in error && error.status === 400) {
    res.status(400).json({
      error: 'VALIDATION_ERROR',
      message: 'JSON inválido.'
    });
    return;
  }

  console.error(error);
  res.status(500).json({
    error: 'INTERNAL_ERROR',
    message: 'Erro inesperado.'
  });
};
