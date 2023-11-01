// Sử dụng JavaScript để nạp header và footer
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
// Scroll Header
window.addEventListener("scroll", function () {
  let header = document.querySelector(".scroll-header");
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
});

// Header toggle
let menuBtn = document.getElementById("MenuBtn");

menuBtn.addEventListener("click", function () {
  document.querySelector("body").classList.add("mobile-nav-active");
});
let closeMenuBtn = document.getElementById("CloseBtn");

closeMenuBtn.addEventListener("click", function () {
  document.querySelector("body").classList.remove("mobile-nav-active");
});

// Typing Effect

// var typed = new Typed('.auto-input', {
//   strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 2000,
//   loop: true,
// });
