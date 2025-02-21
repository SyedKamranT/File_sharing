import express from 'express';
import { signup, login } from '../controllers/authController.js';
import  upload1  from '../models/ProfileUpload.js'; 

const router = express.Router();

router.post('/signup', upload1.single('profilePicture'), signup);
router.post('/login', login);

export default router;
