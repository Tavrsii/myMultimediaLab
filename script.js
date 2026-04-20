const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const muteBtn = document.getElementById("muteBtn");

const volumeSlider = document.getElementById("volumeSlider");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    playBtn.textContent = "Play";
  }
});

// Skip Backward
backBtn.addEventListener("click", () => {
  audio.currentTime -= 10;
});

// Skip Forward
forwardBtn.addEventListener("click", () => {
  audio.currentTime += 10;
});

// Mute / Unmute
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "Unmute" : "Mute";
});

// Volume Control
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Format Time
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Update Current Time
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Set Duration
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

// Keyboard Controls (Creative Feature)
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Space":
      e.preventDefault();
      playBtn.click();
      break;
    case "ArrowRight":
      audio.currentTime += 5;
      break;
    case "ArrowLeft":
      audio.currentTime -= 5;
      break;
    case "KeyM":
      muteBtn.click();
      break;
  }
});