import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      filename: `${Date.now()}-${file.originalname}`,
      bucketName: 'uploads', // GridFS bucket name
      metadata: {
        contentType: file.mimetype,
        originalname: file.originalname,
        yourEmail: req.body.yourEmail, // Extra fields
        emailTo: req.body.emailTo,
        title: req.body.title,
        message: req.body.message
      },
    };
  },
});

const upload = multer({ storage });

export default upload;
