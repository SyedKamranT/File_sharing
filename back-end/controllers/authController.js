import User from '../models/User.js';
import jwt from 'jsonwebtoken';

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
    res.status(201).json({ message: 'User created successfully', profilePicture });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
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
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' } // Adjust as needed
    );

    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
