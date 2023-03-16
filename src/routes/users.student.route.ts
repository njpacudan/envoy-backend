import { router } from '@lib/express';
import studentController from '@controllers/users.student.controllers';

router.get('/', studentController.list);
router.post('/create', studentController.create);

export default router;
