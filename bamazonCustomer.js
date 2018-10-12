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
    password: "password",
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
}