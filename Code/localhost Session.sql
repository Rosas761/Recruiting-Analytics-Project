INSERT INTO "SB_Project"."public"."snider" (
    activation,
    aident,
    bill_rate,
    branch,
    city,
    completion,
    hours_worked,
    how_heard,
    item_id,
    margin,
    pay_rate,
    revenue
  )
VALUES
  (
    'activation:date',
    aident:integer,
    'bill_rate:money',
    'branch:character varying',
    'city:character varying',
    'completion:date',
    'hours_worked:double precision',
    'how_heard:character varying',
    item_id:integer,
    'margin:money',
    'pay_rate:money',
    'revenue:money'
  );