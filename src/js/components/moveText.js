// moveText.js

const profile = document.querySelector(".navbar__profile__images");
const profileTexts = document.querySelector(".navbar__profile__texts");

function moveText(event) {
  profileTexts.style.clipPath = "inset(0 0 0 0)";
  profileTexts.style.opacity = "1";
  profileTexts.style.transform = `translate(${event.clientX - 225}px, ${
    event.clientY - 225
  }px)`;
}

function hideText() {
  profileTexts.style.clipPath = "inset(0 100% 0 100%)";
  profileTexts.style.opacity = "0";
}

profile.addEventListener("mousemove", moveText);
profile.addEventListener("mouseleave", hideText);
