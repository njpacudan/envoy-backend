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
    TOKEN_KEY: String(process.env.TOKEN_KEY)
};

export default config;
