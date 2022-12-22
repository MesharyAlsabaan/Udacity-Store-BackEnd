# Storefront Backend Project

This repo contains the backend application of store shop.

## Required Technologies

The application uses the following libraries:

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to run the application

- Install the packages by "npm i"
- Run the migration file "db-migrate up"
- Run the migration file down "db-migrate down"
- Run the migration file for test env "db-migrate up --env test"

Please change the var in the .env (test or dev) 

- Run the application "npm run dev"


## Enviroment Variables Set up

     PORT=3000
     NODE_ENV = dev
     POSTGRES_USER = postgres
     POSTGRES_PASSWORD = postgres
     POSTGRES_HOST = localhost
     POSTGRES_PORT = 5431
     POSTGRES_DATABASE = postgres-udacity
     POSTGRES_DATABASE_test = postgres-udacity_test
     TOKEN_SECRET = Mm12



## The database schema and and API route information

- Users

  - createUser (POST /user)
  - login (POST /user/login)
  - getUser (GET /user/:id)
  - getAllUsers (GET /user)
  - updateUser (PUT /user/:id)
  - deleteUser (DELETE /user/:id)

- Products

  - createProduct (POST /product)
  - getAllProducts (GET /product)
  - getProduct (GET /product/:id)

- Order
  - createOrder (POST /order/:userId)
  - getOrder (GET //order/:userId)

## Data Shapes

- Users
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

- Products
  CREATE TABLE Orders(
  Id INT PRIMARY KEY,
  Status VARCHAR(64),
  userID BIGINT REFERENCES users(userID)
  );

- Order
  CREATE TABLE Products (
  Id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  price INT NOT NULL
  );

- Order-Product
  CREATE TABLE order_products(
  id SERIAL PRIMARY KEY,
  quantity INT,
  product_id BIGINT REFERENCES Products(Id),
  order_id BIGINT REFERENCES Orders(Id)
  );

## To run the unit test please rub this command
    - npm run test


## To save your time import the file that i provided in the project into postman
Udacity.postman_collection.json