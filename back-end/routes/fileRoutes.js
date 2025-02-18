import express from 'express';
import upload from '../models/Upload.js';
import { uploadFile, getAllFiles, getFileByFilename, downloadFile, deleteFile } from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getAllFiles);
router.get('/:filename', getFileByFilename);
router.get('/download/:filename', downloadFile);
router.delete('/:id', deleteFile);

export default router;
