const queryString = location.search

const params = new URLSearchParams(queryString)

const _id = params.get("_id")

 const eventDetails = data.events.find(event => event._id == _id)

const div = document.querySelector('#details_div');
div.innerHTML = `<div class="row g-12">
    <div class="col-md-6">
       <img src="${eventDetails.image}" class="img-fluid rounded-start det_img" alt="${eventDetails.name}">
    </div>
    <div class="col-md-6">
        <div class="card-body">
            <h5 class="card-title">${eventDetails.name}</h5>
            <p class="card-text">${eventDetails.description}</p>
            <p class="card-text">Capacity: ${eventDetails.capacity}</p>
            <p class="card-text">${eventDetails.assistance ? `<p>Assistance: ${eventDetails.assistance}</p>` : `<p d-none></p>`}</p>
            <p class="card-text">${eventDetails.estimate ? `<p>Estimate: ${eventDetails.estimate}</p>` : `<p d-none></p>`}</p>
            <p class="card-text ">Date: ${eventDetails.date}</p>
            <p class="card-text ">Place: ${eventDetails.place}</p>
            <p class="card-text price ">$ ${eventDetails.price}</p>
        </div>
        <div class="card-footer">
             <a class="btn btn-dark" href="./index.html" role="button">Go Back</a>
         </div>
    </div>
</div>`