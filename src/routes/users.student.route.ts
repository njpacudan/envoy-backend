import { router } from '@lib/express';
import studentController from '@controllers/users.student.controllers';

router.get('/', studentController.list);

export default router;
