const express = require("express");
const router = express.Router();
const {
  getResidents,
  getResident,
  addResident,
  updateResident,
  deleteResident,
} = require("../controllers/residentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, getResidents);
router.get("/:id", protect, getResident);
router.post("/", protect, adminOnly, addResident);
router.put("/:id", protect, adminOnly, updateResident);
router.delete("/:id", protect, adminOnly, deleteResident);

module.exports = router;
