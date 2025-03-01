# File Sharing Web Application

A modern file-sharing platform built with **React (Vite) + Flask + MongoDB GridFS** for secure uploads, downloads, and file management.

---

## 🔹 Features
✅ **User Authentication** (Signup, Login) with JWT
✅ **File Ownership** (Each file linked to the uploader)
✅ **User Dashboard** (View & Manage Uploaded Files)
✅ **Drag & Drop File Upload**
✅ **Secure File Storage** using MongoDB GridFS
✅ **Responsive Design** (Desktop, Tablet, Mobile)

---

## 📦 Tech Stack

### **Frontend:**
- 🖥️ **React + Vite** (Fast UI Rendering)
- 🎨 **Tailwind CSS** (Modern UI Styling)
- 🔗 **Axios** (API Requests)
- 📂 **React Dropzone** (Drag & Drop Uploads)

### **Backend:**
- 🚀 **Flask + Flask-RESTful** (API Development)
- 🔑 **JWT Authentication** (Secure User Auth)
- 📊 **MongoDB + GridFS** (Secure File Storage)
- 📄 **Multer** (File Handling Middleware)

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/file-sharing.git
cd file-sharing
```

### **2️⃣ Backend Setup (Flask)**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### **3️⃣ Frontend Setup (React + Vite)**
```bash
cd frontend
npm install
npm run dev
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/api/auth/login` | User Login (JWT) |
| **POST** | `/api/auth/signup` | User Signup |
| **POST** | `/api/files/upload` | Upload a File |
| **GET** | `/api/files` | Fetch Uploaded Files |
| **GET** | `/api/files/:id` | Download a File |
| **DELETE** | `/api/files/:id` | Delete a File |

---

## 🚀 Deployment
### **Backend (Flask)**
- **Docker:**  
```bash
docker-compose up --build
```
- **Render/Railway:** Deploy Flask API

### **Frontend (React)**
- **Vercel:** `vercel deploy`  
- **Netlify:** `npm run build && netlify deploy`  

---

## 📜 License
MIT License  

---

## 💡 Future Enhancements
🔹 **Add OAuth Login (Google, GitHub)**  
🔹 **Support File Previews (PDF, Images, Videos)**  
🔹 **Add File Sharing via Links**  

