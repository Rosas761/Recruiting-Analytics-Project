

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


conn = psycopg2.connect(dbname="SB_Project", user="postgres",
                        password="postgres", host="localhost", port="5432")

cursor = conn.cursor()

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/Sources")
def Sources():
    Indeed = 'Indeed'
    Craigslist = 'Craigslist'
    sql = f"select sum(Revenue), Sources from snider where Sources = '{Indeed}' or Sources = '{Craigslist}' group by Sources order by sum(Revenue) desc"
    cursor.execute(sql)
    my_data = []
    for row in cursor.fetchall():
        
        print(row)
        my_data.append(row)

    df = pd.DataFrame(my_data)
    table1 = df.rename(columns={0: "Revenue", 1: "Sources"})
    table1
    
    data = {
        "Revenue": table1["Revenue"].tolist(),
        "Sources": table1["Sources"].tolist(),
        
    }
    return jsonify(data)



if __name__ == "__main__":
    app.run()

conn.close()
