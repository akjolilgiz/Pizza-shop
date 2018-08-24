// Business logic
var Pizza 



//User Interface
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var clientName = $("input#client-name").val();
    var sizeOfPizza = $("#sizePicked").val();

    $("#name").text("name:  " + clientName);
    $("#size").text("size:  " + sizeOfPizza);


  });

});
