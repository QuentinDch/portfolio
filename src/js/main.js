// main.js

// Import des styles globaux
import "../sass/main.scss";

// Import des composants
import { initializeFooterDate } from "./components/dateUtils.js";
import { clipboard } from "./components/clipboard.js";
import { annoucementBar } from "./components/annoucementBar.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");

  initializeFooterDate();
  clipboard();
  annoucementBar();
});
