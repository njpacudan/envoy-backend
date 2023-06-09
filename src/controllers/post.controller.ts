import { prisma } from '@lib/prisma';
import config '@config';

const postAnnouncements = {
  postAnnouncement: async(req: any, res: any) => {
    const announcement = await prisma.announcements.create({
      // Course, Description, Title
      ...req.body,
      author: '',
      post_date: new Date(),
      status: 'true',
      views: 0,
    });
  }
}

export default postAnnouncements;

