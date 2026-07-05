const express = require("express");
const router = express.Router();

const {
  getMarketPrice,
} = require("../controllers/marketController");

router.post("/", getMarketPrice);

module.exports = router;