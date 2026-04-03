use assignment; 
create table students(
id int primary key,
name varchar(30), 
age int,
city varchar(50), 
marks int
); 
 INSERT INTO students(id, name, age, city, marks) 
VALUES
(1, 'Raj', 21, 'Delhi', 75),
(2, 'Aman', 22, 'Mumbai', 82),
(3, 'Neha', 20, 'Noida', 68),
(4, 'Karan', 23, 'Delhi', 90),
(5, 'Riya', 21, 'Gurgaon', 55),
(6, 'Arjun', 24, 'Mumbai', 77),
(7, 'Simran', 22, 'Noida', 85);
 
## 🔹 Basic SQL Questions
 
-- 1. Write a query to display all records from a table students.
select *from students;
 
-- 2. Retrieve only name and age from students.
select name, age from students;

-- 3. Write a query to find students older than 20.
select *from students where age >20;

-- 4. Display unique values from the city column.
select distinct city from students;

-- 5. Sort students by marks in descending order.
select *from students order by marks desc;


## 🔹 WHERE, AND, OR, BETWEEN/

-- 6. Find students with marks greater than 70 and age less than 25.
select *from students where  marks>70 and marks <25;

-- 7. Retrieve students from Delhi or Mumbai.
select *from students where  city ="Mumbai" or city="Delhi";
select *from students where  city in("Mumbai","Delhi");

-- 8. Find students whose marks are between 60 and 80.
SELECT * FROM students WHERE marks BETWEEN 60 AND 80;

-- 9. Select students whose name starts with 'A'.
select *from students where name like  'A%';

-- 10. Find students whose name ends with 'n'.
select *from students where name like  '%n';




 ## 🔹 IN, NOT IN
-- 11. Retrieve students from cities 'Delhi', 'Noida', 'Gurgaon'.
select *from students where city in ('Delhi', 'Noida', 'Gurgaon');

-- 12. Find students not belonging to 'Delhi'.
select *from students where city  not in ('Delhi');


## 🔹 LIKE Operator
-- 13. Find students whose name contains 'ar'.
select *from students where name like "%ar%";

-- 14. Find students whose name has exactly 5 characters.
select *from students where name like "_____";


## 🔹 Aggregate Functions

-- 15. Find total number of students.
select count(id)as total_Student from students;

-- 16. Find average marks.
select avg(marks)as avg_makrs from students;

-- 17. Find maximum marks.
select max(marks) from students;

-- 18. Find minimum marks.
select min(marks) from students;

-- 19. Find sum of marks.
select sum(marks)as total_marks from students;



## 🔹 GROUP BY & HAVING

-- 20. Count students in each city.
select  city,count(id)as total_students from students group by city;
select  city,count(*)as total_students from students group by city;

-- 21. Find average marks per city.
select  city,avg(marks)as avg_marks from students group by city;

-- 22. Display cities having more than 1 students.
select  city,count(id) as total_students from students group by city having total_students>1;
select  city  from students group by city having count(*)>1 ;

-- 23. Find cities where average marks > 70.
select  city,avg(marks) as avg_makrs from students group by city having avg_makrs >70;



## 🔹 Joins
-- (there is no direct relationship between student and course there is 
-- enrollemnt table with student_id and course_id )

-- 24. Write a query to perform INNER JOIN between students and courses.
select * from students s 
inner join enrollments e on s.id=e.student_id
inner join courses c on e.course_id= c.id ; 

-- 25. Find students with their course names.
-- (inner join default join)
select s.name,c.course_name from students s
join enrollments e  on e.student_id =s.id
join courses c on c.id=e.course_id;

-- 26. Write a LEFT JOIN query to get all students even if no course assigned.
select s.name,c.course_name from students s
 left join enrollments e  on e.student_id =s.id
left join courses c on c.id=e.course_id; 

-- 27. Write a RIGHT JOIN query.
select s.name,c.course_name from students s
 right join enrollments e  on e.student_id =s.id
right join courses c on c.id=e.course_id; 

-- 28. Write a FULL JOIN query (if supported).
select s.name,c.course_name from students s
left join enrollments e  on e.student_id =s.id
left join courses c on c.id=e.course_id
union
select s.name,c.course_name from students s
right join enrollments e  on e.student_id =s.id
right join courses c on c.id=e.course_id; 


## 🔹 Subqueries

-- 29. Find students with marks greater than average marks.
select * from students where marks > (
select avg(marks) from students);

-- 30. Find the student with highest marks.
select name ,marks from students where marks =(
select max(marks) from students
);
-- 31. Retrieve students who are enrolled in 'Java' course using subquery.
-- (we can use in or =  both but no duplicate value in courses otherwise we need to use in)
SELECT s.name  
FROM students s
JOIN enrollments e ON e.student_id = s.id 
WHERE e.course_id in (
  SELECT course_id 
  FROM courses 
  WHERE course_name = 'Java'
);

-- 32. Find second highest marks.
select max(marks) from students  where marks <(
select max(marks) from students  );
---


## 🔹 EXISTS / NOT EXISTS
-- 33. Find students who are enrolled in at least one course using EXISTS.
SELECT s.name 
FROM students s
WHERE EXISTS (
  SELECT 1
  FROM enrollments e
  WHERE e.student_id = s.id and e.course_id is not NULL
);

-- 34. Find students who are not enrolled in any course using NOT EXISTS.
SELECT s.name 
FROM students s
WHERE not EXISTS (
  SELECT 1
  FROM enrollments e
  WHERE e.student_id = s.id and e.course_id is not NULL
);
---

## 🔹 UPDATE / DELETE

-- 35. Update marks of a student where id = 1
update students
set marks =100
where id =1;
select *from students;

-- 36. Increase marks by 10% for all students.
SET SQL_SAFE_UPDATES = 0;
UPDATE students
SET marks = marks * 1.1;

-- 37. Delete students with marks less than 40.
delete from students
where marks <40;

---

## 🔹 LIMIT / OFFSET
-- 38. Retrieve top 5 students based on marks.
select * from students
order by marks desc limit 5;
-- 39. Skip first 5 records and display next 5.
select * from students
order by marks desc limit 5,5;

select * from students
order by marks desc limit 5 offset 5;
---

## 🔹 Advanced Queries

-- 40. Find duplicate records in a table.

-- 41. Delete duplicate records.
-- 42. Find nth highest salary.
-- 43. Pivot table example (if supported).
-- 44. Rank students using window functions.
-- 45. Find cumulative sum of marks.

---

## 🔹 Practical Scenario-Based Questions

46. Find students who enrolled in multiple courses.
47. Find courses with no students enrolled.
48. List students and number of courses each is enrolled in.
49. Find top 3 students per city.
50. Find students who share the same marks.