create database  assignment;
use assignment;
create table courses(id int primary key , course_name varchar(30));
INSERT INTO courses(id, course_name) VALUES
(1, 'Java'),
(2, 'Python'),
(3, 'SQL'),
(4, 'C++'),
(5, 'JavaScript');

select * from courses;


