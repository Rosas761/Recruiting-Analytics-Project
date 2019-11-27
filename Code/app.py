

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

sql = "select * from snider"
for row in cursor.fetchall():
    my_data = []
    print(row)
    my_data.append(row)

df = pd.DataFrame(my_data)
table1 = df.rename(columns={0: "Revanue", 1: "How_Heard"})
table1



@app.route("/websites/<website>")
def websites(website):
   

    print(table1)
return jsonify(table1)






@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")



if __name__ == "__main__":
    app.run()

conn.close()
