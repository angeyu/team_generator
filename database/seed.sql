use team_db;

INSERT INTO department (dept)
VALUES
('Sales'),
('Engineering'),
('IT'),
('Intern');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('Account Executive', 100000, 1),
('Regional Manager', 200000, 1),
('Software Engineer', 120000, 2),
('System Administrator', 90000, 3),
('Systems Analyst', 70000, 3),
('Database Architect', 75000, 4),
('Sales Intern', 1, 4),
('IT Intern', 1, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Sue', 'Sueson', 2, NULL),
('Joe', 'Joeson', 1, NULL),
('Mike', 'Mikeson',3, NULL),
('Sarah', 'Sarahson',6, NULL),
('Tim', 'Timson', 7, 2),
('Kim', 'Kimson', 8, 4);
