import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../../lib/express';
import student from '../../../controllers/student';

const URL = `${process.env.API_BASE_URL}/student/student`;

export const list = app.get(`${URL}`, student.list);

export const info = app.get(`${URL}/info`, student.info);

export const create = app.post(`${URL}/create`, student.create);

export const disable = app.patch(`${URL}/disable`, student.disable);

export const update = app.put(`${URL}/update`, student.update);
