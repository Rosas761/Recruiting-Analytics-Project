

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
conn = psycopg2.connect(dbname="SB_Project", user= "postgres", password="postgres", host="localhost", port = "5432")

cursor = conn.cursor()

app = Flask(__name__)

sql = "select sum(profit), how_heard from snider group by how_heard order by sum(profit) desc"

cursor.execute(sql)
for row in cursor.fetchall():
    print(row)



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/names")
def names():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Samples).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns)[2:])


if __name__ == "__main__":
    app.run()

conn.close()