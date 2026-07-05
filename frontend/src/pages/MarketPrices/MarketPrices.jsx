import "./MarketPrices.css";
import { useState } from "react";
import api from "../../services/api";

function MarketPrices() {
  const [crop, setCrop] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!crop) {
      alert("Please enter crop name");
      return;
    }

    try {
      const res = await api.post("/market", {
        crop,
      });

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Crop not found");
    }
  };

  return (
    <div className="market-page">

      <h1>📈 Market Prices</h1>

      <div className="market-card">

        <h2>Enter Crop Name</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Crop Name"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          />

          <button type="submit">
            Get Market Price
          </button>

        </form>

        {result && (

          <div className="result-box">

            <h2>Today's Market Price</h2>

            <p>
              <strong>🌾 Crop:</strong> {result.Crop}
            </p>

            <p>
              <strong>📍 Market:</strong> {result.Market}
            </p>

            <p>
              <strong>🏛 State:</strong> {result.State}
            </p>

            <p>
              <strong>💰 Minimum Price:</strong> ₹{result.MinPrice}
            </p>

            <p>
              <strong>💵 Maximum Price:</strong> ₹{result.MaxPrice}
            </p>

            <p>
              <strong>📈 Modal Price:</strong> ₹{result.ModalPrice}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default MarketPrices;