const pastEvents = [];
for (const pastEvent of data.events) {
    const eventDate = (pastEvent.date);
    const currentDate = (data.currentDate);

    console.log("Event Date:", eventDate);
    console.log("Current Date:", currentDate);

    if (eventDate <= currentDate) {
        pastEvents.push(pastEvent);
    }
}

console.log("Past Events:", pastEvents);

generateCards(pastEvents, "pastEvContainer");

