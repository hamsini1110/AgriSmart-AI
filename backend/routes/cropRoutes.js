const express = require("express");
const router = express.Router();

const { predictCrop } = require("../controllers/cropController");

// POST /api/crop/recommend
router.post("/recommend", predictCrop);

module.exports = router;