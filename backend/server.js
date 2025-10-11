import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; 
import authRoutes from "./routes/auth.js";
import requestRoutes from "./routes/requests.js";
import announcementsRoutes from "./routes/announcements.js";
import contactRoutes from "./routes/contact.js"; 

import fs from "fs";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//Connect MongoDB
connectDB();

//Create uploads folder if not exist
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
app.use("/uploads", express.static("uploads"));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/announcements", announcementsRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
