const video = document.querySelector("video");

// Autoplay
video.muted = false;
video.autoplay = true;
video.playsInline = true;

video.addEventListener('loadedmetadata', function() {
  this.play();
}, false);

// Restart video when finished
video.addEventListener('ended', function() {  
  this.currentTime = 0;
  this.play();
}, false);

const playBtn = document.getElementById("play-pause-btn"); 

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