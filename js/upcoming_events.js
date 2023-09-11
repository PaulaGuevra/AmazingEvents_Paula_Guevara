let upcomingEvents = [];

async function fetchUpcomingEvents(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    const data = responseData.events
    const currentDate = responseData.currentDate;
    upcomingEvents = data.filter((event) => event.date >= currentDate)
    generateCards(upcomingEvents, cardContainer)

}




fetchUpcomingEvents(url);

document.addEventListener('change', e => {
    if (e.target.classList.contains('categorychecks')) {
        searchAndFilter(upcomingEvents)

    }
})

buscador.addEventListener('input', () => {
    searchAndFilter(upcomingEvents)
})