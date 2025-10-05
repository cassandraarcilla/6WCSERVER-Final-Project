const express = require("express");
const router = express.Router();
const {
  getAnnouncements,
  addAnnouncement,
  deleteAnnouncement,
} = require("../controllers/announcementController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, getAnnouncements);
router.post("/", protect, adminOnly, addAnnouncement);
router.delete("/:id", protect, adminOnly, deleteAnnouncement);

module.exports = router;
