document.addEventListener("DOMContentLoaded", () => {
    // Footer year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
    // Hamburger menu toggle
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
  
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
    });
  });
  