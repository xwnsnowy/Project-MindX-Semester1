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

// Header toggle

// Typing Effect

const text = document.querySelector(".typing-span-home");

const textTyping = () => {
  setTimeout(() => {
    text.textContent = "Bootstrap";
  }, 0);
  setTimeout(() => {
    text.textContent = "for your success";
  }, 4000);
  setTimeout(() => {
    text.textContent = "for excellence";
  }, 8000);
};
textTyping();
setInterval(textTyping, 12000);
