import "./SmartIrrigation.css";
import { useState } from "react";
import api from "../../services/api";

function SmartIrrigation() {
  const [crop, setCrop] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!crop || !city) {
      alert("Please enter all fields");
      return;
    }

    try {
      const res = await api.post("/irrigation", {
        crop,
        city,
      });

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Unable to get irrigation recommendation");
    }
  };

  return (
    <div className="irrigation-page">
      <h1>💧 Smart Irrigation</h1>

      <div className="irrigation-card">
        <h2>Enter Details</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Crop Name"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit">
            Get Recommendation
          </button>
        </form>

        {result && (
          <div className="result-box">
            <h2>AI Irrigation Result</h2>

            <p>
              <strong>🌾 Crop:</strong> {result.crop}
            </p>

            <p>
              <strong>📍 City:</strong> {result.city}
            </p>
<p>
  <strong>🌡 Temperature:</strong> {result.temperature} °C
</p>

<p>
  <strong>💧 Humidity:</strong> {result.humidity} %
</p>
<p><strong>☁ Weather:</strong> {result.weather}</p>

            <p>
              <strong>💧 Water Level:</strong> {result.waterLevel}
            </p>

            <p>
              <strong>🤖 Recommendation:</strong>
            </p>

            <p>{result.recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SmartIrrigation;