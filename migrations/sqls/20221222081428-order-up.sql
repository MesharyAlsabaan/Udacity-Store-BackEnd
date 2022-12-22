/* Replace with your SQL commands */

CREATE TABLE Orders(
Id INT PRIMARY KEY,
Status VARCHAR(64),
userID BIGINT REFERENCES users(userID)
);