import express from 'express';
import facultyController from '@controllers/users.facutly.controllers';

const router = express.Router();

router.get('/list', facultyController.listAllUsers);
router.post('/signup', facultyController.signUpUser);
router.post('/signin', facultyController.signInUser);
router.get('/', facultyController.getUser);
router.post('/reset', facultyController.resetUser);

export default router;
