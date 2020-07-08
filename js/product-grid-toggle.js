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

function showTea() {
    
    var teaCheckbox = document.getElementById("teaCheckbox");
    
    var teaListing = document.getElementById("tea-listing");
    
    
    if (teaCheckbox.checked == true) {
        teaListing.style.display = "flex";
    } else {
        teaListing.style.display = "none";
    }
}

function showSweets() {
    
    var sweetsCheckbox = document.getElementById("sweetsCheckbox");
    
    var sweetsListing = document.getElementById("sweets-listing-1");
    
    
    if (sweetsCheckbox.checked == true) {
        sweetsListing.style.display = "flex";
    } else {
        sweetsListing.style.display = "none";
    }
}

function showGifts() {
    
    var giftsCheckbox = document.getElementById("giftsCheckbox");
    
    var giftsListing = document.getElementById("gifts-listing");
    
    var giftsListing2 = document.getElementById("gifts-listing-2");
    
    
    if (giftsCheckbox.checked == true) {
        giftsListing.style.display = "flex";
    } else {
        giftsListing.style.display = "none";
    }
    
    if (giftsCheckbox.checked == true) {
        giftsListing2.style.display = "flex";
    } else {
        giftsListing2.style.display = "none";
    }
}