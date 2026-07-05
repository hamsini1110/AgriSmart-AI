const axios = require("axios");

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        message: "Please enter a city name",
      });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    res.json({
  city: response.data.name,
  country: response.data.sys.country,

  temperature: response.data.main.temp,
  feelsLike: response.data.main.feels_like,

  tempMin: response.data.main.temp_min,
  tempMax: response.data.main.temp_max,

  humidity: response.data.main.humidity,
  pressure: response.data.main.pressure,

  visibility: response.data.visibility / 1000,

  windSpeed: response.data.wind.speed,

  weather: response.data.weather[0].main,
  description: response.data.weather[0].description,

  icon: response.data.weather[0].icon,

  sunrise: response.data.sys.sunrise,
  sunset: response.data.sys.sunset,

  updatedAt: response.data.dt
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to fetch weather data",
    });
  }
};