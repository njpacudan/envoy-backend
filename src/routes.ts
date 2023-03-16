import { Application } from 'express';
import cors from 'cors';
import project from '../package.json';
import userRouters from './routes/users/student';

export default async function routes(app: Application) {
    app.get('/crash', () => {
        process.exit(1);
    });

    app.use(cors());

    app.get('/', (_req, res) => {
        return res.send({
            id: 'api',
            name: project.name,
            version: project.version,
            status: 'online',
        });
    });

    app.use('/users', userRouters);
}
