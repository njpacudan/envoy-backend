import * as dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';
import app from '../../../../lib/express';
import prisma from '../../../../lib/prisma';

const URL = `${process.env.API_BASE_URL}/users/student`;

export const list = app.get(URL, async (_req: any, res: any) => {
  let students = await prisma.users_student.findMany();

  res.status(200).json(students);
});

export const info = app.get(`${URL}/info`, async (req: any, res: any) => {
  let student = await prisma.users_student.findUnique({
    where: { email: req.query.email },
  });

  res.status(200).json(student);
});

export const create = app.post(`${URL}/create`, async (req: any, res: any) => {
  let student = await prisma.users_student.create({
    data: {
      // Name, email, course, passsword
      ...req.body,
      password: await bcrypt.hash(req.body.password, 12),
      date_registered: new Date(),
      last_login: new Date(),
      status: 'Active',
    },
  });

  res.status(201).json(student);
});

export const disable = app.patch(`${URL}/disable`, async (req: any, res: any) => {
  await prisma.users_student.update({
    where: {
      email: req.query.email,
    },
    data: {
      status: 'Disabled',
    },
  });

  res.status(200).json('Your account has been disabled.');
});

export const update = app.put(`${URL}/update`, async (req: any, res: any) => {
  let student = await prisma.users_student.update({
    where: {
      email: req.query.email,
    },
    data: {
      // Course, email, password.
      ...req.body,
    },
  });

  res.status(200).json(student);
});
