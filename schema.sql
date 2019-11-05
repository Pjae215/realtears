DROP DATABASE IF EXISTS tears;
CREATE DATABASE realtears;
USE realtears;



CREATE TABLE records (
id NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(8) NOT NULL,
age INTEGER (2) NOT NULL,
gender enum ('male', 'female') NOT NULL,
zipcode INTEGER (5) NOT NULL,
status enum ('active', 'inactive') default 'active',
PRIMARY KEY (id)
);

INSERT INTO records 
(username, email, gender, password, age, zipcode) 

VALUES
('Dan', 'jake@gmail.com', 'male', 'password', '32', '19123'),
('Brandi', 'rake@gmail.com', 'female', 'password', '26', '19703'),
('Lucifer', 'cake@gmail.com', 'male', 'password', '38', '19406');