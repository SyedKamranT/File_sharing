import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

export const signup = async (req, res) => {
  const { username, password } = req.body;
  const profilePicture = req.file ? req.file.filename : '';

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      password,
      profilePicture,
    });

  

    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username, profilePicture: newUser.profilePicture },
      process.env.JWT_SECRET, 
      { expiresIn: '7d' }
    );

    res.status(201).json({ 
      message: 'User created successfully', 
      token,  // Include token in response
      user: {
        id: newUser._id,
        username: newUser.username,
        profilePicture: newUser.profilePicture
      }
    });


  } catch (error) {
    res.status(500).json({ message: '', error });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username,profilePicture : user.profilePicture },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' } // Adjust as needed
    );

    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// ggogle and github auths here

export const googleAuth = async (req, res) => {
  const token = jwt.sign(
    { userId: req.user._id, username: req.user.username, profilePicture: req.user.profilePicture },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.redirect(`https://flowfiles.vercel.app//auth-success?token=${token}`);

};

export const githubAuth = async (req, res) => {
  const token = jwt.sign(
    { userId: req.user._id, username: req.user.username, profilePicture: req.user.profilePicture },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.redirect(`https://flowfiles.vercel.app//auth-success?token=${token}`);

};
