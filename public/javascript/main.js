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

  // Fonction pour afficher l'image active
  function updateCarousel() {
    // Cache toutes les images
    images.forEach((img, index) => {
        img.classList.remove('active');
    });
    // Affiche l'image active
    images[currentIndex].classList.add('active');
}

// Fonction pour passer à l'image précédente
prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Fonction pour passer à l'image suivante
nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Initialiser le carousel en affichant la première image
updateCarousel();

