import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../lib/express';
import faculty from '../../../controllers/users/faculty/faculty';

const URL = `${process.env.API_BASE_URL}/users/faculty`;

export const list = app.get(URL, faculty.list);

export const info = app.get(`${URL}/info`, faculty.info);

export const create = app.post(`${URL}/create`, faculty.create);

export const disable = app.patch(`${URL}/disable`, faculty.disable);

export const update = app.put(`${URL}/update`, faculty.update);
