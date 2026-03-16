import express from 'express';
import { router } from './router.js';

export function createServer() {
  const app = express();
  app.use(express.json());
  app.use('/api', router);
  return app;
}