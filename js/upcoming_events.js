const upcomingEvents = [];
for (const upcomingEvent of data.events) {
    const eventDate = (upcomingEvent.date);
    const currentDate = (data.currentDate);

    if (eventDate >= currentDate) {
        upcomingEvents.push(upcomingEvent);
    }
}


generateCards(upcomingEvents, cardContainer);

document.addEventListener('change', e => {
    if (e.target.classList.contains('categorychecks')) {
        searchAndFilter(upcomingEvents)

    }
})

buscador.addEventListener('input', () => {
    searchAndFilter(upcomingEvents)
})