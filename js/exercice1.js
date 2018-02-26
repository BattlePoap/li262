/*
 * Commentaire multiligne
 */

console.log("Bonjour");

// VAR à bannir
// var a = 2;
// on utilise let et const

let a = 2;

console.log(a);
let b = 3;
let somme = a + b;

console.log(somme);

// Concaténation
console.log("Somme = " + somme);

if(true){
    let c = 5;
    console.log("Vrai");
}

//console.log(c); 
// si var = 5, undefined sinon

const d = 6;
//d = 7; // erreur


//norme accolades
if (a == 2){
    // ...
} else if (a == 3) {
    // ...
} else {

}

console.log(2 == "2"); // true
console.log(2 == "2.0"); // true
console.log(2 === "2.0"); // false

// Format d'objet JS: JSON
// JavaScript Object Notation
// Client: id(2), prenom(mathieu), nom(alapetite)
// => {"id: 2, "prenom": "mathieu", "nom": "alapetite"}
// Tableau : []
// => {"id: 2, "prenom": "mathieu", "nom": "alapetite", "commandes": [123,432,222]}

let client = {"id": 2, "prenom": "mathieu", "nom": "alapetite"};
console.log(client.nom);
console.log(client["prenom"]);


//tableau
const commandes = [123,432,222];
client.commandes = commandes; // attributs dynamiques
console.log(client.commandes);

//booléen
client.lunettes = true;

if (client.lunettes) {
    console.log("binoclard!");  
}

//tableau d'objets
//objets en attributs
let pere = {"prenom": "goku", "nom": "son"};
pere.enfants = [{"prenom": "gohan", "nom": "son"},{"prenom":"goken", "nom":"son"}];

console.log(pere);

// tableaux
let tabEnfants = [];
const enfant1 = {"prenom": "gohan", "nom": "son"};
tabEnfants.push(enfant1);
console.log(tabEnfants);

for (let i=0; i < tabEnfants.length; i++){
    console.log("enfant: ");
    console.log(tabEnfants[i]);
}

let i = 0;
while (i < tabEnfants.length) {
    console.log("enfant: " + tabEnfants[i]);
    i++;    
}
let j= 0;
do {
    console.log("enfant :");
    console.log(tabEnfants[i]);
    j++;
} while (j < tabEnfants.length);

let k = 0;
console.log(k); // 0
console.log(k++); // 0
console.log(k); // 1
console.log(++k); // 2
k--;
k*=2;

switch (pere.enfants.length) {
    case 0:
        console.log("pas d'enfant");
        break;
    
    case 1:
        console.log("bravo, 1 enfant");
        break;
    
    case 2:
        console.log("famille nombreuse");
        break;

    default:
        console.log("beaucoup d'enfants !");
        break;
}



