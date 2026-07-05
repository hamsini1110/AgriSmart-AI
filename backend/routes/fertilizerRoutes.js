const express = require("express");
const router = express.Router();

const {
  getFertilizerRecommendation,
} = require("../controllers/fertilizerController");

router.post("/", getFertilizerRecommendation);

module.exports = router;