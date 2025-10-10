# Barangay Information System

## Developers

### Developed by Group 3
### Course: Web Server Management (6WCSERVER)
### Project: Barangay Information System

## Members:

### Alimurung Anne
### Cassandra Arcilla
### Tolention Sherene

## This project is a Barangay Information System built with:

Frontend: Vue 3 + Vite
Backend: Node.js + Express
Database: MongoDB

It allows residents to sign up, log in, and access barangay services online, while barangay admins can manage records, announcements, and document requests through an admin dashboard.

## Recommended IDE Setup

VSCode
Volar (disable Vetur)

# Frontend Setup (Vue 3 + Vite)

## Folder
6WCSERVER-Final-Project/frontend

## Installation
npm install

## Run Development Server
npm run dev

This will start the Vue app on:
http://localhost:5173

## Build for Production
npm run build

## Frontend Configuration

Inside /frontend/src/, create a file named config.js:

export const API_BASE_URL = "http://127.0.0.1:5000/api";

This connects your Vue frontend to the backend API.

# Backend Setup (Node.js + Express)

## Folder
6WCSERVER-Final-Project/backend

## Installation
npm install

## Create .env File

Inside /backend, create a .env file and add:

MONGO_URI=mongodb://127.0.0.1:27017/barangayIS
JWT_SECRET=barangay_secret_key
JWT_EXPIRES_IN=1d
PORT=5000

## Run MongoDB

Make sure MongoDB is installed and running locally:

mongod

## Seed the Database (Create Admin Account)
node seed.js

This will create a default admin user:

Email: admin@gmail.com
Password: 1234
Role: admin

## Run Backend Server
npm run dev


The backend will run at:
http://localhost:5000

## How It Works

Resident Registration - Users can sign up via the frontend and data is stored in MongoDB

Authentication - Secure login using JWT

Admin Dashboard - Admin can view, add, or delete records

REST API - Backend serves all data to frontend via /api routes

## Default Login
Role : Admin	
Email : @gmail.com
Password : 1234
