import {Personne} from './Personne.js';

const tbody = document.querySelector("#list tbody");
let tabList = [];
let randomId = 4; // sequence id


//génération du tableau au click
document.querySelector("#addButton").onclick = add;



//ajoute un élément à tabList
function add(){
    //récupère les valeurs
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;
    
    //ajoute l'item à la liste
    tabList.push(new Personne (randomId++,nom, prenom, age));
    drawList();
}


//supprime un élément de tabList
function del(id){
    for (let i = 0; i<tabList.length; i++){
        let p = tabList[i];
        if (id == p.id) {
            tabList.splice(i,1);
        }
    }
    drawList();
}


//dessine le tableau
function drawList() {
    tbody.innerHTML="";
    //génère la liste"  
    for (let i = 0; i < tabList.length; i++) {
        const p = tabList[i];
        tbody.innerHTML +=   "<tr>\
                                <td>" + p.id + "</td>" +
                                "<td>" + p.nom + "</td>" +
                                "<td>" + p.prenom + "</td>" +
                                "<td>" + p.age + "</td>" + 
                                "<td><button id='btn" + p.id + "'>X</button></td>" +
                            "</tr>";
    };

    //appel de la suppression au click
    for (let i = 0; i<tabList.length; i++){
        const id = tabList[i].id;
        document.querySelector("#btn"+id).onclick = function(){
            del(id);
        }
    }


}

