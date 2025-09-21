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
  rotatingText.classList.remove("fade-in");
  
  // Wait for fade-out before changing text
  setTimeout(() => {
    rotatingText.textContent = titles[currentIndex];
    rotatingText.classList.add("fade-in");
    currentIndex = (currentIndex + 1) % titles.length;
  }, 300);
}

rotateTitle(); // Initial call
setInterval(rotateTitle, 2500); // Rotate every 2.5s
