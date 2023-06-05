import bunyan from 'bunyan';
import config from '@config';
import pretty from '@mechanicalhuman/bunyan-pretty';

const logger = bunyan.createLogger({
  name: 'API',
  environment: config.ENV,
  stream: pretty(process.stdout, { timeStamps: false }),
});

export default {
  info: (message: string, component?: string, payload?: any) => {
    if (component) logger.info({ component, ...payload }, message);
    else logger.info(message);
  },

  error: (message: string, component?: string, error?: any) => {
    if (component) logger.error({ component, error }, message);
    else logger.error(message);
  },
};
