import sqlite3
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

def main():
    # -------------------------------------------------------------------
    # 1. DATA STORAGE AND MANAGEMENT: Connecting to the SQLite database
    # -------------------------------------------------------------------
    print("Connecting to local database to extract Abuja waste records...")
    conn = sqlite3.connect('../prisma/dev.db')

    # -------------------------------------------------------------------
    # 2. DATA TYPES AND USAGE: Loading data into Pandas DataFrame
    # -------------------------------------------------------------------
    query = "SELECT urgency, type, riskScore, isHighPriority FROM Report"
    try:
        df = pd.read_sql_query(query, conn)
        print("\n✅ Data Loaded successfully. First 5 rows of the dataset:")
        print(df.head())
    except Exception as e:
        print("Database not seeded yet. Please run `npx tsx prisma/seed.ts` first.")
        return

    # -------------------------------------------------------------------
    # 3. PYTHON BASICS, CONDITIONAL LOGIC & LOOPS: Data Preprocessing
    # -------------------------------------------------------------------
    # Converting categorical text data into numeric types for ML
    urgency_map = {'Low': 1, 'Medium': 2, 'High': 3, 'Critical': 4}
    type_map = {
        'Organic/Food Waste': 1, 
        'Plastic/Recyclable': 2, 
        'Medical/Hazardous': 3, 
        'Liquid waste / Sewage': 4, 
        'General Solid Waste': 5
    }

    df['urgency_num'] = df['urgency'].map(urgency_map)
    df['type_num'] = df['type'].map(type_map)
    
    # Drop rows with NaN (if any mapping failed)
    df = df.dropna()

    # -------------------------------------------------------------------
    # 4. DATA ANALYST ROLES AND WORKFLOW: Feature Engineering
    # -------------------------------------------------------------------
    X = df[['urgency_num', 'type_num']] # Features (Inputs)
    y = df['isHighPriority']            # Target (Output)

    # -------------------------------------------------------------------
    # 5. MACHINE LEARNING CONCEPTS: K-Nearest Neighbors Training
    # -------------------------------------------------------------------
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Instantiate the KNN model
    knn = KNeighborsClassifier(n_neighbors=3)
    
    # Train the model with the training subset
    knn.fit(X_train, y_train)

    # Generate predictions using the testing subset
    predictions = knn.predict(X_test)
    
    # Evaluate Machine Learning accuracy
    accuracy = accuracy_score(y_test, predictions)

    print(f"\n🧠 Machine Learning Model trained successfully.")
    print(f"📊 Accuracy on 20% validation split: {accuracy * 100:.2f}%")
    print("\n[NOTE]: This foundational Python prototype validated our KNN approach.")
    print("The finalized algorithm logic was subsequently translated to TypeScript/ml-knn")
    print("to run natively inside the Next.js production web server.")

if __name__ == "__main__":
    main()
