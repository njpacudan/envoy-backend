import * as dotenv from 'dotenv';
dotenv.config();
import app from './lib/express';
import * as student from './api/v1/users/student';

student;

export const server = app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server ready at: ${process.env.EXPRESS_PORT}`);
});
