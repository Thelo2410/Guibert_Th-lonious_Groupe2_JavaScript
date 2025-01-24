class Personnage {
    constructor(nom, PV, attaque, precision) {
      this.nom = nom;
      this.PV = PV;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    // Fonction pour attaquer un ennemi
    attaquer(ennemi) {
      console.log(`${this.nom} tente d'attaquer ${ennemi.nom}...`);
      if (this.verifierPrecision()) {
        console.log("Attaque réussie ! " + this.nom + " inflige " + this.attaque + " points de dégâts à " + ennemi.nom + ".");
        ennemi.PV -= this.attaque;
      } else {
        console.log("L'attaque de " + this.nom + " a échoué !");
      }
    }
  
    // Fonction pour vérifier la précision
    verifierPrecision() {
      const chance = Math.random(); // Générer un nombre entre 0 et 1
      return chance < this.precision;
    }
  }
  
  // Initialisation des deux combattants
  const combattant1 = new Personnage("Gaspard", 100, 15, 0.8);
  const combattant2 = new Personnage("Nicola", 80, 20, 0.6);
  
  // Combat
  console.log("Le combat commence !");
  let round = 1;
  while (combattant1.PV > 0 && combattant2.PV > 0) {
    console.log("--- Round " + round + " ---");
  
    // Le combattant 1 attaque
    combattant1.attaquer(combattant2);
  
    // Vérifier si le combattant 2 est mort
    if (combattant2.PV <= 0) {
      console.log(combattant2.nom + " est mort. " + combattant1.nom + " remporte le combat !");
      break;
    }
  
    // Le combattant 2 attaque
    combattant2.attaquer(combattant1);
  
    // Vérifier si le combattant 1 est mort
    if (combattant1.PV <= 0) {
      console.log(combattant1.nom + " est mort. " + combattant2.nom + " remporte le combat !");
      break;
    }
  
    // Afficher les points de vie restants après le round
    console.log(combattant1.nom + " : " + combattant1.PV + " PV");
    console.log(combattant2.nom + " : " + combattant2.PV + " PV");
  
    round++;
  }
  
  console.log("Le combat est terminé !");
  