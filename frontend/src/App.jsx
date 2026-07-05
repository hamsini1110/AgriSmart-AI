import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import CropRecommendation from "./pages/CropRecommendation/CropRecommendation";
import DiseaseDetection from "./pages/DiseaseDetection/DiseaseDetection";
import WeatherForecast from "./pages/WeatherForecast/WeatherForecast";
import SmartIrrigation from "./pages/SmartIrrigation/SmartIrrigation";
import FertilizerRecommendation from "./pages/FertilizerRecommendation/FertilizerRecommendation";
import MarketPrices from "./pages/MarketPrices/MarketPrices";
import Chatbot from "./pages/Chatbot/Chatbot";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Crop Recommendation */}
      <Route
        path="/crop-recommendation"
        element={
          <ProtectedRoute>
            <CropRecommendation />
          </ProtectedRoute>
        }
      />
      <Route
  path="/disease-detection"
  element={
    <ProtectedRoute>
      <DiseaseDetection />
    </ProtectedRoute>
  }
/>
<Route
  path="/weather-forecast"
  element={
    <ProtectedRoute>
      <WeatherForecast />
    </ProtectedRoute>
  }
/>
<Route
  path="/smart-irrigation"
  element={
    <ProtectedRoute>
      <SmartIrrigation />
    </ProtectedRoute>
  }
/>
<Route
  path="/fertilizer-recommendation"
  element={<FertilizerRecommendation />}
/>
<Route path="/market-prices" element={<MarketPrices />} />
<Route
  path="/chatbot"
  element={<Chatbot />}
/>
    </Routes>
  );
}

export default App;