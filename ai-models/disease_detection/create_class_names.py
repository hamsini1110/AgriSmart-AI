from tensorflow.keras.preprocessing.image import ImageDataGenerator
import json

train_path = "PlantVillage/train"

train_datagen = ImageDataGenerator(rescale=1./255)

train_data = train_datagen.flow_from_directory(
    train_path,
    target_size=(128, 128),
    batch_size=32,
    class_mode="categorical",
    shuffle=False
)

with open("class_names.json", "w") as f:
    json.dump(train_data.class_indices, f, indent=4)

print("class_names.json created successfully!")