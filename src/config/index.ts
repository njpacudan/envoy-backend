import { CONFIG } from '@interfaces/global';
require('dotenv').config();

const config: CONFIG = {
  HOST: String(process.env.HOST) || 'localhost',
  PORT: Number(process.env.PORT) || 3000,
  ENV: String(process.env.ENV),

  MONGODB: {
    USERNAME: String(process.env.USERNAME),
    PASSWORD: String(process.env.PASSWORD),
    CLUSTER: String(process.env.CLUSTER),
    DATABASE: String(process.env.DATABASE),
  },

  GMAIL: {
    GMAIL_USERNAME: String(process.env.GMAIL_USERNAME),
    GMAIL_PASSWORD: String(process.env.GMAIL_PASSWORD),
    GMAIL_HOST: String(process.env.GMAIL_HOST),
    GMAIL_PORT: Number(process.env.GMAIL_PORT),
    CLIENT_ID: String(process.env.CLIENT_ID),
    CLIENT_SECRET: String(process.env.CLIENT_SECRET),
  },

  TOKEN_KEY: String(process.env.TOKEN_KEY),
};

export default config;
