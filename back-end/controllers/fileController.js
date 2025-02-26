import { gfs, conn } from '../server.js';
import upload from '../models/Upload.js';
import mongoose from 'mongoose';
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
// Upload File
export const uploadFiles = async (req, res) => {
  try {
    const { yourEmail, emailTo, title, message } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    // Construct download link
    const downloadLinks = req.files.map(file => `${process.env.BASE_URL}/files/download/${file.filename}`);

    // Send email to recipient
    await sendEmail(emailTo, yourEmail, title, message, downloadLinks);
    console.log("Email Credentials:", process.env.EMAIL_USER, process.env.EMAIL_PASS);


    res.status(200).json({
      message: 'Files uploaded successfully and email sent!',
      files: req.files,
      downloadLinks,
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to send email
const sendEmail = async (emailTo, yourEmail, title, message, downloadLinks) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${yourEmail}" <${process.env.EMAIL_USER}>`,
    to: emailTo,
    subject: `File Shared: ${title}`,
    html: `
      <h3>${yourEmail} has shared files with you!</h3>
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Download Links:</strong></p>
      <ul>
        ${downloadLinks.map(link => `<li><a href="${link}">${link}</a></li>`).join('')}
      </ul>
    `,
  };

  await transporter.sendMail(mailOptions);
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


// Get Profile Picture
export const getProfilePicture = async (req, res) => {
  try {
    const file = await gfs.find({ filename: req.params.filename }).toArray();
    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.set('Content-Type', file[0].contentType);
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  } catch (error) {
    console.error("Error fetching profile picture:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};