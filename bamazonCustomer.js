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
        checkQuantity();
    });
}

//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.

function checkQuantity(){
    connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', (err, res) => {

        for(var i = 0; i < res.length; i++)
        {
            table.push([res[i].item_id, res[i].product_name, res[i].price.toFixed(2), res[i].stock_quantity]);
        }
        console.log(table.toString());

        inquirer.prompt([{
            name: "itemid",
            type: "input",
            message: "Please enter the ID of the product you would like to buy: ",
            validate: (value) =>{
                if(isNaN(value) == false)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        },
    {
      name: "quantity",
      type: "input",
      message: "how many units of the product you would like to buy: " ,
      validate: (value) =>{
            if(isNaN(value) == false)
            {
                return true;
            }
            else
            {
                return false;
            }
        } 
    }]).then((answer) => {

        for(var i = 0; i < res.length; i++)
        {
            if(res[i].item_id == answer.itemid)
            {
                var chosenItem = res[i];
            }
        }

        var updateStock = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);
        var productsales = parseFloat(chosenItem.product_sales).toFixed(2);
       
        if(chosenItem.stock_quantity < parseInt(answer.quantity))
        {
            console.log("Insufficient quantity!");
      
        }
        else
        {

            var total = (parseFloat(answer.quantity) * chosenItem.price).toFixed(2);
            var productTotal = (parseFloat(total) + parseFloat(productsales)).toFixed(2);
            //console.log(productTotal);
            //query to update the stocks 
            var query = connection.query("UPDATE products SET ?, ? WHERE ?",
        [
            {
                stock_quantity: updateStock
            },
            {
                product_sales: productTotal
            },
            {
                item_id: chosenItem.item_id
            }
        ],
        (err, res) => 
        {
            if(err)
            {
                throw err;
            }
            console.log("Successfully Purchased!");
            console.log(`Your Total is $ ${total}`);
            
        });
        }
    });
    });
}
