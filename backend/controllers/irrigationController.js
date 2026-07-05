const axios = require("axios");

exports.getIrrigation = async (req, res) => {
  try {
    const { city, crop } = req.body;

    const API_KEY = process.env.OPENWEATHER_API_KEY;

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const temp = weather.data.main.temp;
    const humidity = weather.data.main.humidity;
    const weatherCondition = weather.data.weather[0].main;

    const cropRequirements = {
      rice: {
        water: "High",
        message: "Rice requires a high amount of water."
      },

      maize: {
        water: "Medium",
        message: "Maize requires moderate irrigation."
      },

      chickpea: {
        water: "Low",
        message: "Chickpea requires less water."
      },

      kidneybeans: {
        water: "Medium",
        message: "Kidney beans require moderate irrigation."
      },

      pigeonpeas: {
        water: "Low",
        message: "Pigeon peas are drought tolerant."
      },

      mothbeans: {
        water: "Low",
        message: "Moth beans require less irrigation."
      },

      mungbean: {
        water: "Low",
        message: "Mung beans require light irrigation."
      },

      blackgram: {
        water: "Low",
        message: "Black gram requires less water."
      },

      lentil: {
        water: "Low",
        message: "Lentils require limited irrigation."
      },

      pomegranate: {
        water: "Medium",
        message: "Pomegranate requires moderate irrigation."
      },

      banana: {
        water: "High",
        message: "Banana requires frequent irrigation."
      },

      mango: {
        water: "Medium",
        message: "Mango trees require moderate irrigation."
      },

      grapes: {
        water: "Medium",
        message: "Grapes require controlled irrigation."
      },

      watermelon: {
        water: "High",
        message: "Watermelon needs regular watering."
      },

      muskmelon: {
        water: "High",
        message: "Muskmelon requires frequent irrigation."
      },

      apple: {
        water: "Medium",
        message: "Apple trees require moderate watering."
      },

      orange: {
        water: "Medium",
        message: "Orange trees require regular irrigation."
      },

      papaya: {
        water: "High",
        message: "Papaya requires frequent irrigation."
      },

      coconut: {
        water: "High",
        message: "Coconut requires abundant water."
      },

      cotton: {
        water: "Medium",
        message: "Cotton is drought tolerant."
      },

      jute: {
        water: "High",
        message: "Jute requires abundant irrigation."
      },

      coffee: {
        water: "Medium",
        message: "Coffee plants require regular irrigation."
      }
    };

    const cropInfo = cropRequirements[crop.toLowerCase()];

    let waterLevel;
    let recommendation;

    if (!cropInfo) {
      waterLevel = "Unknown";
      recommendation = "Invalid crop name.";
    } else {
      waterLevel = cropInfo.water;
      recommendation = cropInfo.message;

      // Weather-based adjustments
      if (weatherCondition === "Rain") {
        waterLevel = "Very Low";
        recommendation +=
          " Rain is expected. Avoid irrigation today.";
      } else if (temp >= 38) {
        recommendation +=
          " Extreme heat detected. Increase irrigation.";
      } else if (temp >= 33) {
        recommendation +=
          " Hot weather detected. Increase irrigation frequency.";
      }

      if (humidity >= 85) {
        recommendation +=
          " Humidity is very high. Reduce watering.";
      } else if (humidity <= 40) {
        recommendation +=
          " Humidity is low. Provide additional irrigation.";
      }
    }

    res.json({
      crop,
      city,
      temperature: temp,
      humidity,
      weather: weatherCondition,
      waterLevel,
      recommendation
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Irrigation Failed",
      error: err.message
    });
  }
};