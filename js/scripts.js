// // Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
var price = 10

 Pizza.prototype.sizeCalculation = function(){
  if (this.size === "Small") {
    return price+=0
  } else if (this.size === "Medium") {
      return price+=2
    } else if (this.size === "Large") {
        return price+=4
      } else {price += 6}
}




$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var Name = $("input#client-name").val();
    var Size = $("#sizePicked").val();
    var Toppings = [];

 $("input:checkbox[name=toppingsPicked]:checked").each(function(){ Toppings.push($(this).val());
  });
    var newPizza = new Pizza (Size, Toppings);



    $("#name").text("name: " + Name);
    $("#size").text("size: " + Size);
    $("#toppings").text("toppings: " + Toppings)

    $("#price").text("Your total is: " + newPizza.sizeCalculation() + "$");



});
});
