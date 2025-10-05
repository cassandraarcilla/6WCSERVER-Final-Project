const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// ==========================================
// AUTH ROUTES
// ==========================================

// Register new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Get logged-in user profile (protected route)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
