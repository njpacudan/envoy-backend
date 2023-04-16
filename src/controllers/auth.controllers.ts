import config from '@config';
import { prisma } from '@lib/prisma';
import { users_faculty, users_student } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const verifyUserAccount = (req: any, res: any) => {
    const { token } = req.params;
    console.log(req.params.token);
    console.log('TOKEN:', token);
    jwt.verify(token, config.TOKEN_KEY, async (err: any, decoded: any) => {
        if(err) {
            res.sendStatus(404).json(err);
        } else {
            const checkCollection = await prisma.users_faculty.findUnique({
                where: {
                    email: decoded.email,
                },
            });

            let user: users_faculty | users_student;

            if(checkCollection) {
                user = await prisma.users_faculty.update({
                    where: {
                        email: decoded.email,
                    },
                    data: {
                        verified: true,
                    },
                });
            } else if(!checkCollection) {
                user = await prisma.users_student.update({
                    where: {
                        email: decoded.email,
                    },
                    data: {
                        verified: true,
                    },
                });
            }

            res.sendStatus(200).json('YOUR ACCOUNT HAS BEEN VERIFIED!');
        }
    });
};