
--drop table snider;

CREATE TABLE Snider (
Item_ID int Primary key, 
AIdent INT,
Activation Date,
Completion Date,
Pay_Rate money,
Bill_Rate money,
Margin money,
Hours_Worked float,
Branch Varchar,
City Varchar,
How_Heard Varchar,
profit money 
);

select *
from snider

--Revenue by How_Heard

select how_heard, sum(profit) as make_dat_money
from snider
group by how_heard
order by make_dat_money desc

--- Revenue by Branch

select branch, sum(profit) as make_dat_money
from snider
group by branch
order by make_dat_money desc


-- Revenue by city 

select city, sum(profit) as make_dat_money
from snider
group by city
order by make_dat_money desc
