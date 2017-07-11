$.get("/api/userdata", function(response) {
  var profileImage = $("<img  width='200' height='200' class='img-responsive img-circle'>");
  var blurbCaption = $("<div>")
  var profileDiv = $("<div productHolder thumbnail hero-feature>")
  profileImage.attr("src", response[0].image);
  profileImage.attr("alt", response[0].username);
  var name = response[0].username;
  blurbCaption.append("<h3>" + name + "</h3>");
  blurbCaption.append(profileImage);
  $('.displayDiv').append(blurbCaption);

});
