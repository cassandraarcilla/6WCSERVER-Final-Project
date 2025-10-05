const express = require("express");
const router = express.Router();
const {
  getRequests,
  createRequest,
  updateRequestStatus,
} = require("../controllers/requestController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, getRequests);
router.post("/", protect, createRequest);
router.put("/:id", protect, adminOnly, updateRequestStatus);

module.exports = router;
