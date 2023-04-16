import { prisma } from '@lib/prisma';
import config from '@config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { sendVerificationEmail } from './email.controllers';

const faculty = {
  // For Admin Panel.
  // Get list of users.
  listAllUsers: async (_req: any, res: any) => {
    const faculty = await prisma.users_faculty.findMany();

    res.status(200).json(faculty);
  },

  getUser: async (req: any, res: any) => {
    const faculty = await prisma.users_faculty.findUnique({
      where: { email: req.query.email },
    });

    res.status(200).json(faculty);
  },

  // Create new user.
  signUpUser: async (req: any, res: any) => {
    const checkEmail = await prisma.users_faculty.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!checkEmail) {
      const faculty = await prisma.users_faculty.create({
        data: {
          // Name, email, course, password
          ...req.body,
          password: await bcrypt.hash(req.body.password, 12),
          date_registered: new Date(),
          last_login: new Date(),
          status: 'true',
          verified: false,
        },
      });
      const token = jwt.sign(faculty, config.TOKEN_KEY);
      sendVerificationEmail(faculty.email, token);
      return res.status(200).json(token);
    } else {
      return res.status(409).json('Email is already used.');
    }
  },

  // Authenticate existing user.
  signInUser: async (req: any, res: any) => {
    try {
      const user = await prisma.users_faculty.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
          return res.json(jwt.sign(user, config.TOKEN_KEY));
        } else {
          return res.status(401).json({ message: 'Incorrect password' });
        }
      } else {
        return res.status(401).json({ message: 'User does not exist.' });
      }
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  disableUser: async (req: any, res: any) => {
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

  resetUser: async (req: any, res: any) => {
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
