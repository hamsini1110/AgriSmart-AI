import "./CropRecommendation.css";
import { useState } from "react";
import api from "../../services/api";

function CropRecommendation() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/crop/recommend", formData);

      setResult(res.data.crop);
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="crop-page">
      <h1>🌱 Crop Recommendation</h1>

      <div className="crop-card">
        <h3>Enter Soil Details</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            name="nitrogen"
            step="any"
            placeholder="Nitrogen (N)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="phosphorus"
            step="any"
            placeholder="Phosphorus (P)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="potassium"
            step="any"
            placeholder="Potassium (K)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="temperature"
            step="any"
            placeholder="Temperature (°C)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="humidity"
            step="any"
            placeholder="Humidity (%)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="ph"
            step="any"
            placeholder="pH Value"
            onChange={handleChange}
          />

          <input
            type="number"
            name="rainfall"
            step="any"
            placeholder="Rainfall (mm)"
            onChange={handleChange}
          />

          <button type="submit">
            Recommend Crop
          </button>

        </form>

        {result && (
  <div className="result-box">
    <h2>Recommended Crop</h2>
    <h3>{result}</h3>
  </div>
)}
    </div>
    </div>
  );
}

export default CropRecommendation;