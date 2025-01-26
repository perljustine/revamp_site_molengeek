
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    const details = button.parentElement.nextElementSibling;

    // met ou enlève la classe 'visible' pour afficher/masquer les détails
    details.classList.toggle('visible');

    // Change le texte du bouton entre "+" et "-"
    button.textContent = details.classList.contains('visible') ? '-' : '+';
  });
});
// même chose que nav bar et faq /jobs