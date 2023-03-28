class Calculatrice {
  constructor() {
    this.ecran = document.querySelector('.ecran');
    this.boutons = document.querySelectorAll('.btn button');

    this.boutons.forEach(btn => {
      btn.addEventListener('click', () => {
        const texteBtn = btn.textContent;

        if (texteBtn === '=') {
          const resultat = eval(this.ecran.textContent);
          this.ecran.textContent = resultat;
        } else if (texteBtn === 'C') {
          this.ecran.textContent = '';
        } else if (texteBtn === '←') {
          this.supprimer();
        } else {
          this.ecran.textContent += texteBtn;
        }
      });
    });
  }

  supprimer() {
    const contenuEcran = this.ecran.textContent;
    this.ecran.textContent = contenuEcran.slice(0, -1);
  }
}

const maCalculatrice = new Calculatrice();
