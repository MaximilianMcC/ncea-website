// Audio player
const audioPlayer = document.querySelector(".preview-audio");
const audioPlayPause = document.querySelector(".audio-play-pause");
const audioPlayVolume = document.querySelector(".audio-volume");

// Play or pause the audio preview
//TODO: Add icons instead of text
audioPlayPause.addEventListener("click", () => {

    // Check for if the music is playing or paused
    const status = audioPlayPause.getAttribute("currentState");

    // Swap the positions and play/pause
    if (status === "pause") {
        audioPlayPause.setAttribute("currentState", "play");
        audioPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audioPlayer.play();
    }
    else if (status === "play") {
        audioPlayPause.setAttribute("currentState", "pause");
        audioPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        audioPlayer.pause();
    }

});

// Change the audio volume
audioPlayVolume.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value;
});



// Notification manager
const notificationContainer = document.querySelector(".notification-centre");

function sendNotification(level, title, content) {
    
    // Make the notification
    const notificationHtml = `
    <div class="notification" level="${level}">
        <button id="notificationCloseButton"><i class="fa-solid fa-circle-xmark"></i></button>
        <h1>${title}</h1>
        <p>${content}</p>
    </div>
    `

    // Add it to the DOM
    notificationContainer.innerHTML = notificationHtml;

    // Get newly created DOM elements
    const notification = document.querySelector(".notification");
    const notificationCloseButton = document.querySelector("#notificationCloseButton");

    // Add the close event listener
    notificationCloseButton.addEventListener("click", () => {
        notification.remove();
    })
    
}