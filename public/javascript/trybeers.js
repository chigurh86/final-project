
      var clientId = "client_id=43D9E7E6E3B9C50C285014E7BE74DDCBE021FA00";
      var clientSecret = "&client_secret=E2DFC619E166E32349A9C8E784395C5702BEDCBB";
      var query = "q="
      var url = "https://api.untappd.com/v4/";
      var searchBeer = "beer/trending?";
      var baseUrl = "https://api.untappd.com/v4/";



        $.ajax({url: baseUrl + searchBeer + clientId + clientSecret, success: function(result){
              $('#displayArea').empty();
              var theCount = result.response.macro.count;
              var rando = Math.floor((Math.random() * theCount) + 1);;
              console.log("rondom number "+rando);
              var newCount = rando + 3;
              if (newCount > theCount) {
                newCount = rando;
                rando = rando - 3;
                console.log("it went over "+newCount);
              }
                  for (var i = rando; i < newCount; i++) {
                    // console.log("the name" + result.response.macro.items[i].beer.beer_name)
                    var beerDiv = $("<div id='beerTime'  class ='productHolder thumbnail hero-feature beerDiv'>");
                    var beerCaption = $("<div class='caption'>");
                    var beerImage = $("<img>");
                    var drinkBtn = $("<button class='btn-success replace'>"+"Drink it"+"</button>");
                    drinkBtn.attr("data-button", result.response.macro.items[i].beer.beer_name);
                    drinkBtn.on('click', function(){
                     var beername = $(this).attr("data-button");
                     $(this).parents(".productHolder").hide();
                     replaceBeer();
                     var beerObject = {
                         beername: beername,
                         user:1
                     };
                     $.post("/api/beers", beerObject)
                         .done(function(data) {
                             console.log(data);
                         })
                         .fail(function(error) {
                             console.log("THIS FAILED");
                         });
                    });
                    var passBtn = $("<button class='btn-default'>"+"Eww Gross"+"</button>");
                    passBtn.on('click', function(){
                     $(this).parents(".productHolder").hide();
                     replaceBeer();
                    });
                    beerImage.attr("alt", result.response.macro.items[i].beer.beer_name);
                    beerImage.attr("src", result.response.macro.items[i].beer.beer_label);
                    beerImage.addClass('beerImage');
                    var name = result.response.macro.items[i].beer.beer_name;
                    // var desc = result.response.macro.items[i].beer.beer_description;
                    var abv = result.response.macro.items[i].beer.beer_abv;
                    var beerStyle = result.response.macro.items[i].beer.beer_style;
                  //   // // display to DOM
                    beerCaption.append("<h3>" + name + "</h3>");
                    // beerCaption.append("<div class ='descDiv'>" + "<p class='productDescription'>" + desc + "</p>" + "</div");
                    beerCaption.append("<div class ='abvDiv'>" + "<p class='abv'>" + "ABV: " + abv + "</p>" + "</div");
                    beerCaption.append("<div class ='beerStyleDiv'>" + "<p class='beerStyle'>" + "Beer Style: " + beerStyle + "</p>" + "</div");
                  //   // // building thumbnail
                    beerDiv.append(beerImage);
                    beerDiv.append(beerCaption);
                    beerDiv.append(drinkBtn);
                    beerDiv.append(passBtn);
                    $('#displayArea').append(beerDiv);
                  }
        }});
        $('.btn-default').on('click', function(){
          $("#beerTime").html("");
        });
          function replaceBeer(){
            $.ajax({url: baseUrl + searchBeer + clientId + clientSecret, success: function(result){
                  var theCount = result.response.macro.count;
                  var rando = Math.floor((Math.random() * theCount) + 1);;
                  if (rando === theCount) {
                    rando = rando - 1;
                  }
                      for (var i = rando; i < rando + 1; i++) {
                        var beerDiv = $("<div id='beerTime'  class ='productHolder thumbnail hero-feature beerDiv'>");
                        var beerCaption = $("<div class='caption'>");
                        var beerImage = $("<img>");
                        var drinkBtn = $("<button class='btn-success replace'>"+"Drink it"+"</button>");
                        drinkBtn.attr("data-button", result.response.macro.items[i].beer.beer_name);
                        drinkBtn.on('click', function(){
                           var beername = $(this).attr("data-button");
                           $(this).parents(".productHolder").hide();
                           replaceBeer();
                           var beerObject = {
                               beername: beername,
                               user:1
                           };
                           $.post("/api/beers", beerObject)
                               .done(function(data) {
                                   console.log(data);
                               })
                               .fail(function(error) {
                                   console.log("THIS FAILED");
                               });
                        });
                        var passBtn = $("<button class='btn-default'>"+"Eww Gross"+"</button>");
                        passBtn.on('click', function(){
                           $(this).parents(".productHolder").hide();
                           replaceBeer();
                        });
                        beerImage.attr("alt", result.response.macro.items[i].beer.beer_name);
                        beerImage.attr("src", result.response.macro.items[i].beer.beer_label);
                        beerImage.addClass('beerImage');
                        var name = result.response.macro.items[i].beer.beer_name;
                        // var desc = result.response.macro.items[i].beer.beer_description;
                        var abv = result.response.macro.items[i].beer.beer_abv;
                        var beerStyle = result.response.macro.items[i].beer.beer_style;
                      //   // // display to DOM
                        beerCaption.append("<h3>" + name + "</h3>");
                        // beerCaption.append("<div class ='descDiv'>" + "<p class='productDescription'>" + desc + "</p>" + "</div");
                        beerCaption.append("<div class ='abvDiv'>" + "<p class='abv'>" + "ABV: " + abv + "</p>" + "</div");
                        beerCaption.append("<div class ='beerStyleDiv'>" + "<p class='beerStyle'>" + "Beer Style: " + beerStyle + "</p>" + "</div");
                      //   // // building thumbnail
                        beerDiv.append(beerImage);
                        beerDiv.append(beerCaption);
                        beerDiv.append(drinkBtn);
                        beerDiv.append(passBtn);
                        $('#displayArea').append(beerDiv);
                      }
            }});
          }
