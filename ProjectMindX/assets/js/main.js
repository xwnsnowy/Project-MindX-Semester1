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
document.addEventListener("DOMContentLoaded", function () {
  const h1HomeGetStarted = document.querySelector(
    "#home .container-home .home-get-started h1"
  );
  h1HomeGetStarted.style.opacity = 1;
  h1HomeGetStarted.style.transform = "translateY(0)";

  const spanHomeGetStarted = document.querySelector(
    "#home .container-home .home-get-started span"
  );
  spanHomeGetStarted.style.opacity = 1;
  spanHomeGetStarted.style.transform = "translateY(0)";

  const getStartedHome = document.querySelector(".get-started-home");
  getStartedHome.style.opacity = 1;
  getStartedHome.style.transform = "translateY(0)";

  const imgHome = document.querySelector(".home-img");
  imgHome.style.opacity = 1;
  imgHome.style.transform = "translateY(0)";
});

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
