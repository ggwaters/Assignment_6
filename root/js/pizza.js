function pizzaForm() {
    
    var pizzaSubmit,
        addItUpDough = document.getElementById("AddItUpDough"),
        cheeseJump = document.getElementById("cheese"),
        addItUpCheese = document.getElementById("AddItUpCheese"),
        sauceJump = document.getElementById("sauce"),
        addItUpSauce = document.getElementById("AddItUpSauce"),
        topJump = document.getElementById("toppings"),
        addItUpTop = document.getElementById("AddItUpTop"),
        ovenToss = document.getElementById("OvenToss"),
        billingJump = document.getElementById("billing");
        
    
    // addItUp buttons
    addItUpDough.addEventListener("click", function (event) {
        event.preventDefault();
        cheeseJump.removeAttribute("class", "hidden");
    }, false);
    
    addItUpCheese.addEventListener("click", function (event) {
        event.preventDefault();
        sauceJump.removeAttribute("class", "hidden");
    }, false);
    
    addItUpSauce.addEventListener("click", function (event) {
        event.preventDefault();
        topJump.removeAttribute("class", "hidden");
    }, false);
    
    addItUpTop.addEventListener("click", function (event) {
        event.preventDefault();
        ovenToss.removeAttribute("class", "hidden");
    }, false);
    
    ovenToss.addEventListener("click", function (event) {
        event.preventDefault();
        billingJump.removeAttribute("class", "hidden");
        
    }, false);
    
    function pizza(event) {
        event.preventDefault();
    }
    
    var HandTossed = {
        small: "Small, 9.99",
        medium: "Medium, 12.99",
        large: "Large, 14.99"
    };
    var ThinCrust = {
        medium: "Medium, 11.99",
        large: "Large, 13.99"
    };
    var NewYork = {
        large: "Large, 16.99",
        exLarge: "Extra-Large, $19.99"
    };
    var GlutenFree = {
        small: "Small, $10.00"
    };
    var Cheese = {
        light: "Light, .0",
        normal: "Normal, .0",
        extra: "2.99",
        double: "Double, 3.99"
    };
    var Sauce = {
        regular: "Regular, .0",
        hearty: "Hearty, .99",
        bbq: "BBQ Sauce, 1.99"
    };
    var Toppings = {
        pepperoni: "Pepperoni, .99",
        bacon: "Bacon, .99",
        sausage: "Sausage, .99",
        ham: "Ham, .99",
        peppers: "Bell Peppers, .99",
        salami: "Salami, .99",
        olives: "Olives, .99",
        jalapenos: "Jalapenos, .99",
        mushrooms: "Mushrooms, .99",
        pineapple: "Pineapple, .99",
        onion: "Onions, .99"
    };
    
        
//    pizzaSubmit.addEventListener("click", pizza, false);

}

document.addEventListener("DOMContentLoaded", pizzaForm, false);

    