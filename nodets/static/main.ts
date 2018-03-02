interface Personne { // interface = contrat
    showDescription(): string;
}

class Utilisateur implements Personne {
    description : string;
    constructor (public prenom: string, public nom: string) {
        this.description = prenom + " " + nom;
    }

    showDescription():string{
        return user.description;
    }
}

class Parent implements Personne {
    showDescription():string{
        return "description de Parent";
    }
}

function disBonjour(utilisateur: Utilisateur) : string {
    return "bonjour " + utilisateur.prenom + " " + utilisateur.nom; 
}

function disBonjour2(utilisateur: Personne) :string {
    return utilisateur.showDescription();
}

const user = new Utilisateur("goku", "san");

console.log(disBonjour(user));
console.log(disBonjour2(user));
console.log(disBonjour2(new Parent()));

