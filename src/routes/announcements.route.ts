import express from 'express';
import newsController from '@controllers/announcements.controllers';

const router = express.Router();

router.get('/', newsController.getAllAnnouncements);
router.get('/college', newsController.getAnnouncementsByCourse);
router.post('/post', newsController.postAnnouncements);

export default router;