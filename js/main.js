let eventContainer = document.getElementById("eventContainer")

function generateCards(array, cardContainer) {
  for (const event of array) {
    let card = `<div class="col-12 col-sm-6 col-md-4 col-xl-3 mt-4">
    <div class="card h-100">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title text-center">${event.name}</h5>
            <p class="card-text text-center">${event.description}</p>
            <p class="card-text text-center"><small class="text-body-secondary">Date: ${event.date}</small></p>
        </div>
        <div class="crd_foot card-footer">
            <span class="card-text">$${event.price}</span>
            <a class="btn btn-dark" href="./details.html" role="button">Details</a>
        </div>
    </div>
</div>`;
    document.getElementById(cardContainer).innerHTML += card;
  }
}
generateCards(data.events,"eventContainer");

