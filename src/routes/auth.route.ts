import { router } from '@lib/express';
import authControllers from '@controllers/auth.controllers';

router.post('/signup', authControllers.signUpUser);
router.post('/signin', authControllers.signInUser);

export default router;