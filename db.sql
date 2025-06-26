CREATE DATABASE IF NOT EXISTS wutet;
USE exam_db;

CREATE TABLE results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(20) NOT NULL,
  name VARCHAR(100),
  grade VARCHAR(10),
  status VARCHAR(20)
);

INSERT INTO results (student_id, name, grade, status) VALUES
('10001', 'Ali Umar', 'A', 'Passed'),
('10002', 'Suleman Umar', 'A', 'Passed'),
('10003', 'Ahmed Alemnew', 'F', 'Failed'),
('10004', 'Rukiya Sufiyan', 'A', 'Passed'),
('10005', 'Hayat Sufiyan', 'A', 'Passed'),
('10006', 'Adem Alemnew', 'C', 'Failed');
