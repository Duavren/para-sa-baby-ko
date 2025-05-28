// Welcome alerts
alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

// Typewriter effect
const text = "Hey bb, I’m so proud of you for everything you’re doing with your thesis.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Music control
function playMusic() {
  const audio = document.getElementById("bg-music");

  audio.play()
    .then(() => {
      console.log("Music started!");
    })
    .catch(err => {
      alert("⚠️ Could not play the music. Check the file path or browser permissions.");
      console.error("Music play error:", err);
    });
}


// Hug and confetti
function sendHug() {
  alert("Sending virtual hug! 🤗");
  confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);