import bcrypt from 'bcrypt';
import { prisma } from '@lib/prisma';

const faculty = {
    list: async (req: any, res: any) => {
        const faculty = await prisma.users_faculty.findMany();

        res.status(200).json(faculty);
    },

    info: async (req: any, res: any) => {
        const faculty = await prisma.users_faculty.findUnique({
            where: { email: req.query.email },
        });

        res.status(200).json(faculty);
    },

    create: async (req: any, res: any) => {
        const faculty = await prisma.users_faculty.create({
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
    },

    disable: async (req: any, res: any) => {
        await prisma.users_faculty.update({
            where: {
                email: req.query.email,
            },
            data: {
                status: 'Disabled',
            },
        });

        res.status(200).json('Your account has been disabled.');
    },

    update: async (req: any, res: any) => {
        const faculty = await prisma.users_faculty.update({
            where: {
                email: req.query.email,
            },
            data: {
                // Course, email, password.
                ...req.body,
                password: await bcrypt.hash(req.body.password, 12),
            },
        });

        res.status(200).json(faculty);
    },
};

export default faculty;
