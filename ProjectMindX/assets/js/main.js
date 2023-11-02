// fetch("header.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("header").innerHTML = data;
//   });

// fetch("footer.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("footer").innerHTML = data;
//   });
// Scroll Header
// index.html

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

// Typing Effect

// var typed = new Typed('.auto-input', {
//   strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 2000,
//   loop: true,
// });
