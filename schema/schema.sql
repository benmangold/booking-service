DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

USE booking;

CREATE TABLE apartment (
	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
  max int NOT NULL,
  minStay int NOT NULL,
  stars dec(4,2) NOT NULL,
  numRatings int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE dates (
	id int NOT NULL AUTO_INCREMENT,
	date varchar (20) NOT NULL,
	apartment_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (apartment_id) REFERENCES apartment (id)
	ON DELETE CASCADE
);