const video = document.querySelector("video");
const playBtn = document.getElementById("play-pause-btn");

// Autoplay
video.autoplay = true;   

// Play/Pause Toggle
playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.innerText = "Pause";
  } else {    
    video.pause();
    playBtn.innerText = "Play";  
  }
});