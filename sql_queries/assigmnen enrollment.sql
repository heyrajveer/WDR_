create database  assignment;
use assignment;
CREATE TABLE enrollments (
  id INT PRIMARY KEY,
  student_id INT,
  course_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
INSERT INTO enrollments(id, student_id, course_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 2),
(6, 4, 4),
(7, 5, 3),
(8, 6, 5),
(9, 7, 1),
(10, 7, 2);
select *from enrollments;
update enrollments
set course_id =NULL
where id in (3,5);

update enrollments
set student_id =NULL
where id in (6,8);


