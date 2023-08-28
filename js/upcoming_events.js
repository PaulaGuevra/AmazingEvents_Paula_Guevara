const upcomingEvents = [];
for (const upcomingEvent of data.events) {
    const eventDate = (upcomingEvent.date);
    const currentDate = (data.currentDate);

    console.log("Event Date:", eventDate);
    console.log("Current Date:", currentDate);

    if (eventDate >= currentDate) {
        upcomingEvents.push(upcomingEvent);
    }
}

console.log("Upcoming Events:", upcomingEvents);

generateCards(upcomingEvents, "upcomingEvContainer");

