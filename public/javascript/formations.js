// Sélectionne tous les boutons pour afficher/masquer les détails
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Récupère le conteneur des détails associé au bouton
    const details = button.parentElement.nextElementSibling;

    // Alterne la classe 'visible' pour afficher/masquer les détails
    details.classList.toggle('visible');

    // Change le texte du bouton entre "+" et "-"
    button.textContent = details.classList.contains('visible') ? '-' : '+';
  });
});
