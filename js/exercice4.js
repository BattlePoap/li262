// exctraction au format objet des champs id et nom
function extractObject(utilisateur){
    return {"id": utilisateur.id, "nom": utilisateur.nom};
}

// exctraction au format objet des champs id et nom
function extractTab(utilisateur){
    return [utilisateur.id, utilisateur.nom];
}


let user = {"id": 1, "nom": "alapetite", "prenom":"mathieu"};

//let {id, nom} = extractObject(user); // même champs que dans le return
let [id, nom, age=0] = extractTab(user); // ordre qui compte // valeur par défaut
console.log(id);
console.log(nom);
console.log(age);


