const container = document.querySelector('#t1 tbody');
const container1 = document.querySelector('#t2 tbody');
const container2 = document.querySelector('#t3 tbody')

fetch(url)
  .then(response => response.json())
  .then(responseData => {
    const events = responseData.events;
    const highestAssistance = getPercentageOfAssistance(events, 'highest');
    const lowestAssistance = getPercentageOfAssistance(events, 'lowest');
    const highestCapacity = getHighestCapacity(events);
    const categoryStats = getCategoryStats(upcomingEvents)
    const pastCatStats = getPastCategoryStats(pastEvents);
    displayResult(highestAssistance, lowestAssistance, highestCapacity);
    displayCategoryStats(container1,categoryStats);
    displayPastCategoryStats(container2, pastCatStats)

  });

function getPercentageOfAssistance(events, grade) {
  let extremeAssistance = null;
  let extremePercentage = grade === 'highest' ? 0 : Number.POSITIVE_INFINITY;

  events.forEach(event => {
    const assistancePercentage = (event.assistance / event.capacity) * 100;

    if ((grade === 'highest' && assistancePercentage > extremePercentage) ||
        (grade === 'lowest' && assistancePercentage < extremePercentage)) {
      extremeAssistance = event;
      extremePercentage = assistancePercentage;
    }
  });

  return extremeAssistance;
}

function displayResult(highestAssistance, lowestAssistance, highestCapacity) {
  container.innerHTML = `
    <tr>
      <td>${highestAssistance ? highestAssistance.name : ''}</td>
      <td>${lowestAssistance ? lowestAssistance.name : ''}</td>
      <td>${highestCapacity ? highestCapacity.name : ''}</td>
    </tr>
  `;
}

function getHighestCapacity(events){
    let maxCap = 0;
    let highestCapEvent = null;

    events.forEach(event => {
        if(event.capacity > maxCap){
            maxCap = event.capacity;
            highestCapEvent = event
        }
    });
    return highestCapEvent
}

function getUpcomingEvents(){
    return upcomingEvents;
}

function getCategoryStats(upcomingEvents) {
    let categoryStats = {};
  
    upcomingEvents.forEach(event => {
      const { category, price, estimate, capacity } = event;
  
      if (!categoryStats[category]) {
        categoryStats[category] = {
          totalRevenue: 0,
          totalEstimate: 0,
          percentageOfAssistance: 0,
        };
      }
      const revenue = estimate * price;
      categoryStats[category].totalRevenue += revenue;
      categoryStats[category].totalEstimate += estimate;
    
      const percentageOfAssistance = (estimate * 100) / capacity;
      categoryStats[category].percentageOfAssistance += percentageOfAssistance;
    });
    for (const category in categoryStats) {
      const eventsCount = upcomingEvents.filter(event => event.category === category).length;
      categoryStats[category].percentageOfAssistance /= eventsCount;
    }
    return categoryStats;
  }

  function displayCategoryStats(container, categoryStats) {
    container.innerHTML = '';
    
    for (const category in categoryStats) {
      const stats = categoryStats[category];
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${category}</td>
        <td>${stats.totalRevenue}</td>
        <td>${parseFloat(stats.percentageOfAssistance.toFixed(2))}%</td>
        `;
      
      container.appendChild(tr);
    }
  }

  function getPastCategoryStats(pastEvents) {
    let pastCategoryStats = {};
  
    pastEvents.forEach(event => {
      const { category, price, assistance, capacity } = event;
  
      if (!pastCategoryStats[category]) {
        pastCategoryStats[category] = {
          totalRevenue: 0,
          totalAssistance: 0,
          totalCapacity: 0,
        };
      }
      const revenue = price * assistance;
      pastCategoryStats[category].totalRevenue += revenue;
      pastCategoryStats[category].totalAssistance += assistance;
      pastCategoryStats[category].totalCapacity += capacity;
    });
  
    for (const category in pastCategoryStats) {
      const { totalAssistance, totalCapacity } = pastCategoryStats[category];
      pastCategoryStats[category].percentageOfAssistance = (totalAssistance * 100) / totalCapacity;
    }
  
    return pastCategoryStats;
  }
  
  



function displayPastCategoryStats(container, pastCategoryStats) {
    container.innerHTML = '';
    
    for (const category in pastCategoryStats) {
      const stats = pastCategoryStats[category];
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${category}</td>
        <td>${stats.totalRevenue}</td>
        <td>${parseFloat(stats.percentageOfAssistance.toFixed(2))}%</td>
        `;
      
      container.appendChild(tr);
    }
  }