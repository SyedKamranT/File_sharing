import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      filename: `${Date.now()}-${file.originalname}`,
      bucketName: 'uploads', // GridFS expects this to match the collection name
      metadata: {
        contentType: file.mimetype, // Include file type
        originalname: file.originalname, // Optional: keep original file name
      },
    };
  },
});

const upload = multer({ storage });

export default upload;
