document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
  
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  
    menuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuBtn.textContent = isOpen ? "✖" : "☰";
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
  });
  