import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../lib/express';
import news from '../../controllers/announcements/news';

const URL = `${process.env.API_BASE_URL}/announcements`;

export const list = app.get(URL, news.list);

export const announcement = app.get(`${URL}/info`, news.info);

export const news_course = app.get(`${URL}/course`, news.course);

export const post = app.post(`${URL}/post`, news.post);
