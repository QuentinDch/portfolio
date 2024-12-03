// dateUtils.js

export function initializeFooterDate() {
  const yearElement = document.querySelector("#year small");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
