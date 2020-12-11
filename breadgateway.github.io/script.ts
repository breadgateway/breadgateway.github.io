//The solution is litterally here but whatever

let selectedBreads: string[] = [];
let correctBreads: string[] = ["White", "Bun", "Pizza", 'Wholemeal', "Bagel", "Sourdough", "Brioche", "Cake", "Burger", "Baguette", "Purple", "Sandwich", "Fairy", "Ultra"];

let breadDropdown: HTMLSelectElement = document.getElementById("BreadSelect") as HTMLSelectElement;
let selectedBreadsList: HTMLOListElement = document.getElementById("SelectedBreads") as HTMLOListElement;

let feedbackText: HTMLParagraphElement = document.getElementById("feedback") as HTMLParagraphElement;

function AddBread() {
    // console.log(;
    selectedBreads.push(breadDropdown.value);

    UpdateCards()
}

function RemoveBread() {
    selectedBreads.pop();

    UpdateCards()
}

function CheckCombination() {

    if (selectedBreads.length === correctBreads.length && selectedBreads.every(function (value, index) { return value === correctBreads[index] })) {
        feedbackText.innerHTML = "Correct Combination! Gates Opening...";
        $("#feedback").fadeIn(500).delay(3000).fadeOut(500);

        setTimeout(
            function () {
                //@ts-expect-error
                document.location = "/page2.html";
            }
            , 6000);

    } else {

        if (correctBreads.length > selectedBreads.length) {

            if (selectedBreads.length == 0) {
                feedbackText.innerHTML = "Its a combination of breads, not just one!";
            } else {
                feedbackText.innerHTML = "Too few breads. Keep Trying!";
            }

        } else if (correctBreads.length < selectedBreads.length) {

            feedbackText.innerHTML = "Too many breads. Keep trying!";
        } else {

            feedbackText.innerHTML = "Wrong combination. Keep Trying!";
        }

        $("#feedback").fadeIn(500).delay(3000).fadeOut(500);
    }
}

function UpdateCards() {

    selectedBreadsList.textContent = '';

    if (selectedBreads.length == 0) {
        let object: HTMLElement = document.createElement("i");
        object.innerHTML = "no breads selected";

        selectedBreadsList.appendChild(object);

    } else {
        for (let i = 0; i < selectedBreads.length; i++) {
            const bread = selectedBreads[i];

            let object: HTMLLIElement = document.createElement("li");
            object.innerHTML = bread;

            selectedBreadsList.appendChild(object);
        }
    }
}