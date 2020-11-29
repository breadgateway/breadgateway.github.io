"use strict";
//i needd to code something :(
var selectedBreads = [];
var correctBreads = ["White", "Bun", "Pizza", 'Wholemeal', "Bagel", "Sourdough", "Brioche", "Cake", "Burger", "Baguette", "Purple", "Sandwich", "Fairy", "Ultra"];
var breadDropdown = document.getElementById("BreadSelect");
var selectedBreadsList = document.getElementById("SelectedBreads");
function AddBread() {
    // console.log(;
    selectedBreads.push(breadDropdown.value);
    UpdateCards();
}
function RemoveBread() {
    selectedBreads.pop();
    UpdateCards();
}
function UpdateCards() {
    selectedBreadsList.textContent = '';
    if (selectedBreads.length == 0) {
        var object = document.createElement("i");
        object.innerHTML = "no breads selected";
        selectedBreadsList.appendChild(object);
    }
    else {
        for (var i = 0; i < selectedBreads.length; i++) {
            var bread = selectedBreads[i];
            var object = document.createElement("li");
            object.innerHTML = bread;
            selectedBreadsList.appendChild(object);
        }
    }
}
