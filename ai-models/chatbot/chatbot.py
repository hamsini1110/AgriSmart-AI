import sys
import json

# Read user message
data = json.loads(sys.argv[1])
message = data["message"].lower()

# Rule-based Agriculture Chatbot

if "hello" in message or "hi" in message:
    reply = "Hello Farmer! 👋 How can I help you today?"

elif "rice" in message:
    reply = "Rice grows well in clay or loamy soil with sufficient water."

elif "wheat" in message:
    reply = "Wheat requires cool weather and well-drained loamy soil."

elif "cotton" in message:
    reply = "Cotton grows best in black soil with warm temperatures."

elif "tomato" in message:
    reply = "Tomato requires fertile soil and regular irrigation."

elif "fertilizer" in message:
    reply = "Use fertilizers based on soil nutrient levels. Nitrogen, Phosphorus and Potassium are the primary nutrients."

elif "water" in message or "irrigation" in message:
    reply = "Proper irrigation depends on crop type, soil moisture and weather conditions."

elif "weather" in message:
    reply = "Weather forecasting helps farmers plan irrigation and harvesting."

elif "disease" in message:
    reply = "Upload a crop image in Disease Detection for AI-based disease identification."

elif "market" in message or "price" in message:
    reply = "Visit the Market Prices module to check today's crop prices."

elif "thank" in message:
    reply = "You're welcome! 🌱 Happy Farming."

else:
    reply = "Sorry, I couldn't understand your question. Please ask about crops, fertilizers, irrigation, weather, diseases, or market prices."

print(json.dumps({
    "reply": reply
}))