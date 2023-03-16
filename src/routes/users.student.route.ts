import { router } from '@lib/express';
import studentController from '@controllers/users/student';

router.get('/', studentController.list);

export default router;
