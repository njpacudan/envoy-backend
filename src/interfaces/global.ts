export interface CONFIG {
    HOST: string;
    PORT: number;
    ENV: string;
    MONGODB: MONGODB;
    TOKEN_KEY: string;
}

export interface MONGODB {
    USERNAME: string;
    PASSWORD: string;
    CLUSTER: string;
    DATABASE: string;
}
