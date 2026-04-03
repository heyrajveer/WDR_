create database employee;
use employee;
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(30),
  INDEX email_hash_idx (email) USING HASH
) ENGINE=MEMORY;

INSERT INTO users (id, name, email) VALUES
(1, 'Rajveer', 'raj@gmail.com'),
(2, 'Amit', 'amit@gmail.com'),
(3, 'Neha', 'neha@gmail.com'),
(4, 'Riya', 'riya@gmail.com');
SHOW INDEX FROM users;
select * from users where email ="amit@gmail.com";