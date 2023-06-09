import { Application } from 'express';
import cors from 'cors';
import project from '../package.json';
import authRoutes from './routes/auth.route';
import usersFacultyRoutes from './routes/users.faculty.route';
import usersStudentRoutes from './routes/users.student.route';
import announcementsRoutes from './routes/announcements.route';

export default async function routes(app: Application) {
  app.use(cors());

  app.get('/oops', () => {
    process.exit(1);
  });

  app.get('/', (_req: any, res: any) => {
    return res.send({
      id: 'api',
      name: project.name,
      version: project.version,
      status: 'online',
    });
  });

  app.use('/verify', authRoutes);

  app.use('/users/faculty', usersFacultyRoutes);
  app.use('/users/student', usersStudentRoutes);
  app.use('/news', announcementsRoutes);
}
