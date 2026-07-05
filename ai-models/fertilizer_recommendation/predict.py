import sys
import json
import joblib
import os
import warnings
warnings.filterwarnings("ignore")

# Current folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load model files
model = joblib.load(os.path.join(BASE_DIR, "fertilizer_model.pkl"))
crop_encoder = joblib.load(os.path.join(BASE_DIR, "crop_encoder.pkl"))
label_encoder = joblib.load(os.path.join(BASE_DIR, "label_encoder.pkl"))

# Read input
data = json.loads(sys.argv[1])

crop = data["crop"].lower()
nitrogen = int(data["nitrogen"])
phosphorus = int(data["phosphorus"])
potassium = int(data["potassium"])

# Encode crop
crop_encoded = crop_encoder.transform([crop])[0]

# Predict
prediction = model.predict([[crop_encoded, nitrogen, phosphorus, potassium]])

fertilizer = label_encoder.inverse_transform(prediction)[0]

# Return JSON
print(json.dumps({
    "fertilizer": fertilizer
}))