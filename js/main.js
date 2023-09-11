let events =[];
let cardContainer = document.getElementById("eventContainer")

function generateCards(array,cardContainer){
  let html = "";
  array.forEach(event => {
    html += `<div class="col-12 col-sm-6 col-md-4 col-xl-3 mt-4">
    <div class="card h-100">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title text-center">${event.name}</h5>
            <p class="card-text text-center">${event.description}</p>
            <p class="card-text text-center"><small class="text-body-secondary">Date: ${event.date}</small></p>
        </div>
        <div class="crd_foot card-footer">
            <span class="card-text">$${event.price}</span>
            <a class="btn btn-dark" href="./details.html?_id=${event._id}" role="button">Details</a>
        </div>
    </div>
</div>`;
  })
  cardContainer.innerHTML = html
}

const url = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(url)
.then(response=> response.json())
.then(responseData => {
  events = responseData.events
  generateCards(responseData.events,cardContainer)
})  





document.addEventListener('change', e => {
  if (e.target.classList.contains('categorychecks')) {
      searchAndFilter(events)

  }
})

let buscador = document.querySelector('input[name=search]');
buscador.addEventListener('input', () => {
    searchAndFilter(events)
})