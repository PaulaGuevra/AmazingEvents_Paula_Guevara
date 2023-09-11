const pastEvents = [];

fetch(url)
.then(response => response.json())
.then((responseData =>{
    const data = responseData.events
    const currentDate = responseData.currentDate;

    for (const pastEvent of data) {
    const eventDate = (pastEvent.date);

    if (eventDate <= currentDate) {
        pastEvents.push(pastEvent);
    }
    console.log(pastEvents)
}
generateCards(pastEvents, cardContainer);

}))



document.addEventListener('change', e => {
    if (e.target.classList.contains('categorychecks')) {
        searchAndFilter(pastEvents)

    }
})

buscador.addEventListener('input', () => {
    searchAndFilter(pastEvents)
})


