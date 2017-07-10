// post from DOM
$(document).ready(function() {

  $('#submitPerson').on('click', function() {
      event.preventDefault();
      var personObject = {
          username: $('#username').val(),
      };

      $.post("/api/search", personObject)
          .done(function(data) {
              console.log(data);
          })
          .fail(function(error) {
              console.log("THIS FAILED");
          });

      $('#username').val("");
  });




    $('#beer_search').on('click', function() {
      alert("Got to beer search");
        event.preventDefault();
        var name = $('#theBeer').val();
        $.post("/api/userdata", name)
            .done(function(data) {
                console.log("The Data "+ data);
            })
            .fail(function(error) {
                console.log("THIS FAILED");
            });
        $('#theBeer').val("");
    });

});


function displayBeers(){

    $.get("/api/search", function(response) {
    // console.log("the response" + JSON.stringify(response))
    console.log(response.data[0].name);
      // $('#display').empty();
      for (var i = 0; i < 1; i++) {
        console.log("the name" + response.data[0].name)
        var beerDiv = $("<div class ='productHolder thumbnail hero-feature beerDiv'>");
        var beerCaption = $("<div>");
        var beerImage = $("<img>");
        beerImage.attr("alt", response.data[0].name);
        beerImage.attr("src", response.data[0].labels.large);
        beerImage.addClass('beerImage');
        var name = response.data[0].name;
        var desc = response.data[0].description;
        var abv = response.data[0].abv;
        var organic = response.data[0].isOrganic;
        // display to DOM
        // building caption
        beerCaption.append("<h3>" + name + "</h3>");
        beerCaption.append("<div class ='desc'>" + "<p>" + desc + "</p>" + "</div");
        beerCaption.append("<div class ='abv'>" + "<p>" + "ABV: " + abv + "</p>" + "</div");
          if (organic === "N") {
            organic = "No"
          }
          else if (organic === "Y"){
            organic = "Yes"
          }
        beerCaption.append("<div class ='abv'>" + "<p>" + "Organic: " + organic + "</p>" + "</div");

        // building thumbnail
        beerDiv.append(beerImage);
        beerDiv.append(beerCaption);
        $('#display').append(beerDiv);
      }
    });
  }


  $( "#beer_search" ).click(function() {
    event.preventDefault();
    displayBeers();

    });
