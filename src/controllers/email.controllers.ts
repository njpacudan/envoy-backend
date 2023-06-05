import nodemailer from 'nodemailer';
import config from '@config';

export const sendVerificationEmail = async (userEmail: string, token: any) => {
  const transporter = nodemailer.createTransport({
    host: config.GMAIL.GMAIL_HOST,
    port: config.GMAIL.GMAIL_PORT,
    auth: {
      user: config.GMAIL.GMAIL_USERNAME,
      pass: config.GMAIL.GMAIL_PASSWORD,
    },
  });

  const URL = `http://${config.HOST}:${config.PORT}/verify/${token}/`;

  const message = {
    from: config.GMAIL.GMAIL_USERNAME,
    to: userEmail,
    subject: 'Envoy',
    text: 'Envoy',
    html: `Verify your email: <a href="${URL}">Click here!</a>`,
  };

  transporter.sendMail(message, async (err: any, info: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
