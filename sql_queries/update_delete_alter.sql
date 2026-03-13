-- update :  it is used to edit a record
-- to update all the records at once
-- update tablename set col1=value1, col2=value2,..;
-- to update a specific column 
-- update tablename set col1=value1, col2=value2,.. where
-- col operator value;
-- to add a new column
-- alter table add column colname datatype constraint;
use studentmanagamentsystem;
alter table student add column password varchar(30);
select * from student;

-- add password of all the students
set Sql_safe_updates=0;
update student set password='abc@123';
update student set password='rahul@123' where studentid=1;
-- update password of everyone but password should contain
-- first 3 letters of firstname along with # and after 
-- the hash there should be the studentid 
-- eg.  firstname is Amit and his id is 3 then password
-- should be ami#3
update student set password =concat(substring(FirstName,1,3),
"#",studentid);

update student set password= concat(left(firstname,3),'#,'studentid) where studentid !=1;
-- delete : to delete a record

update student set password= concat(left(firstname,3),
'@',studentid) where studentid !=1;
select * from student;

-- delete query
-- it deletes a record 
-- delete from tablename where colname operator value;
delete from student where studentid=7;
-- -----------------------------------------
-- To get a specific number of records from the table,
-- every dbms provides a different type of query for
-- working with it.
--  select top :   it is used to get a specific number of 
-- records from top of the table. it is used in SQL Server
-- or ms-access. 
-- select top number/percent colnames from tablename 
-- where condition;
-- In mysql, we use limit clause at the end of select
-- query to get a specific number of records. 
-- select colnames from tablename where clause(optional)
-- limit number;
-- above query will get the given number of records from
-- table
-- select colnames from tablename where clause(optional)
-- limit startindex, number;
select * from student limit 4;
select * from student limit 2,3;
select * from student limit 3 offset 0;
