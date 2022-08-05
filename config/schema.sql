DROP DATABASE IF EXISTS chat_app_db;

CREATE DATABASE chat_app_db;

USE chat_app_db;

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    users_name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL
);

CREATE TABLE post(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    content VARCHAR(250) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);