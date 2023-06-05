import express from 'express';
import studentController from '@controllers/users.student.controllers';

const router = express.Router();

router.get('/list', studentController.listAllUsers);
router.post('/signup', studentController.signUpUser);
router.post('/signin', studentController.signInUser);
router.get('/', studentController.getUser);
router.post('/reset', studentController.resetUser);
router.patch('/disable', studentController.disableUser);

export default router;
