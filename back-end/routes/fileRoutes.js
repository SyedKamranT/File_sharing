import express from 'express';
import upload from '../models/Upload.js';
import { uploadFiles, getAllFiles, getFileByFilename, downloadFile, deleteFile } from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload', upload.array('files', 10), uploadFiles);
router.get('/', getAllFiles);
router.get('/:filename', getFileByFilename);
router.get('/download/:filename', downloadFile);
router.delete('/:id', deleteFile);
router.get('/profile/:filename', getFileByFilename);

export default router;
