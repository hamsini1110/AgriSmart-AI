import "./DiseaseDetection.css";
import { useState } from "react";
import api from "../../services/api";

function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await api.post("/disease/detect", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Disease Detection Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="disease-page">
      <h1>🦠 Disease Detection</h1>

      <div className="disease-card">
        <h2>Upload Crop Leaf Image</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Detecting..." : "Detect Disease"}
          </button>
        </form>

        {result && (
  <div className="result-box">
    <h2>Prediction Result</h2>

    <p>
      <strong>🌱 Crop:</strong>{" "}
      {result.disease.split("___")[0]}
    </p>

    <p>
      <strong>🦠 Disease:</strong>{" "}
      {result.disease
        .split("___")[1]
        .replace(/_/g, " ")}
    </p>

    <p>
      <strong>🎯 Confidence:</strong>{" "}
      {result.confidence}%
    </p>
  </div>
)}
      </div>
    </div>
  );
}

export default DiseaseDetection;