// // Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


 Pizza.prototype.sizeCalculation = function() {
  if (this.size === "Small") {
    return this.price=12;
  } else if (this.size === "Medium") {
    return this.price=14;
  } else if (this.size === "Large") {
    return this.price=16;
  } else if (this.size === "ExtraLarge") {
    return this.price=18}
}
  Pizza.prototype.totalPrice = function() {
    if (this.toppings.length === 0) {
      return this.price+=0
    } else if (this.toppings.length === 1){
      return this.price +=2;
      }else if (this.toppings.length === 2) {
      return this.price+=4;
        } else if (this.toppings.length === 3) {
      return this.price+=6;
          } else if (this.toppings.length === 4) {
      return this.price+=8;
            } else if (this.toppings.length === 5) {
      return this.price+=10;
    }
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
    $(".receipt").show();
    $("#name").text(Name);
    $("#size").text(Size);
    $("#toppings").text(Toppings)

    $("#price").text(newPizza.sizeCalculation() + "$");
    $("#total").text(newPizza.totalPrice() + "$");



});
});
