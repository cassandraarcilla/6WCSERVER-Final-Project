## Developers

### Developed by Group 3
### Course: Web Server and Client Services (6WCSERVER)
### Project: Barangay Information System

## Members:

### Alimurung Anne
### Cassandra Arcilla
### Tolention Sherene

# Barangay Information System

A web application for managing barangay services and resident information. This system allows residents to register, log in, and access barangay services online, while barangay administrators can manage records, announcements, and document requests.

## 🛠️ Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework

### Database
- **MongoDB** - NoSQL database for storing residents data

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition)
- [Git](https://git-scm.com/)
- A code editor like [VSCode](https://code.visualstudio.com/)
  - Recommended extension: **Volar** (disable Vetur if installed)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/cassandraarcilla/6WCSERVER-Final-Project.git
cd 6WCSERVER-Final-Project
```

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend 
cd vue-project
npm install
```

#### Configure API Connection

Create a configuration file at `/frontend/src/config.js`:

```javascript
export const API_BASE_URL = "http://127.0.0.1:5000/api";
```

This file connects your Vue frontend to the backend API.

#### Run Development Server

```bash
npm run dev
```

The Vue application will start on:
**http://localhost:5173**

#### Build for Production

```bash
npm run build
```

### 3. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `/backend` directory with the following configuration:

```env
MONGO_URI=mongodb://127.0.0.1:27017/barangayIS
JWT_SECRET=mySuperSecretKey
PORT=5000
```

#### Start MongoDB

Ensure MongoDB is running on your local machine:

```bash
mongod
```

#### Default User
- **username:** cassandraarcilla
- **Password:** 1234

#### Run Development Server

```bash
npm run dev
```

The backend API will run at:
**http://localhost:5000**

## 🎯 Features

- **User Registration** - Sign up with personal information
- **Secure Authentication** - Login using JWT (JSON Web Tokens)
- **Access Barangay Services** - Request documents and view announcements

### Technical Features
- **REST API** - Backend serves data through `/api` routes
- **JWT Authentication** - Secure token-based authentication
- **MongoDB Integration** - Persistent data storage

## 📁 Project Structure

```
6WCSERVER-Final-Project/
├── frontend/              # Vue 3 application
│   ├── src/
│   │   ├── config.js     # API configuration
│   │   └── ...
│   └── package.json
│
└── backend/               # Express API server
    ├── seed.js           # Database seeding script
    ├── .env              # Environment variables
    └── package.json
```

⚠️ **Important:** Change these credentials in a production environment!

## 🌐 Access URLs

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **MongoDB:** mongodb://127.0.0.1:27017/barangayIS

## 📝 API Routes

All backend API endpoints are accessible at `http://localhost:5000/api`

Example routes:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/residents` - Get all residents 
- Additional routes available in the backend code

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check if port 27017 is available
- Verify the `MONGO_URI` in your `.env` file

### Frontend Not Connecting to Backend
- Verify `config.js` exists with the correct API_BASE_URL
- Ensure both frontend and backend servers are running
- Check for CORS issues in the browser console

### Port Already in Use
- Change the `PORT` in `.env` (backend)
- Vite's port can be configured in `vite.config.js` (frontend)

## 👥 Contributing

This is a final project for 6WCSERVER. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is for educational purposes as part of the 6WCSERVER course.

## 👤 Author

**Cassandra Arcilla**
- GitHub: [@cassandraarcilla](https://github.com/cassandraarcilla)
