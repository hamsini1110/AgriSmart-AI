const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Check if API key is loaded
console.log("API Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cropRoutes = require("./routes/cropRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const irrigationRoutes = require("./routes/irrigationRoutes");
const fertilizerRoutes = require("./routes/fertilizerRoutes");
const marketRoutes = require("./routes/marketRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const contactRoutes = require("./routes/contactRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/irrigation", irrigationRoutes);
app.use("/api/fertilizer", fertilizerRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/contact", contactRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});