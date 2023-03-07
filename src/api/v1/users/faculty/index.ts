import * as dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';
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

export const create = app.post(`${URL}/create`, async (req: any, res: any) => {
  let faculty = await prisma.users_faculty.create({
    data: {
      // Name, email, course, password
      ...req.body,
      posts: [],
      password: await bcrypt.hash(req.body.password, 12),
      date_registered: new Date(),
      last_login: new Date(),
      status: 'Active',
    },
  });

  res.status(201).json(faculty);
});

export const disable = app.patch(`${URL}/disable`, async (req: any, res: any) => {
  await prisma.users_faculty.update({
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
  let faculty = await prisma.users_faculty.update({
    where: {
      email: req.query.email,
    },
    data: {
      // Course, email, password.
      ...req.body,
    },
  });

  res.status(200).json(faculty);
});
