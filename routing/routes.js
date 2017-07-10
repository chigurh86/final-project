var path = require('path');
var connection = require('../server.js');
var express = require('express');
var app = express();
var key = "de98643a5e611444f4e27e1b9b805179"

module.exports = function(app) {
    // home page route
    app.get("/", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/api/search", function(req, res) {
      // console.log("Log Body: " + JSON.stringify(req.body))
      // const { name } = req.body;
      // console.log("name: "+ name)

      var BreweryDb = require('node-brewerydb');
      var client = new BreweryDb({apiKey: key});
      client.beers({name: 'Bud Light'},  function(err, response) {
        if (err) {
          // handle errors
        }
        // console.log(res);
        // console.log(response);
          res.json(response);
      });
    })

    app.post("/api/userdata", function(req, res) {
      const { name } = req.body;
      console.log("daInfo "+ name);
      // const { username, email, photo } = req.body;
      // console.log("daInfo "+ username, email, photo);
      // var newPerson = {
      //       username: username,
      //       email: email,
      //       photo: photo,
      //   }
        // connection.query("INSERT INTO users SET ?", newPerson, function(err, res) {
        //       res.status(200).json({ success: true });
        //   });
      });

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
