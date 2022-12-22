/* Replace with your SQL commands */

CREATE TABLE Users(
   	userID INT PRIMARY KEY,
   	Email varchar(255) UNIQUE,
   	Password varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    City varchar(255) NOT NULL,
    Salt varchar(255)
);




