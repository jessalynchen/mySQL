DROP database if exists bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,    
    product_name VARCHAR(30) DEFAULT 'electronic',
    department_name VARCHAR(30),
	price INTEGER(50),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "accessory", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cellphone", "accessory", 800, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("air conditioner", "home", 10, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("water bottle", "home", 5, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "accessory", 100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB", "accessory", 5, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "home", 2000, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mug", "home", 2, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("charger", "accessory", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("battery", "accessory", 50, 20);