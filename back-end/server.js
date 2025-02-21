import express from 'express';
import mongoose from 'mongoose';
import Grid from "gridfs-stream";
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import { GridFSBucket } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import fileRoutes from './routes/fileRoutes.js';


dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://filesharing:sharingfileX546234@filesharing0.k0w9x.mongodb.net/file_sharing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = new GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
});




const storage = new GridFsStorage({
  url: process.env.MONGODB_URI || 'mongodb+srv://filesharing:sharingfileX546234@filesharing0.k0w9x.mongodb.net/file_sharing',
  file: (req, file) => {
    return {
      filename: `profile_${Date.now()}_${file.originalname}`,
      bucketName: 'uploads', // This should match your GridFS bucket
    };
  },
});

const upload = multer({ storage });

export { gfs, conn, upload };

// Routes
app.use('/auth', authRoutes);
app.use('/files', fileRoutes); 

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
