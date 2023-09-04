const pastEvents = [];
for (const pastEvent of data.events) {
    const eventDate = (pastEvent.date);
    const currentDate = (data.currentDate);

    if (eventDate <= currentDate) {
        pastEvents.push(pastEvent);
    }
}


generateCards(pastEvents, cardContainer);


document.addEventListener('change', e => {
    if (e.target.classList.contains('categorychecks')) {
        searchAndFilter(pastEvents)

    }
})

buscador.addEventListener('input', () => {
    searchAndFilter(pastEvents)
})