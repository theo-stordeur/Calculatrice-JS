// Récupère l'élément ecran de la calculatrice
const ecran = document.querySelector('.ecran');

// Récupère tous les boutons de la calculatrice
const boutons = document.querySelectorAll('.btn button');

// Boucle à travers tous les boutons et écoute les clics
boutons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Obtient le texte du bouton cliqué
    const texteBtn = this.textContent;

    if (texteBtn === '=') {
      // Évalue l'expression mathématique dans la div .ecran
      const resultat = eval(ecran.textContent);

      // Met à jour le contenu de la div .ecran avec le résultat
      ecran.textContent = resultat;
    } else if (texteBtn === 'C') { // Si le bouton de réinitialisation est cliqué
      ecran.textContent = ''; // Réinitialise le contenu de la div .ecran
    } else {
      // Met à jour le contenu de la div .ecran avec le texte du bouton cliqué
      ecran.textContent += texteBtn;
    }
  });
});


