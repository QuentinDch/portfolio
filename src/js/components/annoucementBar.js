// annoucementBar.js

export function annoucementBar() {
  const annoucementBarElement = document.querySelector(".announcement-bar");
  let lastScrollTop = document.documentElement.scrollTop;

  document.addEventListener("scroll", handleAnnoucementSwipe);

  function handleAnnoucementSwipe() {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      annoucementBarElement.style.translate = `0 -${annoucementBarElement.scrollHeight}px`;
      annoucementBarElement.style.opacity = 0;
    } else {
      annoucementBarElement.style.translate = `0 0px`;
      annoucementBarElement.style.opacity = 1;
    }
    lastScrollTop = currentScroll;
  }
}
