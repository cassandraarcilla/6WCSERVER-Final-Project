import express from "express";
import multer from "multer";
import Announcement from "../models/Announcement.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`),
});
const upload = multer({ storage });

// POST /api/announcements
router.post("/", upload.single("upload"), async (req, res) => {
  try {
    const filePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newAnnouncement = new Announcement({
      title: req.body.title,
      details: req.body.details,
      filePath,
    });

    await newAnnouncement.save();
    res.status(201).json({ message: "✅ Announcement submitted", data: newAnnouncement });
  } catch (err) {
    res.status(500).json({ message: "Error submitting announcement", error: err.message });
  }
});

// GET all announcements
router.get("/", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json({ data: announcements });
  } catch (err) {
    res.status(500).json({ message: "Error fetching announcements", error: err.message });
  }
});

export default router;
