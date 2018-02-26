class Personne {
    constructor(nom, prenom, age=32){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    get identite(){
        return this.prenom + " " + this.nom;
    }

    getNomComplet(){
        return this.nom + " " + this.prenom;
    }
}

let mathieu = new Personne("alapetite", "mathieu");
//mathieu.age = 25;
console.log("prenom : " + mathieu.prenom);
console.log("age : " + mathieu.age);
console.log(mathieu.getNomComplet());

console.log(mathieu.identite);
mathieu.nom = "dupont";
console.log(mathieu.identite);

class Client extends Personne {
    constructor(numClient,nom,prenom,age){
        super(nom,prenom,age); // appelle le constructeur de la classe mère
        this.numClient = numClient;
        this.tabCommandes = [];
    }

    get identite(){
        return super.identite + " " + this.numClient;
    }

    get ca() {
        let ca = 0;
        this.tabCommandes.forEach(commande => {
            ca += commande.valeur;
        });
        return ca
    }

    ajoutCommande (commande){
        this.tabCommandes.push(commande);
    }


}

let c = new Client("1548625", "doe", "john", 99);
console.log(c.prenom);
console.log(c.identite);

/*
 * com = new Commande (1, "crayon", 5);
 * com2 = new Commande (2, "papier", 10);
 * // ...
 * console.log(c.ca);
 */

class Commande {
    constructor (numOrder,produit,valeur){
        this.numOrder = numOrder;
        this.produit = produit;
        this.valeur = valeur;
    }
}


c.ajoutCommande(new Commande (1, "crayon", 5));
c.ajoutCommande(new Commande (2, "papier", 10));

console.log(c.ca);