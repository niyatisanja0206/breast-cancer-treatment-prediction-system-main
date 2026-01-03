import pandas as pd
import numpy as np
import os
import sys
import json
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import joblib

# --- Training Phase ---
df = pd.read_csv("ml/cleaned_dataset.csv")

categorical_cols = df.select_dtypes(include=["object"]).columns
label_encoders = {}
for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

X = df.drop(columns=["status_5_years", "interval_years"])
y = df[["Radiation recode", "Chemotherapy recode", "Radiation sequence with surgery"]]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y["Radiation recode"]
)

knn_clf = KNeighborsClassifier(n_neighbors=25)
knn_clf.fit(X_train, y_train)

# Save Model & Encoders
model_path = os.path.join("ml", "alternative_model.pkl")
encoder_path = os.path.join("ml", "alternative_encoders.pkl")
joblib.dump(knn_clf, model_path)
joblib.dump(label_encoders, encoder_path)

# --- Prediction Phase ---
if len(sys.argv) > 1:
    try:
        model = joblib.load(model_path)
        label_encoders = joblib.load(encoder_path)

        input_str = sys.argv[1]
        input_json = json.loads(input_str)
        input_df = pd.DataFrame([input_json])

        # Ensure same columns and order
        expected_cols = X.columns
        missing_cols = set(expected_cols) - set(input_df.columns)
        if missing_cols:
            raise ValueError(f"Missing columns in input: {missing_cols}")

        input_df = input_df[expected_cols]

        # Encode
        for col in input_df.columns:
            if col in label_encoders:
                input_df[col] = label_encoders[col].transform(input_df[col].astype(str))

        prediction = model.predict(input_df)[0]

        output_cols = ["Radiation recode", "Chemotherapy recode", "Radiation sequence with surgery"]
        result = {
            col: label_encoders[col].inverse_transform([prediction[i]])[0]
            for i, col in enumerate(output_cols)
        }

        print(json.dumps({"status": "success", "prediction": result}))
    except Exception as e:
        print(json.dumps({"status": "error", "message": str(e)}))
