// All of the events as object JSON
//TODO: Have this hosted on server and fetch for JSON
const events = [
    {
        title: "Me when the sus",
        description: "idk🥱🥱",
        time: "Tuesday 82nd November, 1634",
        place: "Mars"
    },
    {
        title: "Skytower",
        description: "Testing event",
        time: "3am",
        place: "Victoria Street West, Auckland CBD, Auckland 1010"
    }
];



const eventHtml = document.querySelector("section");
document.addEventListener("DOMContentLoaded", () => {

    // Get all of the events
    events.forEach(event => {

        // Generate the Google maps URL
        const encodedAddress = encodeURIComponent(event.place);
        const mapLink = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

        // Generate the HTML
        const html = `
<div class="event">
	<div class="split">

		<div class="half">
			<h1>${event.title}</h1>
			<p>${event.description}</p>
			<div class="space-100"></div>
			<p id="time"><strong>Time:</strong> ${event.time}</p>
			<p id="address"><strong>Location:</strong> ${event.place}</p>
		</div>

		<div class="half">
			<iframe src="${mapLink}" frameborder="0" scrolling="no"></iframe>
		</div>

	</div>
</div>`

        // Add the HTML to the site
        eventHtml.innerHTML += html;

    });

})