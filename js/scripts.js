
function Pizza(size, toppings, quantity){
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.price = function(){
  var price = 0 + (this.toppings + 5);
  if(this.size === "Small"){
   return price + 8 * this.quantity;
  } else if(this.size === "Medium" ){
   return price + 10 * this.quantity;
  } else if(this.size === "Large"){
   return price + 12 * this.quantity;
  }
};

$(document).ready(function() {
    $("form#order").submit(function(event) {
        event.preventDefault();
        var size = $("input#size").val();
        var toppings = $("input#toppings").val();
        var quantity = $("input#quantity").val();
        var newPizza = new Pizza(size, toppings, quantity);
        $(".size").text(newPizza.size);
        $(".toppings").text(toppings);
        $(".quantity").text(newPizza.quantity);
        $(".price").text(newPizza.price());;
    });
});
