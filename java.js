// Open dropdown menu (hamburger)
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0)";
}

// Close dropdown (cancel button)
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect
const typewriterText = "Frontend Developer";
const speed = 100;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".typewriter-text");

  function typeWriter() {
    if (target && charIndex < typewriterText.length) {
      target.innerHTML += typewriterText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
