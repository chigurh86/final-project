function displayBeers(){
  $.get("/api/search", function(response) {
    $('#displayArea').empty();
    for (var i = 0; i < 3; i++) {
      console.log("the name" + response.data[0].name)
      var beerDiv = $("<div class ='productHolder thumbnail hero-feature beerDiv'>");
      var beerCaption = $("<div>");
      var beerImage = $("<img>");
      var drinkBtn = $("<button class='btn-success'>"+"Drink it"+"</button>");
      var passBtn = $("<button class='btn-default'>"+"Eww Gross"+"</button>");
      drinkBtn.attr("data-button", response.data[0].name);
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
      beerDiv.append(drinkBtn);
      beerDiv.append(passBtn);
      $('#displayArea').append(beerDiv);
    }
  });
  }

    displayBeers();
