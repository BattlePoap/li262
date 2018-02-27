const list = document.querySelector("#list");
let tabList = [];

class Personne {
    constructor (nom,prenom,age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

// fonction ajout/suppresion élément de liste
function addPersonneToList(personne){
    tabList.push(personne);
}

function delPersonneFromList(id){
    tabList.splice(id,1);
}

//génération du tableau au click
document.querySelector("#addButton").onclick = drawList;

//fonction qui dessine le tableau
function drawList() {
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;

    //ajoute l'item à la liste
    addPersonneToList(new Personne (nom, prenom, age)); 
    
    //génère la liste"
    list.innerHTML =    "<thead>\
                            <tr>\
                                <th>id</th>\
                                <th>nom</th>\
                                <th>prenom</th>\
                                <th>age</th>\
                            </tr>\
                        </thead>\
                        <tbody>";
    
    for (let i = 0; i < tabList.length; i++) {
        const p = tabList[i];
        list.innerHTML +=   "<tr>\
                                <td>" + (i+1) + "</td>" +
                                "<td>" + p.nom + "</td>" +
                                "<td>" + p.prenom + "</td>" +
                                "<td>" + p.age + "</td>" + 
                                "<td><span visible=\"false\" class=\"delButton\"><img src=\"img/delete.svg\" style=\"width:16px; height:16px;\"/></span>" +"</td>" +
                                
                            "</tr>";
    };
    
    list.innerHTML += "</tbody>";
}

// affiche le bouton de suppression au survol
document.querySelectorAll("tr").onmouseover = function(){
    this.querySelector("delButton").visible("true");
}

document.querySelectorAll(".delButton").onclick = delPersonneFromList(this.parentNode.parentNode);

