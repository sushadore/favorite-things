$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favorites = ["color", "food", "animal", "season"];

    var favoritesArray = favorites.map(function(favorite) {
      return $("input#" + favorite).val();
    });

    var specificsArray = [];

    specificsArray.push(favoritesArray[1], favoritesArray[0], favoritesArray[2]);
    
    specificsArray.forEach(function(specific) {
      $("ul").append("<li>" + specific.toUpperCase() + "</li>");
    });
  });
});
