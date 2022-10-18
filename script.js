// Audio player
const audioPlayerButton = document.querySelector(".audio-media-control");
const audio = document.querySelector("audio");

audioPlayerButton.addEventListener("click", () => {

    // Get the current state of the player
    const state = audioPlayerButton.getAttribute("state");
    
    // Check for what the state is
    if (state === "paused") {

        // Change the state
        audioPlayerButton.setAttribute("state", "playing");
        audioPlayerButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        // Play the audio
        audio.play();

    } else if (state === "playing") {

        // Change the state
        audioPlayerButton.setAttribute("state", "paused");
        audioPlayerButton.innerHTML = `<i class="fa-solid fa-play"></i>`;

        // Pause the audio
        audio.pause();
    }

});