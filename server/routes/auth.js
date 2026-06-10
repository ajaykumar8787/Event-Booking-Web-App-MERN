import express from 'express';
// Controller se functions ko import karo (ES Module style)
import { register, login, verifyOTP } from '../controllers/authController.js';

const router = express.Router();

// Routes define karo
router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);

// ES Module default export
export default router;