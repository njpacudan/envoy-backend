import * as dotenv from 'dotenv';
dotenv.config();
import app from './lib/express';
import * as faculty from './routes/users/faculty';
import * as student from './routes/users/student';
import * as announcements from './routes/announcements';

faculty;
student;
announcements;

export const server = app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server ready at: ${process.env.EXPRESS_PORT}`);
});
