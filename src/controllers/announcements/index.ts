import { prisma } from '../../lib/prisma';

const news = {
  list: async (_req: any, res: any) => {
    let announcements = await prisma.announcements.findMany({
      orderBy: {
        // Latest posted announcements is displayed first.
        post_date: 'desc',
      },
    });

    res.status(200).json(announcements);
  },

  info: async (req: any, res: any) => {
    let announcement = await prisma.announcements.findUnique({
      where: { id: req.body.id },
    });

    res.status(200).json(announcement);
  },

  course: async (req: any, res: any) => {
    let courses = await prisma.announcements.findMany({
      where: { course: req.query.course },
    });

    res.status(200).json(courses);
  },

  post: async (req: any, res: any) => {
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
  },
};

export default news;
