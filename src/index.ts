import 'module-alias/register';
import { Server, createServer } from 'http';
import runServer from '@app';
import logger from '@lib/logger';
import config from '@config';

const app = runServer();
const httpServer = createServer(app);

const host: string = config.HOST;
const port: number = Number(config.PORT) || 3000;

const server: Server = httpServer.listen(port, () => {
  logger.info(`Listening to port ${host}:${port}`, 'server');
});
