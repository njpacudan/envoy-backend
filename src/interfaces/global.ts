export interface CONFIG {
  HOST: string;
  PORT: number;
  ENV: string;
  MONGODB: MONGODB;
  GMAIL: GMAIL;
  TOKEN_KEY: string;
}

export interface MONGODB {
  USERNAME: string;
  PASSWORD: string;
  CLUSTER: string;
  DATABASE: string;
}

export interface GMAIL {
  GMAIL_USERNAME: string;
  GMAIL_PASSWORD: string;
  GMAIL_HOST: string;
  GMAIL_PORT: number;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}
