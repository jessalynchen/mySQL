//display all the items aailable for sale
//install npm cli-table, mysql, inquire package later
var mysql = require("mysql");
var cliTable = require("cli-table");

var table = new cliTable({
    head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'],
   colWidths: [15, 20, 20, 20, 20]
});

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "jessalyn",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});



function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
       // console.log(res)
        for (i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
           
        }
        console.log(table.toString());
        connection.end();
        console.log("it works!");
    });
}//res[i].columnname, rest[i].columnname2,...

// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

