var path = require('path');
var connection = require('../server.js');
var express = require('express');
var app = express();
// var key = "de98643a5e611444f4e27e1b9b805179"

module.exports = function(app) {
    // home page route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


// post users info from database
    app.post("/api/userdata", function(req, res) {
      const { username, email, image } = req.body;
      console.log("daInfo "+ username, email, image);
      var newPerson = {
            username: username,
            email: email,
            image: image,
        }

        connection.query("INSERT INTO users (username, email, image) VALUES (?, ?, ?)", [newPerson.username, newPerson.email, newPerson.image], function(err, res) {
          if(err) throw err;
        });
      });
// get users info from database
    app.get("/api/userdata", function(req, res) {
    connection.query("SELECT * FROM users WHERE username=?", ["Anton Chigurh"], function(err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log(data);
        }

        res.json(data);
    });
});
  }
