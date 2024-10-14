// Sélectionne tous les boutons de bascule
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Ajoute un événement "click" pour chaque bouton
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Récupère l'identifiant de la section de détails associée
    const targetId = button.getAttribute('data-target');
    const detailsElement = document.getElementById(targetId);

    // Vérifie si les détails sont visibles ou cachés
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
      detailsElement.style.display = 'block'; // Affiche les détails
      button.textContent = 'Masquer les détails'; // Change le texte du bouton
    } else {
      detailsElement.style.display = 'none'; // Cache les détails
      button.textContent = 'Voir les détails'; // Change le texte du bouton
    }
  });
});
