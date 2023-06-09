import express from 'express';
import { verifyUserAccount } from '@middleware/auth';

const router = express.Router();

router.get('/:token', verifyUserAccount);

export default router;
