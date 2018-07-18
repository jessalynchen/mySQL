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
VALUES ("laptop", "accessory", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cellphone", "accessory", 80, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("air conditioner", "home", 10, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "accessory", 50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "accessory", 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB", "accessory", 20, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "home", 20, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphone", "accessory", 80, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("charger", "accessory", 20, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("battery", "accessory", 10, 20);