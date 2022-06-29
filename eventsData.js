//! This is not the best way to do this, however because I'm not using nodeJS I think that its ok. When using node JS I would do in JSON, MqSQL, MD, or something else

// All of the events
const eventData = [

    {
        // Event details
        "title": "Great Wall of China",
        "information": "Ancient world wonder that winds for more than 5,500 miles across China, with towers & walkways.",
        "location": "Great Wall of China",
        "price": "600",
        "address": "Huairou District, China, 101406"
    },
    {
        // Event details
        "title": "Example",
        "information": "Example description filled with information",
        "location": "Long Bay College",
        "price": "$999.99",
        "address": "30 Ashley Avenue, Long Bay, Auckland 0630"
    }

];




// Add the events to the DOM
eventData.forEach(eventInfo => {
    
    // Get the Google Maps Link
    //TODO: Do a better way to make url encoded
    const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(eventInfo["address"])}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    // Make the HTML
    const eventsWrapper = document.querySelector(".events-wrapper");
    const eventHtml = `
    <div class="event">
    <div class="split">
        <div class="half">
            <h1>${eventInfo["title"]}</h1>
            <p><span class="info">Description: </span>${eventInfo["information"]}</p>
            <div class="space-50"></div>
            <p><span class="info">Location: </span> ${eventInfo["location"]}</p>
            <p><span class="info">Entry Price: </span> $${eventInfo["price"]}</p>
        </div>
        <div class="half">
            <iframe src="${googleMapsUrl}" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
</div>
    `

    // Add it to the DOM
    eventsWrapper.innerHTML += eventHtml;

});