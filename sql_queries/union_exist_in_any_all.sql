use empoyee_management;
-- union operator : it is used to combine the result-set
-- of two or more select statements. Union operator
-- automatically removes the duplicate rows from the
-- result set.
-- Reuirements of union are:-
-- 1. every select statement within union must have the
-- same number of columns.
--  the column must also have the similar datatype
-- the columns in every select statement must also be
-- in the same order
-- select collist from tablename1 union select collist
-- from tablename2;
CREATE TABLE north_region (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50),
    dept_id INT
);

CREATE TABLE south_region (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50),
    dept_id INT
);
INSERT INTO north_region VALUES
(101, 'Amit', 30, 'Delhi', 10),
(102, 'Rahul', 28, 'Delhi', 20),
(103, 'Priya', 32, 'Chandigarh', 10),
(104, 'Neha', 25, 'Jaipur', 30),
(105, 'Amit', 30, 'Delhi', 10),
(106, 'Rohit', 35, 'Lucknow', 40),
(107, 'Priya', 29, 'Chandigarh', 20),
(108, 'Neha', 25, 'Jaipur', 30),
(109, 'Rahul', 28, 'Delhi', 20),
(110, 'Amit', 31, 'Lucknow', 40);

INSERT INTO south_region VALUES
(201, 'Arjun', 27, 'Bangalore', 10),
(202, 'Kiran', 29, 'Hyderabad', 20),
(203, 'Meena', 31, 'Chennai', 30),
(204, 'Divya', 26, 'Bangalore', 10),
(205, 'Arjun', 27, 'Bangalore', 10),
(206, 'Kiran', 33, 'Hyderabad', 40),
(207, 'Meena', 31, 'Chennai', 30),
(208, 'Divya', 26, 'Bangalore', 10),
(209, 'Arjun', 28, 'Hyderabad', 20),
(210, 'Kiran', 29, 'Chennai', 30);

select employee_id, name, city from north_region union
select employee_id, name, city from south_region;

-- union all : 
-- it is used to combine the result set of two queries
-- it includes all the rows of each statement without removing
-- duplicate rows.

select employee_id, name, city from north_region union all
select employee_id, name, city from south_region;
-- intersect :  it will return records from all the given
-- select statements and it will only provide the common rows

-- intersect not SELECT n.employee_id, n.name, n.city
SELECT n.employee_id, n.name, n.city
FROM north_region n
INNER JOIN south_region s
ON n.employee_id = s.employee_id
AND n.name = s.name
AND n.city = s.city;

-- union all : 
-- it is used to combine the result set of two queries
-- it includes all the rows of each statement without removing
-- duplicate rows.

select employee_id, name, city from north_region union all
select employee_id, name, city from south_region;
-- intersect :  it will return records from all the given
-- select statements and it will only provide the common rows

select employee_id, name, city from north_region except
select employee_id, name, city from south_region; 


-- except/ minus : It returns rows from first query which
-- are not present in second query. 
-- except - mysql, sql server,  
-- minus -  oracle
-- in :  it checks if a value matches any value in the
-- subquery or list.
--  select collist from tablename where colname in(value1, value2, value3..)
select * from north_region where city in ('Delhi', 'Chandigarh');
--  select collist from tablename where colname in(select query);
select * from north_region where city in
(select city from north_region where dept_id in (20, 30));
-- not in  :  it returns records where our condition is false
select * from north_region where city in
(select city from north_region where dept_id not in (20, 30));
select * from north_region where city not in('Delhi', 'Chandigarh');
-- exists operator :  this operator checks the subquery 
-- and returns rows if subquery returns at least 1 row 
-- or true.
-- select collist from table1 nickname where exists
-- (select statment)
create table department(dept_id int primary key, dept_name
varchar(30));
insert into department values(40, "Marketing");
select * from department;
select nr.employee_id, nr.name
from north_region nr where exists 
(select dept_name from department dp where 
nr.dept_id=dp.dept_id);

create table s1(id int primary key, name varchar(50), 
city varchar(50));
create table Enrollments(student_id int primary key, 
course varchar(50), fees float);

insert into s1 values(108,'Shoaib', 'Luknow');
insert into Enrollments values(106, 'HTML', 20000);

select * from s1;

select * from Enrollments;

select name, city from s1 s where not exists
(select 1 from Enrollments e where s.id = e.student_id and 
course='java');
-- any operator
select name, city from s1 where id = 
any(select student_id from Enrollments where course='Java');

select name, city from s1 where id = 
any(select student_id from Enrollments where fees >40000);

select * from s1 where id = all(select student_id from enrollments 
where fees<40000);
-- what is the difference between exists, all, and any operators?

