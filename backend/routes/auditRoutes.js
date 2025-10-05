const express = require("express");
const router = express.Router();
const { getLogs, addLog } = require("../controllers/auditController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, adminOnly, getLogs);
router.post("/", protect, addLog);

module.exports = router;
