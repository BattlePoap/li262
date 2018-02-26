function bonjour(){
    console.log("bonjour");
}

bonjour();

function affSomme(a,b){
    console.log(a+b);
}

affSomme(2,3);
affSomme(2,"3");

function somme (a, b){
    return a+b;
}

console.log(somme(2,3));

let sommeVar = function (a,b) {
    return a+b;
};

console.log(sommeVar(2,3));

let longueFonction = function(maFunc){
    console.log("je lance la longue function : " + maFunc.name);
    setTimeout(() => {
        maFunc(); // quelle fonction lancer quand temps écoulé
    }, 3000); // temps
    console.log("c'est lancé"); 
};

longueFonction(bonjour);

let disBonjour = function (){
    console.log("Je dis Bonjour");    
};

let client = {};
client.prenom = "mathieu";
client.nom = "alapetite";
client.disBonjour = disBonjour;
client.disBonjour();


client.commandes = [123, 456, 222];
client.getNbCommandes = function(){
    return this.commandes.length;
};

client.ajoutCommande = function (nouvelleCommande){
    this.commandes.push(nouvelleCommande);
}

console.log(client.prenom + " a commandé " + client.getNbCommandes() + " fois");
client.ajoutCommande("789");
console.log(client.prenom + " a commandé " + client.getNbCommandes() + " fois");

client.age = 25;
client.isMajeur = function (){
    // return (this.age >= 18);
    let majeur = (this.age>=18) ? true : false;
    return majeur;
};

console.log(client.isMajeur());

