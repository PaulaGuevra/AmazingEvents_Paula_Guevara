const events = data.events
const categories = events.map(event => event.category)
const reducedCategories = categories.reduce((accumulator, category) => {
    if (!accumulator.includes(category)) {
        accumulator.push(category);
        return accumulator;
    } else {

        return accumulator;
    }
}, []);


let formContainer = document.getElementById("formContainer");
let htmlCheckbox = "";
reducedCategories.forEach(item => {
    htmlCheckbox += `
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input categorychecks" type="checkbox" id="${item}" value="${item}">
            <label class="form-check-label" for="${item}">
                ${item}
            </label>
        </div>
    </div>`;
    formContainer.innerHTML = htmlCheckbox;
});

function searchAndFilter(array) {
    let search = buscador.value.toLowerCase();
    let filteredEvent = array.filter(event => event.name.toLowerCase().includes(search));
    
    let categoryCheck = document.querySelectorAll('.categorychecks')
    let checkedCategories = Array.from(categoryCheck).filter((input) => input.checked).map(input => input.value)
    if (checkedCategories.length > 0) {
        filteredEvent = filteredEvent.filter(event => checkedCategories.includes(event.category));

    }
    if (filteredEvent.length === 0) {
        cardContainer.innerHTML = `<div><p class="nomatch">No matching events found.</p></div>`;
    } else {
        generateCards(filteredEvent, cardContainer);
    }
}














