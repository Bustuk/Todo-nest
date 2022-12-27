CREATE DATABASE db;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON db.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
CONNECT db;
CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);
INSERT INTO todos (title, completed, description) VALUES ('TODO #1', true, 'TODO #1 description');
INSERT INTO todos (title, completed, description) VALUES ('TODO #2', false, 'TODO #2 description');