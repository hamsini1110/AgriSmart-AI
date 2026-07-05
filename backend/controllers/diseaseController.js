const { PythonShell } = require("python-shell");
const path = require("path");

exports.detectDisease = async (req, res) => {
  console.log("========== REQUEST RECEIVED ==========");

  try {
    console.log("File:", req.file);

    if (!req.file) {
      console.log("No file uploaded");

      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    const options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: path.join(__dirname, "../../ai-models/disease_detection"),
      args: [req.file.path],
    };

    console.log("Running Python...");
    console.log(options);

    PythonShell.run("predict.py", options)
      .then((result) => {
        console.log("Python Output:");
        console.log(result);

        const prediction = JSON.parse(result[0]);

        res.json({
          disease: prediction.disease,
          confidence: prediction.confidence,
        });
      })
      .catch((err) => {
        console.log("PYTHON ERROR");
        console.log(err);

        res.status(500).json({
          message: "Prediction Failed",
          error: err.toString(),
        });
      });

  } catch (err) {
    console.log("SERVER ERROR");
    console.log(err);

    res.status(500).json({
      message: "Server Error",
      error: err.toString(),
    });
  }
};