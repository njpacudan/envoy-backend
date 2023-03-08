import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../lib/express';
import prisma from '../../../lib/prisma';

const URL = `${process.env.API_BASE_URL}/announcements`;

export const list = app.get(URL, async (_req: any, res: any) => {
  let announcements = await prisma.announcements.findMany({
    orderBy: {
      // Latest posted announcements is displayed first.
      post_date: 'desc',
    },
  });

  res.status(200).json(announcements);
});

export const announcement = app.get(`${URL}/info`, async (req: any, res: any) => {
  let announcement = await prisma.announcements.findUnique({
    where: { id: req.body.id },
  });

  res.status(200).json(announcement);
});

export const news_course = app.get(`${URL}/course`, async (req: any, res: any) => {
  let courses = await prisma.announcements.findMany({
    where: { course: req.query.course },
  });

  res.status(200).json(courses);
});

export const post = app.post(`${URL}/post`, async (req: any, res: any) => {
  let announcement = await prisma.announcements.create({
    data: {
      // Title, author, course, description, image, url
      ...req.body,
      post_date: new Date(),
      views: 0,
      status: 'Active',
    },
  });

  res.status(201).json(announcement);
});
