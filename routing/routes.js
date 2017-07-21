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
// post beers
      app.post("/api/beers", function(req, res) {
        console.log("beerInfo "+ req.body);
        const { beername, user } = req.body;

        var newBeer = {
              beername: beername,
              user: user,
          }
          connection.query("INSERT INTO beers (beername, user) VALUES (?, ?)", [newBeer.beername, newBeer.user], function(err, res) {
            if(err) throw err;
          });
        });
// post breweries
      app.post("/api/breweries", function(req, res) {
        console.log("brewinfo "+ req.body);
        const { brewery, user } = req.body;

        var newBrew = {
              brewery: brewery,
              theuser: user,
          }
          connection.query("INSERT INTO breweries (brewery, theuser) VALUES (?, ?)", [newBrew.brewery, newBrew.theuser], function(err, res) {
            if(err) throw err;
          });
        });

// get breweries
      app.get("/api/breweries", function(req, res) {
        connection.query("SELECT * FROM breweries WHERE theuser=?", [1], function(err, data) {
            if (err) {
                throw err;
            }
            else {
                console.log(data);
            }

            res.json(data);
            });
        });
// get users info from database
    app.get("/api/userdata", function(req, res) {
    connection.query("SELECT * FROM users WHERE username=?", ["Tony Caos"], function(err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log(data);
        }

        res.json(data);
    });
});

    app.get("/api/beers", function(req, res) {
    connection.query("SELECT * FROM beers WHERE user=?", [1], function(err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log(data);
        }

        res.json(data);
        });
    });
    app.post("/api/favorites", function(req, res) {
      console.log("beerInfo "+ req.body);
      const { beername, username } = req.body;

      var newBeer = {
            beername: beername,
            user: user,
        }
        connection.query("INSERT INTO favorites (beername, username) VALUES (?, ?)", [newBeer.beername, newBeer.username], function(err, res) {
          if(err) throw err;
        });
      });

      app.get("/api/favorites", function(req, res) {
        connection.query("SELECT * FROM favorites WHERE username=?", [1], function(err, data) {
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
