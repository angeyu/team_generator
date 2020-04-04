DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;
USE team_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
dept varchar(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title varchar(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT,
PRIMARY KEY(id),
FOREIGN KEY (department_id) REFERENCES department(id) on delete cascade
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name varchar(30) NOT NULL,
last_name varchar(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY (role_id) REFERENCES roles(id) on delete cascade,
FOREIGN KEY (manager_id) REFERENCES employee(id) on delete set null
);