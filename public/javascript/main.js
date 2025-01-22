document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu
  const burger = document.querySelector(".burger")
  const nav = document.querySelector("nav ul")

  burger.addEventListener("click", () => {
    nav.classList.toggle("show")
    burger.classList.toggle("toggle")
  })
});


// Carousel 
const images = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".carousel-nav.prev");
const nextButton = document.querySelector(".carousel-nav.next");
let currentIndex = 0;

