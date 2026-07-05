const express = require("express");
const router = express.Router();

const {
  getIrrigation,
} = require("../controllers/irrigationController");

router.post("/", getIrrigation);

module.exports = router;