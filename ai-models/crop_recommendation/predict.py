import sys
import os
import joblib

# Current folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load model
model = joblib.load(os.path.join(BASE_DIR, "model.pkl"))

# Load label encoder
label_encoder = joblib.load(os.path.join(BASE_DIR, "label_encoder.pkl"))

# Read values
N = float(sys.argv[1])
P = float(sys.argv[2])
K = float(sys.argv[3])
temperature = float(sys.argv[4])
humidity = float(sys.argv[5])
ph = float(sys.argv[6])
rainfall = float(sys.argv[7])

prediction = model.predict([[N, P, K, temperature, humidity, ph, rainfall]])

crop = label_encoder.inverse_transform(prediction)

print(crop[0])