import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
  logout();                  // Removes token
  navigate("/login");        // Redirects to Login page
};

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>🌿 AgriSmart AI</h2>

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li onClick={() => navigate("/crop-recommendation")}>
            🌱 Crop Recommendation
          </li>

          <li onClick={() => navigate("/disease-detection")}>
  🦠 Disease Detection
</li>

          <li onClick={() => navigate("/weather-forecast")}>
  🌦 Weather
</li>

          <li onClick={() => navigate("/smart-irrigation")}>
  💧 Smart Irrigation
</li>

          <li onClick={() => navigate("/fertilizer-recommendation")}>
  🧪 Fertilizer
</li>
          <li onClick={() => navigate("/market-prices")}>
  📈 Market Prices
</li>
        <li onClick={() => navigate("/chatbot")}>
  🤖 AI Chatbot
</li>

         <li onClick={handleLogout} style={{ cursor: "pointer" }}>
  🚪 Logout
</li>
        </ul>
      </aside>

      <main className="dashboard-content">

        <h1>Welcome to AgriSmart AI Dashboard</h1>

        <div className="cards">

          <div
            className="card"
            onClick={() => navigate("/crop-recommendation")}
            style={{ cursor: "pointer" }}
          >
            <h3>🌱 Crop Recommendation</h3>
            <p>AI suggests the best crops based on soil and weather.</p>
          </div>

          <div
  className="card"
  onClick={() => navigate("/disease-detection")}
  style={{ cursor: "pointer" }}
>
  <h3>🦠 Disease Detection</h3>
  <p>Upload crop images to identify diseases instantly.</p>
</div>

          <div
  className="card"
  onClick={() => navigate("/weather-forecast")}
  style={{ cursor: "pointer" }}
>
  <h3>🌦 Weather Forecast</h3>
  <p>Check today's weather forecast for farming.</p>
</div>

     <div
  className="card"
  onClick={() => navigate("/smart-irrigation")}
  style={{ cursor: "pointer" }}
>
  <h3>💧 Smart Irrigation</h3>

  <p>
    Water-saving irrigation recommendations.
  </p>
</div>

          <div
  className="card"
  onClick={() => navigate("/fertilizer-recommendation")}
  style={{ cursor: "pointer" }}
>
<h3>🧪 Fertilizer</h3>
  <p>Get fertilizer suggestions using AI.</p>
</div>

          <div
  className="card"
  onClick={() => navigate("/market-prices")}
  style={{ cursor: "pointer" }}
>
  <h3>📈 Market Prices</h3>
  <p>View latest crop market prices.</p>
</div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;