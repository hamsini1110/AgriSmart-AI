import "./FertilizerRecommendation.css";
import { useState } from "react";
import api from "../../services/api";

function FertilizerRecommendation() {
  const [crop, setCrop] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!crop || !nitrogen || !phosphorus || !potassium) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await api.post("/fertilizer", {
        crop,
        nitrogen,
        phosphorus,
        potassium,
      });

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Unable to get fertilizer recommendation");
    }
  };

 return (
  <div className="fertilizer-page">

    <div className="fertilizer-card">

      <h1>🧪 Fertilizer Recommendation</h1>

      <h2>Enter Soil Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Crop Name"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />

        <input
          type="number"
          placeholder="Nitrogen (N)"
          value={nitrogen}
          onChange={(e) => setNitrogen(e.target.value)}
        />

        <input
          type="number"
          placeholder="Phosphorus (P)"
          value={phosphorus}
          onChange={(e) => setPhosphorus(e.target.value)}
        />

        <input
          type="number"
          placeholder="Potassium (K)"
          value={potassium}
          onChange={(e) => setPotassium(e.target.value)}
        />

        <button type="submit">
          Get Recommendation
        </button>

      </form>

      {result && (
        <div className="result-box">

          <h2>AI Fertilizer Recommendation</h2>

          <p><strong>🌾 Crop:</strong> {crop}</p>

          <p><strong>🧪 Nitrogen:</strong> {nitrogen}</p>

          <p><strong>🧪 Phosphorus:</strong> {phosphorus}</p>

          <p><strong>🧪 Potassium:</strong> {potassium}</p>

          <p><strong>🌱 Recommended Fertilizer:</strong></p>

          <h3 style={{ color: "green" }}>
            {result.fertilizer}
          </h3>

        </div>
      )}

    </div>

  </div>
);
}
export default FertilizerRecommendation;