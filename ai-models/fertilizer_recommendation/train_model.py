import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Load Dataset
data = pd.read_csv("../../datasets/fertilizer.csv")

# Encode Crop
crop_encoder = LabelEncoder()
data["Crop"] = crop_encoder.fit_transform(data["Crop"])

# Encode Fertilizer
fertilizer_encoder = LabelEncoder()
data["Fertilizer"] = fertilizer_encoder.fit_transform(data["Fertilizer"])

# Features
X = data[["Crop", "Nitrogen", "Phosphorus", "Potassium"]]

# Target
y = data["Fertilizer"]

# Train Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

# Save Model
joblib.dump(model, "fertilizer_model.pkl")
joblib.dump(crop_encoder, "crop_encoder.pkl")
joblib.dump(fertilizer_encoder, "label_encoder.pkl")

print("✅ Fertilizer AI Model Trained Successfully!")