

import os

import pandas as pd
import numpy as np
import psycopg2

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

#url = "postgressql://postgres:postgres@localhost:5432/SB_Project"
#conn = psycopg2.connect(url)
conn = psycopg2.connect(dbname="SB_Project", user="postgres",
                        password="postgres", host="localhost", port="5432")

cursor = conn.cursor()

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/how_heard")
def how_heard():
    
    sql = f"select sum(profit), how_heard from snider where How_Heard = '{how_heard}' group by how_heard order by sum(profit) desc"
    cursor.execute(sql)
    for row in cursor.fetchall():
        my_data = []
        print(row)
        my_data.append(row)

    df = pd.DataFrame(my_data)
    table1 = df.rename(columns={0: "Revanue", 1: "How_Heard"})
    table1
    
    data = {
        "Revanue": table1["Revanue"].tolist(),
        "How_Heard": table1["How_Heard"].tolist(),
        
    }
    return jsonify(data)



if __name__ == "__main__":
    app.run()

conn.close()
