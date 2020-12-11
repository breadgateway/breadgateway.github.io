"use strict";
//The solution is litterally here but whatever
var selectedBreads = [];
var correctBreads = ["White", "Bun", "Pizza", 'Wholemeal', "Bagel", "Sourdough", "Brioche", "Cake", "Burger", "Baguette", "Purple", "Sandwich", "Fairy", "Ultra"];
var breadDropdown = document.getElementById("BreadSelect");
var selectedBreadsList = document.getElementById("SelectedBreads");
var feedbackText = document.getElementById("feedback");
function AddBread() {
    // console.log(;
    selectedBreads.push(breadDropdown.value);
    UpdateCards();
}
function RemoveBread() {
    selectedBreads.pop();
    UpdateCards();
}
function CheckCombination() {
    if (selectedBreads.length === correctBreads.length && selectedBreads.every(function (value, index) { return value === correctBreads[index]; })) {
        feedbackText.innerHTML = "Correct Combination! Gates Opening...";
        $("#feedback").fadeIn(500).delay(3000).fadeOut(500);
        setTimeout(function () {
            //@ts-expect-error
            document.location = "/page2.html";
        }, 6000);
    }
    else {
        if (correctBreads.length > selectedBreads.length) {
            if (selectedBreads.length == 0) {
                feedbackText.innerHTML = "Its a combination of breads, not just one!";
            }
            else {
                feedbackText.innerHTML = "Too few breads. Keep Trying!";
            }
        }
        else if (correctBreads.length < selectedBreads.length) {
            feedbackText.innerHTML = "Too many breads. Keep trying!";
        }
        else {
            feedbackText.innerHTML = "Wrong combination. Keep Trying!";
        }
        $("#feedback").fadeIn(500).delay(3000).fadeOut(500);
    }
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
