

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


@app.route("/branches")
def branches():
    """Return a list of branches"""
    cursor = conn.cursor()
    sql3 = "select distinct branch from snider order by branch"
    cursor.execute(sql3)
    branch_list = ['All']
    for row in cursor.fetchall():
        print(row)
        branch_list.append(row)
    branch_df = pd.DataFrame(branch_list)
    branch_list = branch_df[0].tolist()
    cursor.close()
    return jsonify(branch_list)


@app.route("/table/<branch>")
def table(branch):
    """Return aggregate data for specific branch"""
    cursor = conn.cursor()
    table_list = []
    if (branch == "All"):
        table_url = "select * from snider"
        cursor.execute(table_url)
        for row in cursor.fetchall():
            print(row)
            table_list.append(row)
        table_df = pd.DataFrame(table_list)
        revenue_total = round(sum(table_df[11]), 2)
        revenue_avg = round(revenue_total/(len(table_df)), 2)
        margin_avg = round((sum(table_df[6])/(len(table_df))), 2)
        hours_avg = round((sum(table_df[7])/(len(table_df))), 2)
    else:
        table_url = f"select * from snider where branch = '{branch}'"
        cursor.execute(table_url)
        for row in cursor.fetchall():
            print(row)
            table_list.append(row)
        table_df = pd.DataFrame(table_list)
        revenue_total = round(sum(table_df[11]), 2)
        revenue_avg = round(revenue_total/(len(table_df)), 2)
        margin_avg = round((sum(table_df[6])/(len(table_df))), 2)
        hours_avg = round((sum(table_df[7])/(len(table_df))), 2)
    results_list = {
        "Total Revenue": revenue_total,
        "Average Revenue": revenue_avg,
        "Average Profit": margin_avg,
        "Average Hours": hours_avg
    }
    cursor.close()
    return jsonify(results_list)


if __name__ == "__main__":
    app.run()

conn.close()
