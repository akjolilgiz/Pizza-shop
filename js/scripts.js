// // Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var name = $("input#client-name").val();
    var size = $("#sizePicked").val();
    var toppings = [];

 $("input:checkbox[name=toppingsPicked]:checked").each(function(){
  toppings.push($(this).val());
  });
    var newPizza = new Pizza (size, toppings);
    alert(newPizza.toppings);


    $("#name").text("name: " + name);
    $("#size").text("size: " + size);

    $(".output").append("<li>" + newPizza.toppings + "</li>");




});
});
