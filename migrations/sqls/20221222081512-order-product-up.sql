/* Replace with your SQL commands */

CREATE TABLE order_products(
       id SERIAL PRIMARY KEY,
       quantity INT,
       product_id BIGINT REFERENCES Products(Id),
       order_id BIGINT REFERENCES Orders(Id)
);