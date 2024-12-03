// dateUtils.js

export function initializeFooterDate() {
  const yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
