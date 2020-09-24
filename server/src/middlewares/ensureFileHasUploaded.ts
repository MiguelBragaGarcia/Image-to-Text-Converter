import AppError from 'errors/AppError';
import { NextFunction, Request, Response } from 'express';

export default function ensureFileHasUploaded(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  if (!request.file) {
    throw new AppError('No file has been uploaded!!');
  }

  return next();
}
