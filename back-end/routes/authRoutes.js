import express from 'express';
import passport from 'passport';
import { signup, login,googleAuth, githubAuth } from '../controllers/authController.js';
import  upload1  from '../models/ProfileUpload.js'; 

const router = express.Router();

router.post('/signup', upload1.single('profilePicture'), signup);
router.post('/login', login);

//google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), googleAuth);

// GitHub Authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), githubAuth);

export default router;
