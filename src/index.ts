import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (_req: any, res: any) => {
  res.json('Envoy (back-end)');
});

const server = app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server ready at: ${process.env.EXPRESS_PORT}`);
});
