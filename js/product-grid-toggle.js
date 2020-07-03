'use strict';

function showCoffee() {
    
    var coffeeCheckbox = document.getElementById("coffeeCheckbox");
    
    var coffeeListing = document.getElementById("coffee-listing");
    
    var coffeeListing2 = document.getElementById("coffee-listing-2");
    
    if (coffeeCheckbox.checked == true) {
        coffeeListing.style.display = "flex";
    } else {
        coffeeListing.style.display = "none";
    }
    
    if (coffeeCheckbox.checked == true) {
        coffeeListing2.style.display = "flex";
    } else {
        coffeeListing2.style.display = "none";
    }
}