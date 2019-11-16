#创建elm数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS elm;
#创建数据库，设置存储的编码
CREATE DATABASE elm CHARSET=UTF8;
#进入数据库
USE elm;
#创建表elm_login
CREATE TABLE elm_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
#添加数据
INSERT INTO elm_login VALUES(null,'tom',md5('123'));
INSERT INTO elm_login VALUES(null,'jerry',md5('123'));