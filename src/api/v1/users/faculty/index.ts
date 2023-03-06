import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../../lib/express';
import prisma from '../../../../lib/prisma';

const URL = `${process.env.API_BASE_URL}/users/faculty`;

export const list = app.get(URL, async (_req: any, res: any) => {
  let faculty = await prisma.users_faculty.findMany();

  res.status(200).json(faculty);
});

export const info = app.get(`${URL}/info`, async (req: any, res: any) => {
  let faculty = await prisma.users_faculty.findUnique({
    where: { email: req.query.email },
  });

  res.status(200).json(faculty);
});
