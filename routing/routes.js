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
      const { name } = req.body;
      console.log("daInfo "+ name);
      const { username, email, photo } = req.body;
      console.log("daInfo "+ username, email, photo);
      var newPerson = {
            username: username,
            email: email,
            photo: photo,
        }
        connection.query("INSERT INTO users SET ?", newPerson, function(err, res) {
              res.status(200).json({ success: true });
          });
      });
// get users info from database
    app.get("/api/userdata", function(req, res) {
    connection.query("SELECT * FROM users WHERE username=?", ["Anton Chigurh"], function(err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log("here: "+ data);
        }

        res.json(data);
    });
});
  }
