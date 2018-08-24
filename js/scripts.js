


$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var clientName = $("input#client-name").val();

    $(".receipt").text(clientName)


  });

});
