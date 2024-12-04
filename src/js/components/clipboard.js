// clipboard.js

export function clipboard() {
  const copyEmail = document.getElementById("copyButton");
  if (copyEmail) {
    copyEmail.addEventListener("click", () => {
      const email = document.querySelector(".email-link").textContent;

      navigator.clipboard
        .writeText(email)
        .then(() => {
          copyEmail.classList.add("clicked");
        })
        .catch((err) => {
          console.error("Error copying to clipboard:", err);
        });
    });

    copyEmail.addEventListener("mouseleave", () => {
      copyEmail.classList.remove("clicked");
    });
  }
}
