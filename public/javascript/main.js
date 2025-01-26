document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu
  const burger = document.querySelector(".burger")
  const nav = document.querySelector("nav ul")

  burger.addEventListener("click", () => {  
    // toggle pour la nav bar pour la cacher quand c'est sur la class show 
    nav.classList.toggle("show")
    burger.classList.toggle("toggle")
  })
});




// Carousel 
const images = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".carousel-nav.prev");
const nextButton = document.querySelector(".carousel-nav.next");
let currentIndex = 0; 

// Fonction pour afficher la première image du carousel
  function updateCarousel() {
    // Cache toutes les images
    images.forEach((img, index) => {
        img.classList.remove('active');
    });
    // Affiche l'image active du tableau donc 0
    images[currentIndex].classList.add('active');
}

// Fonction pour passer à l'image précédente
prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel(); 
}); 
// si le current index = 0 alors on fait images -1 pour repartir a la fin du tableau sinon index -1 pour retourner à l'image d'avant

// Fonction pour passer à l'image suivante
nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});
// si le current index = 0 alors on fait images +1 pour avancer dans le tableau sinon index +1  pour aller à l'image d'après


// Initialiser le carousel d'images
updateCarousel();

