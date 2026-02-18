// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 700);

// Music control
let musicPlaying = false;
const music = new Audio("assets/music/song.mp3");
music.loop = true;
music.volume = 0.5;

function toggleMusic() {
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  } else {
    music.pause();
    musicPlaying = false;
  }
}
