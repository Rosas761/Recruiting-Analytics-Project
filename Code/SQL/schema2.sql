
--drop table SB_Data;

CREATE TABLE SB_Data (
Item_ID int Primary key, 
AIdent INT,
Activation Date,
Completion Date,
Pay_Rate float,
Bill_Rate float,
Margin float,
Hours_Worked float,
Branch Varchar ,
City Varchar ,
How_Heard Varchar,
profit float 
);

select * from SB_data