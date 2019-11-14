drop table Employee_Table Cascade
drop table Assignment_Table Cascade
drop table Hours_Worked Cascade

CREATE TABLE Employee_Table (
AIdent INT Primary key ,
Activation Date,
Branch Varchar ,
City Varchar ,
How_Heard Varchar 
);

select * from Employee_Table

CREATE TABLE Assignment_Table (
Performance_Code Varchar ,
AIdent INT  ,
Activation date ,
Completion date ,
Pay_Rate float ,
Bill_Rate float ,
Margin float,
 FOREIGN KEY(AIdent) REFERENCES  Employee_Table (AIdent)
);

select * from Assignment_Table

CREATE TABLE Hours_Worked (
Aident INT,
Hours_Worked float,
FOREIGN KEY(AIdent) REFERENCES Employee_Table (AIdent)
);

--GET RID of VALUES IN HOURS WORK THAT ARENT IN EMP TABLE IN PYTHON 
