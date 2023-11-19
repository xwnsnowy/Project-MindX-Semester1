// scroll-header.js
window.addEventListener("scroll", function () {
  let header = document.querySelector(".scroll-header");
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
});
