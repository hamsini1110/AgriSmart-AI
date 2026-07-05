import sys
import json
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image

# Current folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load trained model
model = tf.keras.models.load_model(
    os.path.join(BASE_DIR, "plant_disease_model.keras")
)

# Load class names
with open(os.path.join(BASE_DIR, "class_names.json"), "r") as f:
    class_indices = json.load(f)

# Convert class indices to class names
class_names = {v: k for k, v in class_indices.items()}

# Get image path
img_path = sys.argv[1]

# If uploaded image path is relative, make it absolute
if not os.path.isabs(img_path):
    img_path = os.path.abspath(
        os.path.join(BASE_DIR, "../../backend", img_path)
    )

# Load image
img = image.load_img(img_path, target_size=(128, 128))
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)
img_array = img_array / 255.0

# Predict
prediction = model.predict(img_array, verbose=0)

predicted_index = np.argmax(prediction)
confidence = float(np.max(prediction) * 100)

predicted_class = class_names[predicted_index]

result = {
    "disease": predicted_class,
    "confidence": round(confidence, 2)
}

print(json.dumps(result)) 