import express, { NextFunction, Request, Response } from 'express';

import routes from 'routes';
import 'express-async-errors';
import { errors } from 'celebrate';
import AppError from 'errors/AppError';

const server = express();
server.use(express.json());

server.use(routes);

server.use(errors());

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

server.listen(3333, () => {
  console.log('O servidor iniciou no seguinte endereço http://localhost:3333');
});
