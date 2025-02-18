import { gfs, conn } from '../server.js';
import upload from '../models/Upload.js';
import mongoose from 'mongoose';

// Upload File
export const uploadFile = (req, res) => {
    try {
        if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
        }
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
    };

// Get All Files
export const getAllFiles = async (req, res) => {
  try {
    const files = await conn.db.collection('uploads.files').find().toArray();
    if (!files || files.length === 0) {
      return res.status(404).json({ message: 'No files found' });
    }
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Get Single File by Filename
export const getFileByFilename = async (req, res) => {
  try {
    const files = await conn.db.collection('uploads.files').findOne({ filename: req.params.filename });
    if (!files) {
      return res.status(404).json({ message: 'File not found' });
    }
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Stream File for Download/View
export const downloadFile = async (req, res) => {
  try {
    const files = await conn.db.collection('uploads.files').findOne({ filename: req.params.filename });
    if (!files) {
      return res.status(404).json({ message: 'File not found' });
    }

    const downloadStream = gfs.openDownloadStreamByName(req.params.filename);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete File
export const deleteFile = async (req, res) => {
  try {
    await gfs.files.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id) });
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
