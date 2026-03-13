use studentmanagamentsystem;

-- Task 1--
-- student table
select *from student;
-- You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.
update student set Email ='rajveer_Kumar@gmail.com'
where firstname ='Rajveer' and lastname ='Kumar';

-- instructor table
select *from instructor;
update instructor set Email ='anil_gupta@gmail.com'
where firstname ='Anil' and lastname ='gupta';


-- Task2--
-- delete
delete from student
where Lastname ='kumar';
-- task3 --
select  *FROM Student WHERE FirstName LIKE 'J%';

-- Lab 2.Database Schema:--

create table  Employee(
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    email VARCHAR(100)
);
-- Task1
insert INTO employee  VALUES
(1,'Raj','Kumar',28,'raj@gmail.com'),
(2,'Aman','Sharma',35,'aman@gmail.com'),
(3,'Priya','Verma',32,'priya@gmail.com'),
(4,'Rohit','Singh',24,'rohit@gmail.com');
-- Task2
select first_name,last_name from employee;
-- Task3
select first_name,last_name,age
 from employee
 where age >30;
 -- Increase salary by 10% for employees with job title 'Manager'
UPDATE Employee
SET salary = salary * 1.10
WHERE job_title = 'Manager';

 



