from flask import Flask,request,render_template
import numpy as np
import pandas as pd
from flask_cors import CORS, cross_origin
from sklearn.preprocessing import StandardScaler
from src_backend.pipeline.predict_pipeline import CustomData,PredictPipeline
import json

application=Flask(__name__)

app=application
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
## Route for a home page

@app.route('/')
@cross_origin()
def index():
    return render_template('index.html') 

@app.route('/predictdata',methods=['GET','POST'])
def predict_datapoint():
    if request.method=='GET':
        return render_template('home.html')
    else:
        body = request.json
        data=CustomData(
            gender=body['gender'],
            race_ethnicity=body['race'],
            parental_level_of_education=body['parent'],
            lunch=body['lunch'],
            test_preparation_course=body['preparation'],
            reading_score=body['reading'],
            writing_score=body['writing']
        )
        pred_df=data.get_data_as_data_frame()
        print(pred_df)
        print("Before Prediction")

        predict_pipeline=PredictPipeline()
        print("Mid Prediction")
        results=predict_pipeline.predict(pred_df)
        print("after Prediction")

        return str(results[0])
    

if __name__=="__main__":
    app.run(host="0.0.0.0", debug=True)         