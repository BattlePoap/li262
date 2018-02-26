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
    }

    get identite(){
        return super.identite + " " + this.numClient;
    }
}

let c = new Client("1548625", "doe", "john", 99);
console.log(c.prenom);
console.log(c.identite);

