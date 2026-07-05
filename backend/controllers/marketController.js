const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

exports.getMarketPrice = async (req, res) => {
  try {
    const { crop } = req.body;

    const results = [];

    fs.createReadStream(
      path.join(__dirname, "../../datasets/market_prices.csv")
    )
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        const market = results.find(
          (item) =>
            item.Crop.toLowerCase() === crop.toLowerCase()
        );

        if (!market) {
          return res.status(404).json({
            message: "Crop not found",
          });
        }

        res.json(market);
      });

  } catch (err) {
    res.status(500).json({
      message: "Market Price Error",
      error: err.message,
    });
  }
};