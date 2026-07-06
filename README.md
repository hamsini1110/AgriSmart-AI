# 🌱 AgriSmart AI – Intelligent Farming Platform

> **An AI-Powered Smart Agriculture Web Application for Crop Management and Decision Support**

---

# 📖 Project Overview

**AgriSmart AI** is an AI-powered intelligent farming platform developed as a **B.Tech Final Year Project** to support farmers with data-driven agricultural decisions.

**Developed using React.js, Node.js, Express.js, MongoDB, and AI/ML models to provide intelligent farming solutions.**

The system assists farmers by recommending suitable crops, detecting plant diseases, suggesting fertilizers, providing weather forecasts, recommending irrigation schedules, displaying market prices, and offering AI-powered chatbot assistance.

---

# 🎯 Problem Statement

Agriculture plays a vital role in economic development, yet many farmers face challenges such as:

- Difficulty selecting suitable crops
- Plant disease identification
- Incorrect fertilizer usage
- Lack of weather awareness
- Poor irrigation management
- Limited access to market prices

AgriSmart AI addresses these challenges using Artificial Intelligence and Machine Learning to provide accurate recommendations.

---

# 🎯 Objectives

- Recommend suitable crops based on soil conditions
- Detect plant diseases using Deep Learning
- Recommend appropriate fertilizers
- Provide real-time weather information
- Suggest smart irrigation schedules
- Display market prices
- Provide AI-powered chatbot support
- Improve agricultural productivity through AI

---

# ✨ Features

✅ User Registration & Login

✅ Secure Authentication

✅ Interactive Dashboard

✅ AI Crop Recommendation

✅ Plant Disease Detection

✅ Fertilizer Recommendation

✅ Weather Forecast

✅ Smart Irrigation Recommendation

✅ Market Price Information

✅ AI Chatbot

✅ Contact Module

---

# 🏗️ System Architecture

```text
                User
                  │
                  ▼
        React.js Frontend
                  │
          REST API Requests
                  │
                  ▼
      Node.js + Express Backend
          │               │
          │               │
          ▼               ▼
     MongoDB         Python AI Models
                          │
                          ▼
                  Prediction Results
                          │
                          ▼
                 React Frontend
```

---

# 🛠️ Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Axios

---

## Backend

- Node.js
- Express.js
- REST API

---

## Database

- MongoDB
- Mongoose

---

## Artificial Intelligence

- Python
- TensorFlow / Keras
- Scikit-learn
- Pandas
- NumPy

---

## Tools

- VS Code
- Git
- GitHub
- MongoDB Compass
- Postman

---

# 📂 Project Structure

```text
AgriSmart-AI
│
├── frontend
│
├── backend
│
├── ai-models
│
├── datasets
│
├── assets
│
└── README.md
```

---

# 🤖 AI Modules

## 🌾 Crop Recommendation

Recommends the most suitable crop using soil nutrient values and environmental parameters.

---

## 🍃 Disease Detection

Detects plant diseases from uploaded leaf images using a Deep Learning model trained on the PlantVillage dataset.

---

## 🌱 Fertilizer Recommendation

Suggests appropriate fertilizer based on crop type and soil nutrient values.

---

## 🌦️ Weather Forecast

Provides weather information to support agricultural planning.

---

## 💧 Smart Irrigation

Recommends irrigation schedules based on environmental conditions.

---

## 📈 Market Prices

Displays crop market prices to help farmers make better selling decisions.

---

## 🤖 AI Chatbot

Provides instant responses to agriculture-related queries.

---

# 💾 Database

MongoDB is used to store:

- User Information
- Contact Messages

---

# 📊 Datasets Used

- Crop Recommendation Dataset
- PlantVillage Dataset
- Fertilizer Recommendation Dataset
- Market Price Dataset

---

# 🚀 Installation Guide

## Clone Repository

```bash
git clone https://github.com/hamsini1110/AgriSmart-AI.git
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OPENWEATHER_API_KEY=your_openweather_api_key

GEMINI_API_KEY=your_gemini_api_key
```
---

# ▶️ How to Run the Project

Follow these steps to run the AgriSmart AI project on your local machine.

## 1. Clone the Repository

```bash
git clone https://github.com/hamsini1110/AgriSmart-AI.git
cd AgriSmart-AI
```

---

## 2. Install Dependencies

### Frontend

Open a terminal and run:

```bash
cd frontend
npm install
```

### Backend

Open another terminal and run:

```bash
cd backend
npm install
```

---


## 3. Start the Backend Server

Run the following command:

```bash
cd backend
npm run dev
```

or

```bash
npm start
```

The backend server will start at:

```
http://localhost:5000
```

---

## 4. Start the Frontend

Open another terminal and run:

```bash
cd frontend
npm run dev
```

The frontend application will start at:

```
http://localhost:5173
```

---

## 5. Open the Application

Open your browser and visit:

```
http://localhost:5173
```

Register a new account and log in to access the AgriSmart AI platform.

---


# 📷 Project Screenshots

You can add screenshots of:

- Home Page
- Login
- Dashboard
- Crop Recommendation
- Disease Detection
- Fertilizer Recommendation
- Weather Module
- Smart Irrigation
- Market Prices
- AI Chatbot

---

# 🌟 Advantages

- User-friendly interface
- AI-powered recommendations
- Improves farming productivity
- Reduces crop loss
- Saves water
- Supports sustainable agriculture
- Secure authentication
- Responsive design

---

# 🔮 Future Scope

- Mobile Application
- IoT Sensor Integration
- Satellite Image Analysis
- Voice Assistant
- Government Scheme Integration
- Multilingual Support
- Cloud-based Analytics

---

# 📚 References

- React.js Documentation
- Node.js Documentation
- Express.js Documentation
- MongoDB Documentation
- TensorFlow Documentation
- Scikit-learn Documentation
- PlantVillage Dataset
- OpenWeather API Documentation

---



