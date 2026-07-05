const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Disease Route Working");
});

const multer = require("multer");
const path = require("path");

const { detectDisease } = require("../controllers/diseaseController");

// Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

// POST /api/disease/detect
router.post(
  "/detect",
  upload.single("image"),
  detectDisease
);

module.exports = router;