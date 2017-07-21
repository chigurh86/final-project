var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(`${__dirname}/public`));


 // connection;
var JAWSDB_URL = "mysql://kl2bqalkkfs09ia0:j5i2qsutbltuxx30@a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hsgta5zpyc9c9ccp"

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "drinkdabeer_db"
    });
};
// exports
module.exports = connection;
// module.exports.client;

connection.connect(function(err) {
    if (err) {
        console.error("Tony you had connecting: " + err.stack);
        return;
    }

    console.log("Tony you connected as id " + connection.threadId);

});
// ======================================================== //
// app path //
// ========================================================//

require("./routing/routes.js")(app);

// ======================================================== //
// server lisetnner //
// ======================================================== //

app.listen(PORT, function() {
    console.log('this is port ' + PORT);

});
