function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
const titles = ["Data Analyst", "BI Analyst", "Data Engineer"];
let currentIndex = 0;
const rotatingText = document.getElementById("rotating-text");

function rotateTitle() {
  rotatingText.textContent = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
  }
rotateTitle(); // Show the first title immediately
setInterval(rotateTitle, 2000); // Change every 2 seconds
  