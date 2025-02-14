// menuToggler.js

export function initHamburgerButton() {
  const togglerButton = document.querySelector(".navbar__toggler");
  const navigation = document.querySelector(".navbar__menu");
  const navLinks = document.querySelectorAll(".navbar__menu a");

  togglerButton.addEventListener("click", () => {
    const expanded = togglerButton.getAttribute("aria-expanded") === "true";
    togglerButton.setAttribute("aria-expanded", !expanded);
    togglerButton.classList.toggle("active", !expanded);
    navigation.classList.toggle("active", !expanded);

    if (navigation.classList.contains("active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId.startsWith("#")) {
        event.preventDefault();

        togglerButton.classList.remove("active");
        navigation.classList.remove("active");

        document.body.classList.remove("no-scroll");

        setTimeout(() => {
          document
            .querySelector(targetId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  });
}
