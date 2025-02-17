File Sharing Website
A modern file-sharing platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can upload, download, and manage files securely.

File Sharing Website Demo

Features
User Authentication: Register, login, and manage files securely.

File Ownership: Each file is linked to the user who uploaded it.

User Dashboard: View and manage uploaded files.

File Upload: Drag and drop or click to upload files.

File Download: Download files with a single click.

File Management: View and manage uploaded files.

Secure Storage: Files are stored securely using MongoDB GridFS.

Responsive Design: Works seamlessly on all devices.

Tech Stack
Frontend: React, Vite, Axios, React Dropzone, Material-UI Icons

Backend: Node.js, Express, Multer, GridFS

Database: MongoDB

Storage: MongoDB GridFS (for small-medium files)

Deployment: Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas (Database)

Folder Structure

file-sharing-website/
├── backend/
│   ├── config/            # Database and middleware configuration
│   ├── controllers/       # Logic for handling requests
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   └── server.js          # Entry point for the backend
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Entry point for the frontend
│   └── vite.config.js     # Vite configuration
└── README.md              # Project documentation

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
MongoDB GridFS Documentation

React Dropzone Documentation

Multer Documentation
