import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI || 'mongodb+srv://filesharing:sharingfileX546234@filesharing0.k0w9x.mongodb.net/file_sharing',
  file: (req, file) => {
    return {
      filename: `profile_${Date.now()}_${file.originalname}`,
      bucketName: 'uploads',
    };
  },
});

const upload1 = multer({ storage });

export default upload1;
