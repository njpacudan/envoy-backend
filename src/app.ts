import { Application } from 'express';
import { app } from './lib/express';

export default function runServer() {
  const application: Application = app;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require('./routes').default;
  route(application);
  return application;
}
