const { PythonShell } = require("python-shell");
const path = require("path");

exports.predictCrop = async (req, res) => {
  try {
    const {
  nitrogen,
  phosphorus,
  potassium,
  temperature,
  humidity,
  ph,
  rainfall,
} = req.body;

    const options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: path.join(__dirname, "../../ai-models/crop_recommendation"),
     args: [
    nitrogen,
    phosphorus,
    potassium,
    temperature,
    humidity,
    ph,
    rainfall,

      ],
    };

    PythonShell.run("predict.py", options)
      .then((result) => {
        res.json({
          crop: result[0],
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Prediction Failed",
        });
      });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};