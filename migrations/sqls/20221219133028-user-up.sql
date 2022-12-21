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
CREATE TABLE Orders(
Id INT PRIMARY KEY,
Status VARCHAR(64),
userID BIGINT REFERENCES users(userID)
);

CREATE TABLE Products (
    Id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE order_products(
       id SERIAL PRIMARY KEY,
       quantity INT,
       product_id BIGINT REFERENCES Products(Id),
       order_id BIGINT REFERENCES Orders(Id)
);