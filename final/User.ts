interface Users {
}

class User implements Users {
    constructor (public nom :string, public prenom :string, public age :number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

export {User};