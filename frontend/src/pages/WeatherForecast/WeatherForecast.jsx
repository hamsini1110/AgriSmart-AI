import "./WeatherForecast.css";
import { useState } from "react";
import api from "../../services/api";

function WeatherForecast() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const today = new Date().toLocaleDateString();

  const getWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      setLoading(true);

      const res = await api.get(`/weather?city=${city}`);

      setWeather(res.data);

    } catch (error) {
      console.error(error);
      alert("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <h1>🌦 Weather Forecast</h1>

      <div className="weather-card">
        <h2>Enter City Name</h2>

        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>

        {weather && (
  <div className="weather-result">

    <h2>🌦 Weather Details</h2>

    <h3>
      📍 {weather.city}, {weather.country}
    </h3>

    <p>📅 {today}</p>

    <img
      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      alt="weather"
    />

    <h3>{weather.weather}</h3>

    <p>{weather.description}</p>

    <hr />

    <p><strong>🌡 Temperature:</strong> {weather.temperature} °C</p>

    <p><strong>🤗 Feels Like:</strong> {weather.feelsLike} °C</p>

    <p><strong>☀ Min Temp:</strong> {weather.tempMin} °C</p>

    <p><strong>🔥 Max Temp:</strong> {weather.tempMax} °C</p>

    <p><strong>💧 Humidity:</strong> {weather.humidity}%</p>

    <p><strong>📊 Pressure:</strong> {weather.pressure} hPa</p>

    <p><strong>👁 Visibility:</strong> {weather.visibility} km</p>

    <p><strong>🌬 Wind Speed:</strong> {weather.windSpeed} m/s</p>

    <p><strong>🌅 Sunrise:</strong> {formatTime(weather.sunrise)}</p>

    <p><strong>🌇 Sunset:</strong> {formatTime(weather.sunset)}</p>

    <p><strong>🕒 Updated:</strong> {formatTime(weather.updatedAt)}</p>

          </div>
        )}

      </div>
    </div>
  );
}

export default WeatherForecast;