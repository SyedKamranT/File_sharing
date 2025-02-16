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

Installation
Prerequisites
Node.js (v16 or higher)

MongoDB (local or MongoDB Atlas)

Git

Steps
Clone the repository

bash
Copy
git clone https://github.com/your-username/file_sharing.git
cd file_sharing
Set up the backend

bash
Copy
cd backend
npm install
Set up the frontend

bash
Copy
cd ../frontend
npm install
Configure environment variables

Create a .env file in the backend directory:

env
Copy
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
PORT=5000
Replace <username>, <password>, and dbname with your MongoDB credentials.

Run the backend

bash
Copy
cd ../backend
npm start
Run the frontend

bash
Copy
cd ../frontend
npm run dev
Access the application

Open your browser and navigate to http://localhost:5173.

API Endpoints
Method	Endpoint	Description
POST	/api/files/upload	Upload a file
GET	/api/files	Get a list of uploaded files
GET	/api/files/:id	Download a specific file
Folder Structure
Copy
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
Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
MongoDB GridFS Documentation

React Dropzone Documentation

Multer Documentation
