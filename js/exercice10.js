import {Personne} from './Personne.js';

const xhttp = new XMLHttpRequest();
const tbody = document.querySelector("#list tbody");
const tabList = [];

// appelle le serveur
function callServer(nom, prenom, age) {
    const url = "serveur.php?nom=" + nom + "&prenom=" + prenom + "&age=" + age;
    xhttp.onload = function () {
        // Methode qui est appelée quand le serveur répond
        if ((this.readyState == 4) && (this.status == 200)) {
            const p = JSON.parse(this.response);
            // ajoute l'item à la liste
            tabList.push(new Personne(p.id, p.nom, p.prenom, p.age));
            drawList();
        } else {
            console.log("ERREUR HTTP");
        }
    };
    xhttp.open("GET", url, true); // dit ce qu'on veut faire //async
    xhttp.send(); // exécute
}

// ajoute un élément à tabList
function add() {
    // récupère les valeurs
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const age = document.querySelector("#age").value;

    callServer(nom, prenom, age);
}


// supprime un élément de tabList
function del(id) {
    for (let i = 0; i < tabList.length; i++) {
        const p = tabList[i];
        if (id == p.id) {
            tabList.splice(i, 1);
        }
    }
    drawList();
}


// dessine le tableau
function drawList() {
    tbody.innerHTML = "";
    // génère la liste
    for (let i = 0; i < tabList.length; i++) {
        const p = tabList[i];
        tbody.innerHTML += "<tr>\
                                <td>" + p.id + "</td>" +
                                "<td>" + p.nom + "</td>" +
                                "<td>" + p.prenom + "</td>" +
                                "<td>" + p.age + "</td>" +
                                "<td><button id='btn" + p.id + "'>X</button></td>" +
                            "</tr>";
    }

    // appel de la suppression au click
    for (let i = 0; i < tabList.length; i++) {
        const id = tabList[i].id;
        document.querySelector("#btn" + id).onclick = function () {
            del(id);
        };
    }


}

// génération du tableau au click
document.querySelector("#addButton").onclick = add;
