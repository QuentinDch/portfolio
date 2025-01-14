// menuToggler.js

export function initHamburgerButton() {
  const togglerButton = document.querySelector(".navbar__toggler");
  const navigation = document.querySelector(".navbar__menu");
  const navLinks = document.querySelectorAll(".navbar__menu a");

  togglerButton.addEventListener("click", () => {
    togglerButton.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      togglerButton.classList.remove("active");
      navigation.classList.remove("active");

      setTimeout(() => {
        const targetId = link.getAttribute("href");
        document
          .querySelector(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    });
  });
}
