document.addEventListener("DOMContentLoaded", () => {
    // Burger Menu
    const burger = document.querySelector(".burger")
    const nav = document.querySelector("nav ul")
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("show")
      burger.classList.toggle("toggle")
    });
});
