$(document).ready(function() {
  $(formOne).submit(function(event) {
    event.preventDefault();

    const suits = ["spades", "clubs", "diamonds", "hearts"];
    const cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]

    $("ul").empty();

    suits.forEach(function(suit) {
      cards.forEach(function(card) {
        $("ul").append("<li>" + card + " of " + suit + "</li>");
      });
    });
  });
});