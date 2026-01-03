# treatment_plan.py

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import joblib
import os
import sys
import json

# Get current script directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Load dataset
file_path = os.path.join(current_dir, "cleaned_dataset.csv")
df = pd.read_csv(file_path)

# Encode categorical features
categorical_cols = df.select_dtypes(include=["object"]).columns
label_encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col].astype(str))
    label_encoders[col] = le

# Define features and target
X = df.drop(columns=["status_5_years", "Radiation recode", "Chemotherapy recode", "Radiation sequence with surgery", "interval_years"])
y = df[["Radiation recode", "Chemotherapy recode", "Radiation sequence with surgery"]]
output_features = y.columns.tolist()

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
knn_clf = KNeighborsClassifier(n_neighbors=25)
knn_clf.fit(X_train, y_train)

# Save model and encoders
model_path = os.path.join(current_dir, "treatment_model.pkl")
encoders_path = os.path.join(current_dir, "label_encoders.pkl")
joblib.dump(knn_clf, model_path)
joblib.dump(label_encoders, encoders_path)

# -------------------- Node.js Prediction --------------------
if len(sys.argv) > 1:
    try:
        model = joblib.load(model_path)
        label_encoders = joblib.load(encoders_path)

        input_json = sys.argv[1]
        
        # Just before json.loads(input_json)
        print("RAW INPUT:", sys.argv[1])

        input_data = json.loads(input_json)
        input_df = pd.DataFrame([input_data])

        # Apply encoders
        for col in input_df.columns:
            if col in label_encoders:
                input_df[col] = label_encoders[col].transform(input_df[col].astype(str))

        input_df = input_df[X.columns]  # Match training columns

        prediction = model.predict(input_df)[0]

        # Decode predicted labels
        result = {}
        for i, label in enumerate(output_features):
            result[label] = label_encoders[label].inverse_transform([prediction[i]])[0]

        print(json.dumps({ "status": "success", "prediction": result }))
    except Exception as e:
        print(json.dumps({ "status": "error", "message": str(e) }))
else:
    # Only print JSON (no logs)
    print(json.dumps({ "status": "success", "message": "Model trained successfully" }))
