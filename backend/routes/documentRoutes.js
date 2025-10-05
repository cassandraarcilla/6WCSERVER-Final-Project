const express = require("express");
const router = express.Router();
const {
  getDocuments,
  addDocument,
} = require("../controllers/documentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, getDocuments);
router.post("/", protect, adminOnly, addDocument);

module.exports = router;
