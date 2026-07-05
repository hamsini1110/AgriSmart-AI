import pandas as pd
import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

# Load Dataset
data = pd.read_csv("Crop_recommendation.csv")

# Features
X = data.drop("label", axis=1)

# Target
y = data["label"]

# Encode Labels
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

# Split Dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y_encoded,
    test_size=0.2,
    random_state=42
)

# Train Model
model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)

# Accuracy
prediction = model.predict(X_test)
accuracy = accuracy_score(y_test, prediction)

print(f"Model Accuracy: {accuracy*100:.2f}%")

# Save Model
joblib.dump(model, "model.pkl")
joblib.dump(encoder, "label_encoder.pkl")

print("Model Saved Successfully!")