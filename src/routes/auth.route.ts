import express from 'express';
import { verifyUserAccount } from '@controllers/auth.controllers';

const router = express.Router();

router.get('/:token', verifyUserAccount);

export default router;