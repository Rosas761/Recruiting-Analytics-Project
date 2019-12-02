
drop table snider;

CREATE TABLE Snider (
Item_ID int Primary key, 
AIdent INT,
Activation Date,
Completion Date,
Pay_Rate float,
Bill_Rate float,
Margin float,
Hours_Worked float,
Branch Varchar,
City Varchar,
Sources Varchar,
Revenue float 
);

select *
from snider

--Revenue by How_Heard

select Sources, sum(Revenue) as make_dat_money
from snider
group by Sources
order by make_dat_money desc

--- Revenue by Branch

select branch, sum(Revenue) as make_dat_money
from snider
group by branch
order by make_dat_money desc


-- Revenue by city 

select city, sum(Revenue) as make_dat_money
from snider
group by city
order by make_dat_money desc
