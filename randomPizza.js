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


function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "medium crust"];
    var sauceTypes = ["traditional", "marinara"];
    var cheesesOptions = [["mozzarella"], ["mozzarella", "feta"]];
    var toppingsOptions = [
        ["pepperoni", "sausage"],
        ["mushrooms", "olives", "onions"],
        ["mushrooms", "olives", "onions", "sausage", "bacon"],
        ["mushrooms", "olives", "onions", "sausage", "pepperoni", "ham", "bacon", "ground beef"]
    ];

    var crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var cheeses = cheesesOptions[Math.floor(Math.random() * cheesesOptions.length)];
    var toppings = toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)];

    return pizzaOven(crustType, sauceType, cheeses, toppings); // this represents the various pizzaOven types
}

// Example usage: //These randomPizzas change through Math.floor(Math.random() * the variations in lines 38-41 of the code 
var randomPizza1 = randomPizza()
console.log("\n Complete random Pizza selections\n")
console.log("Random Pizza 1");
console.log(randomPizza1);
console.log("\n");

var randomPizza2 = randomPizza();
console.log("Random Pizza 2");
console.log(randomPizza2);
console.log("\n");

var randomPizza3 = randomPizza();
console.log("Random Pizza 3");
console.log(randomPizza3);
console.log("\n");

var randomPizza4 = randomPizza();
console.log("Random Pizza 4");
console.log(randomPizza4);
console.log("\n");

