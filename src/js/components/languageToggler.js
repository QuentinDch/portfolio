export function languageToggler() {
  const buttons = document.querySelectorAll(".lng-wrapper__button");
  const translatableElements = document.querySelectorAll(
    "[data-lang-en], [data-lang-fr]"
  );

  // Initialiser la langue par défaut (ici anglais)
  const currentLang = document.documentElement.lang || "en";
  updateLanguage(currentLang);

  // Ajouter un événement de clic sur chaque bouton
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selectedLang = event.currentTarget.dataset.lang;

      // Mettre à jour la langue et les attributs de l'interface
      updateLanguage(selectedLang);

      // Mettre à jour l'attribut lang du document
      document.documentElement.lang = selectedLang;

      // Gérer l'accessibilité et la classe active
      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      event.currentTarget.classList.add("active");
      event.currentTarget.setAttribute("aria-pressed", "true");
    });
  });

  // Fonction pour mettre à jour la langue
  function updateLanguage(language) {
    translatableElements.forEach((element) => {
      const translation =
        language === "fr" ? element.dataset.langFr : element.dataset.langEn;
      element.textContent = translation || element.textContent; // Gérer le cas où il n'y a pas de traduction disponible
    });
  }
}
