$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favorites = ["color", "food", "animal", "season"];

    favorites.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
    })

    var favoritesArray = [];

    favoritesArray.push(favorites[1], favorites[0], favorites[2]);

    favoritesArray.forEach(function(favorite) {
      $("ul").append("<li>" + favorite.toUpperCase() + "</li>");
    });
  });
});
