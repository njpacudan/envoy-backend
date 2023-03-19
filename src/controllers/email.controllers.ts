import nodemailer from 'nodemailer';
import config from '@config';
import { promisify } from 'util';
import fs from 'fs';

const readFile = promisify(fs.readFile);

export const sendVerificationEmail = async (userEmail: string) => {
    const transporter = nodemailer.createTransport({
        host: config.GMAIL.GMAIL_HOST,
        port: config.GMAIL.GMAIL_PORT,
        auth: {
            user: config.GMAIL.GMAIL_USERNAME,
            pass: config.GMAIL.GMAIL_PASSWORD,
        },
    });

    const message = {
        from: config.GMAIL.GMAIL_USERNAME,
        to: userEmail,
        subject: 'Envoy',
        text: 'Envoy',
        html: await readFile('./src/templates/verity.template.html', 'utf-8'),
    }

    transporter.sendMail(message, function(err: any, info: any) {
        if(err) {
            console.log(err.message);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
};
