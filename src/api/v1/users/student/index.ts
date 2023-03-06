import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../../lib/express';
import prisma from '../../../../lib/prisma';

const URL = `${process.env.API_BASE_URL}/users/student`;

export const get = app.get(URL, async (_req: any, res: any) => {
  let students = await prisma.users_student.findMany();

  res.status(200).json(students);
});

export const info = app.get(`${URL}/info`, async (req: any, res: any) => {
  let student = await prisma.users_student.findUnique({
    where: { email: req.query.email },
  });

  res.status(200).json(student);
});

export const post = app.post(URL, async (req: any, res: any) => {
  let student = await prisma.users_student.create({
    data: {
      ...req.body,
      date_registered: new Date(),
      last_login: new Date(),
      status: 'Active',
    },
  });

  res.status(201).json(student);
});
