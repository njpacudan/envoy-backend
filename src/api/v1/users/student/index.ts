import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../../lib/express';
import prisma from '../../../../lib/prisma';

const URL = `${process.env.API_BASE_URL}/users/student`;

export const get = app.get(URL, async (_req: any, res: any) => {
  let students = await prisma.users_student.findMany();

  res.status(200).json(students);
});
