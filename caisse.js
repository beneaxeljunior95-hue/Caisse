let Budjet_du_client = 20000;
let Prix_du_cahier = 1500;
let Quantité_de_cahiers = 4;
let Prix_du_stylo = 500;
let Quantité_de_stylos = 3;

// calcul du montant des cahiers et des stylos

let Montant_cahiers = Prix_du_cahier * Quantité_de_cahiers;
let Montant_stylos = Prix_du_stylo * Quantité_de_stylos;
let Montant_total = Montant_cahiers + Montant_stylos;

// Affichage de la caisse 

console.log("====== Caisse ======");
console.log("Montant des cahiers: " + Montant_cahiers + " FCFA");
console.log("Montant des stylos: " + Montant_stylos + " FCFA");
console.log("Montant total: " + Montant_total + " FCFA");
console.log("Budget du client: " + Budjet_du_client + " FCFA");

// Vérification si le client a assez d'argent pour payer
if (Montant_total <= Budjet_du_client) {
    console.log("Budjet suffisant");
    } else {
  console.log("Budget insuffisant");
}
