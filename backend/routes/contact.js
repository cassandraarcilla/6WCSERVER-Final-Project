import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, contactNumber, address, message } = req.body;

    // Simple validation
    if (!name || !email || !contactNumber || !address || !message) {
      return res.status(400).json({ msg: "Please fill in all fields." });
    }

    const newMessage = new ContactMessage({
      name,
      email,
      contactNumber,
      address,
      message,
    });

    await newMessage.save();
    res.status(201).json({ msg: "Message submitted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error." });
  }
});

export default router;
