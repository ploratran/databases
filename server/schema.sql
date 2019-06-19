CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY,
  user TEXT,
  content TEXT,
  room TEXT 
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT PRIMARY KEY,
  username TEXT 
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

