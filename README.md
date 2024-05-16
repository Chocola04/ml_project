# Marks Predictor: A Machine Learning Project
This project aims to predict a student's math score based on various features using machine learning techniques.

### Libraries Used
* Data Manipulation: `pandas, numpy`
* Visualization: `seaborn, matplotlib`
* Machine Learning: `scikit-learn, CatBoost, XGBoost (for experimentation)`
* API Development : `Flask (For creating a web API)`
* Frontend Development : `React (For reating a user interface)`


### Methodology
* Data Acquisition: `Acquired a dataset containing student information and their corresponding math scores from kaggle.`
* Data Preprocessing: `Cleaned and prepared the data for machine learning tasks, which have involved, encoding categorical features, and feature scaling.`
* Exploratory Data Analysis (EDA): `Analyzed the data to understand relationships between features and math scores using visualization techniques provided by seaborn and matplotlib.`
* Model Training: `Trained various machine learning models, including linear regression, logistic regression, Decision trees, CatBoost, and XGBoost, on the prepared data using metrics like R-squared (R²) to determine the best fit for predicting math scores.`
* Model Selection: `Based on the R² score (or other relevant metrics), identified linear regression as the best performing model for predicting math scores.`
* Deployment : `Potentially deployed the model as a web API using Flask and created a user interface using React to allow users to interact with the model and predict math scores based on input features.`