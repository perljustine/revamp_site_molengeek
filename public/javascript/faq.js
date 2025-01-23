const faqButtons = document.querySelectorAll('.faq-btn'); // Sélectionner tous les boutons

faqButtons.forEach(button => { // Parcourir chaque bouton de la list
    button.addEventListener('click', () => { // quand on clique la fonction se réalise
        const details = button.nextElementSibling; // Récupérer le contenu qui est après le bouton dans le html 
        details.classList.toggle('visible'); // Afficher ou cacher le contenu de la classe visible ajoutée au clique si elle l'est elle est supp sinon elle est ajoutée
        button.textContent = details.classList.contains('visible') ? '-' : '+'; // Mettre à jour le texte du bouton : true = ? false = : 
    });
});
