import express from 'express';
import { verifyUserAccount } from '@controllers/auth.controller';

const router = express.Router();

router.get('/:token', verifyUserAccount);

export default router;