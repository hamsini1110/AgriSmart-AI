const { spawn } = require("child_process");

exports.getFertilizerRecommendation = async (req, res) => {
  try {
    const { crop, nitrogen, phosphorus, potassium } = req.body;

    const input = JSON.stringify({
      crop,
      nitrogen: Number(nitrogen),
      phosphorus: Number(phosphorus),
      potassium: Number(potassium),
    });

    const python = spawn("python", [
      "../ai-models/fertilizer_recommendation/predict.py",
      input,
    ]);

    let result = "";
    let error = "";

    python.stdout.on("data", (data) => {
      result += data.toString();
    });

    python.stderr.on("data", (data) => {
      error += data.toString();
    });

    python.on("close", (code) => {
      console.log("Python Exit Code:", code);
      console.log("Python Stdout:", result);
      console.log("Python Stderr:", error);

      try {
        const prediction = JSON.parse(result);
        return res.json(prediction);
      } catch (e) {
        return res.status(500).json({
          message: "Invalid JSON returned from Python",
          stdout: result,
          stderr: error,
        });
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Prediction Failed",
      error: error.message,
    });
  }
};