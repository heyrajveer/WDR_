--  use of check constraint
CREATE DATABASE StudentDetails;
USE StudentDetails;
CREATE TABLE Student (
    studentid INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    age INT,
    city VARCHAR(60),
    CHECK (age >= 18)
);
INSERT INTO Student (FirstName, LastName, email, age, city) VALUES
('Rajveer', 'Kumar', 'rajveer@gmail.com', 22, 'Delhi'),
('Aman', 'Sharma', 'aman@gmail.com', 21, 'Noida'),
('Rohit', 'Singh', 'rohit@gmail.com', 24, 'Lucknow'),
('Priya', 'Verma', 'priya@gmail.com', 23, 'Delhi'),
('Neha', 'Gupta', 'neha@gmail.com', 20, 'Gurgaon');

select * from Student;


-- setting auto increment value
use studentmanagementsystem;
create table Student1(studentid int primary key 
auto_increment,
studentname varchar(60) not null, age int, city varchar(60),
check (age>=18))auto_increment=1011;

alter table Student add column marks int default 33;
select * from student;

CREATE INDEX basicinfo
ON Student(FirstName, LastName, email);

show index from student;
show keys from student;
CREATE TABLE Student1 (
    studentid INT PRIMARY KEY AUTO_INCREMENT,
    studentname VARCHAR(60) NOT NULL,
    age INT,
    city VARCHAR(60),
    CHECK (age >= 18)
) AUTO_INCREMENT = 1011;
INSERT INTO Student1(studentname, age, city) VALUES
('Abu Vakar', 24, 'Lucknow'),
('Rahul', 21, 'Delhi'),
('Sneha', 22, 'Mumbai');
SELECT * FROM Student1;

-- how do we show data of columns using the index?
SELECT FirstName, LastName, email
FROM Student
WHERE FirstName = 'Rajveer';
-- If an index exists on (FirstName, LastName, email), MySQL may use it automatically.

-- To check whether the index is used:
EXPLAIN SELECT FirstName, LastName, email
FROM Student
WHERE FirstName = 'Rohit';

-- is it possible to show data using indexed feature?
-- No.
-- Indexes do not store data for direct querying.
-- They only store references (pointers) to table rows to make searching faster.
-- So this is not valid: