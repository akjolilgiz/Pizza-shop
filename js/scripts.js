// // Business logic
// var Pizza = {size, toppings};
//


//User Interface
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var clientName = $("input#client-name").val();
    var sizeOfPizza = $("#sizePicked").val();
    $("input:checkbox[name=toppingsPicked]:checked").each(function(){
      var toppingsOnPizza = $(this).val();
    $("#name").text("name:  " + clientName);
    $("#size").text("size:  " + sizeOfPizza);
    $("#topping").append(toppingsOnPizza + "<br>");
  });


  });

});
