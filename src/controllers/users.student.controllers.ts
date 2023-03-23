import bcrypt from 'bcrypt';
import { prisma } from '@lib/prisma';

const studentController = {
    list: async (_req: any, res: any) => {
        const students = await prisma.users_student.findMany();

        res.status(200).json(students);
    },

    info: async (req: any, res: any) => {
        const student = await prisma.users_student.findUnique({
            where: { email: req.query.email },
        });
        
        res.status(200).json(student);
    },

    disable: async (req: any, res: any) => {
        await prisma.users_student.update({
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
        const student = await prisma.users_student.update({
            where: {
                email: req.query.email,
            },
            data: {
                // Course, email, password.
                ...req.body,
                password: await bcrypt.hash(req.body.password, 12),
            },
        });

        res.status(200).json(student);
    },
};

export default studentController;
