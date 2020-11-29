//i needd to code something :(

let selectedBreads: string[] = [];
let correctBreads: string[] = ["White", "Bun", "Pizza", 'Wholemeal', "Bagel", "Sourdough", "Brioche", "Cake", "Burger", "Baguette", "Purple", "Sandwich", "Fairy", "Ultra"];

let breadDropdown: HTMLSelectElement = document.getElementById("BreadSelect") as HTMLSelectElement;
let selectedBreadsList: HTMLOListElement = document.getElementById("SelectedBreads") as HTMLOListElement;

function AddBread() {
    // console.log(;
    selectedBreads.push(breadDropdown.value);

    UpdateCards()
}

function RemoveBread() {
    selectedBreads.pop();

    UpdateCards()
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