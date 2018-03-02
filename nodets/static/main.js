var Utilisateur = /** @class */ (function () {
    function Utilisateur(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
        this.description = prenom + " " + nom;
    }
    Utilisateur.prototype.showDescription = function () {
        return user.description;
    };
    return Utilisateur;
}());
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.showDescription = function () {
        return "description de Parent";
    };
    return Parent;
}());
function disBonjour(utilisateur) {
    return "bonjour " + utilisateur.prenom + " " + utilisateur.nom;
}
function disBonjour2(utilisateur) {
    return utilisateur.showDescription();
}
var user = new Utilisateur("goku", "san");
console.log(disBonjour(user));
console.log(disBonjour2(user));
console.log(disBonjour2(new Parent()));
