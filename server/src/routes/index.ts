import { Router } from 'express';
import processRouter from './process.routes';

const routes = Router();

routes.use('/process', processRouter);

export default routes;
