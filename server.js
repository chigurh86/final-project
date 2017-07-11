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
// var JAWSDB_URL = ""
//
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
var connection = mysql.createConnection({
        host: "localhost",
        port: 3000,
        user: "root",
        password: "",
        database: "drinkdabeer_db"
    });
// };
// exports
module.exports = connection;
// module.exports.client;

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

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
