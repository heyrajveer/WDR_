create database StudentManagamentSystem;
use StudentManagamentSystem;

CREATE TABLE  Student(StudentId int primary key, FirstName varchar(20),
LastName varchar(20), DateOfBirth int,Gender varchar(10), Email varchar(30),Phone bigint);
INSERT INTO Student VALUES
(1,'Rajveer','Kumar',2002,'Male','rajveer@gmail.com',9876543210),
(2,'Aman','Sharma',2001,'Male','aman@gmail.com',9876543211),
(3,'Priya','Verma',2003,'Female','priya@gmail.com',9876543212),
(4,'Rohit','Singh',2002,'Male','rohit@gmail.com',9876543213);
select *from Student;


CREATE TABLE Course(CourseId int primary key,course_Title varchar(20), credits int);
INSERT INTO Course VALUES
(101,'Database',4),
(102,'Data Structures',3),
(103,'Operating System',4),
(104,'Computer Networks',3);
select *from Course;

CREATE TABLE  Instructor(Instructorid int primary key,FirstName varchar(20),
LastName varchar(20),Email varchar(30));
INSERT INTO Instructor VALUES
(1,'Anil','Gupta','anil@gmail.com'),
(2,'Meena','Sharma','meena@gmail.com'),
(3,'Rakesh','Verma','rakesh@gmail.com'),
(4,'Sunita','Singh','sunita@gmail.com');
select *from Instructor;


 -- create a table with the foreign key constraint
 create table Score(ScoreId varchar(50) primary key,CourseID int,StudentID int,DateOFExam date,CreditObtained int,
 foreign key(StudentID) references Student(StudentID), foreign key(CouseID) references course(CouseID),
 foreign key(Instructorid) references Instructor(Instructorid));
 
 
 create table Feetback(FeedbackID int primary key,StudentID int,Date date,InstructorName varchar(20),Feedback varchar(30), 
 foreign key(StudentID) references Student(StudentID));
 select *from  Feetback;
