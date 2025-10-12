import express from "express";
import multer from "multer";
import Request from "../models/Request.js";

const router = express.Router();

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`),
});
const upload = multer({ storage });

// POST /api/requests/upload
router.post("/upload", upload.array("files", 10), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => `/uploads/${file.filename}`);

    // ✅ Ensure documentTypes is always an array
    const rawDocumentTypes = req.body["documentTypes[]"] || req.body.documentTypes || [];
    const documentTypes = Array.isArray(rawDocumentTypes) ? rawDocumentTypes : [rawDocumentTypes];

    const newRequest = new Request({
      fullName: req.body.fullName,
      dateOfBirth: req.body.dateOfBirth,
      address: req.body.address,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      documentTypes,
      filePaths,
    });

    await newRequest.save();
    res.status(201).json({ message: "✅ Request and files saved successfully", data: newRequest });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Error saving request", error: err.message });
  }
});

// ✅ GET /api/requests?email=user@email.com - Get requests by email
router.get("/", async (req, res) => {
  const { email } = req.query;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  
  try {
    const requests = await Request.find({ email: email }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Error fetching requests", error: err.message });
  }
});

export default router;