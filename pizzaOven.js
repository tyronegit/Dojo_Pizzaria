function pizzaOven( crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log("Pizza 1")
console.log(p1)
console.log("\n")
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log("Pizza 2")
console.log( p2)
console.log("\n")
var p3 = pizzaOven("thin crust", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions", "sausage", "bacon"])
console.log("Pizza 3")
console.log( p3)
console.log("\n")
var p4 = pizzaOven("medium crust", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions", "sausage", "pepperoni", "ham", "bacon", "ground beef"])
console.log("Pizza 4")
console.log( p4)

