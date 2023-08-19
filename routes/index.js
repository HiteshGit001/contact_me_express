import express from 'express';
import { createRequest } from '../controller/contactMe.js';

const router = express.Router();
router.post('/contact-me', createRequest)

export default router;