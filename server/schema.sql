CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  user TEXT,
  content TEXT,
  room TEXT,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username TEXT UNIQUE,
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- Jennie's
-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id INT AUTO_INCREMENT,
--   user_id INT,
--   content TEXT,
--   room TEXT,
--   PRIMARY KEY (id),
--   FOREIGN KEY (user_id) IN users(id)
-- );

-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT,
--   username TEXT UNIQUE,
--   PRIMARY KEY (id)
-- );