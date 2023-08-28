let formContainer = document.getElementById("formContainer");


const categories = new Set();

for (const category of data.events) {
    if (!categories.has(category.category)) {
        categories.add(category.category);

        let eventCategory = `<div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="category">
                <label class="form-check-label" for="category">
                    ${category.category}
                </label>
            </div>
        </div>`;
        formContainer.innerHTML += eventCategory;
    }
}

