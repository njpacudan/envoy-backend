import { prisma } from '@lib/prisma';

const news = {
    getAllAnnouncements: async (_req: any, res: any) => {
        const announcements = await prisma.announcements.findMany({
            orderBy: {
                // Latest posted announcements is displayed first.
                post_date: 'desc',
            },
        });

        res.status(200).json(announcements);
    },

    getUniAnnouncements: async (_req: any, res: any) => {
        const announcements = await prisma.announcements.findMany({
            where: {
                course: 'University',
            },
            orderBy: {
                post_date: 'desc',
            }
        })

        return res.status(200).json(announcements);
    },

    getAnnouncementInfo: async (req: any, res: any) => {
        const announcement = await prisma.announcements.findUnique({
            where: { id: req.body.id },
        });

        res.status(200).json(announcement);
    },

    getAnnouncementsByCourse: async (req: any, res: any) => {
        const courses = await prisma.announcements.findMany({
            where: { course: req.query.course },
        });

        res.status(200).json(courses);
    },

    postAnnouncements: async (req: any, res: any) => {
        const announcement = await prisma.announcements.create({
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
