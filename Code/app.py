

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




app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/Sources")
def Sources():
    cursor = conn.cursor()
    sql = f"select sum(Revenue), Sources from snider where Sources is not null group by Sources order by sum(Revenue) desc"
    cursor.execute(sql)
    my_data = []
    for row in cursor.fetchall():
        
        print(row)
        my_data.append(row)

    df = pd.DataFrame(my_data)
    table1 = df.rename(columns={0: "SUM_Revenue", 1: "Sources"})
    table1
    
    data = {
        "Revenue1": table1["SUM_Revenue"].tolist(),
        "Sources1": table1["Sources"].tolist(),
        
    }
    cursor.close()
    return jsonify(data)

@app.route("/bar")
def bar():
    cursor = conn.cursor()
    Lancaster = ('Lancaster')
    sql2 = f"select avg(Revenue), Branch from snider where Branch not in ('Lancaster') group by Branch order by avg(Revenue) desc"
    cursor.execute(sql2)
    my_data2 = []
    for row in cursor.fetchall():
        
        print(row)
        my_data2.append(row)

    df2 = pd.DataFrame(my_data2)
    table2 = df2.rename(columns={0: "AVG_Revenue", 1: "Branch"})
    table2
    
    data2 = {
        "Revenue2": table2["AVG_Revenue"].tolist(),
        "Branch": table2["Branch"].tolist(),
    }
    cursor.close()
    return jsonify(data2)

if __name__ == "__main__":
    app.run()

conn.close()