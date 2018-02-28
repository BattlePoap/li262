$(document).ready(function () {
    $("body").prepend("<table></table>");
    $("table").addClass("table table-striped");

    function drawTable(object) {
        const tableTmp = $("table");
        tableTmp.empty();
        tableTmp.append("<thead class='thead-light'><tr><th>Id</th><th>Prénom</th><th>Nom</th><th>Âge</th></tr></thead><tbody>");
        for (let i = 0; i < object.length; i++) {
            const p = object[i];
            tableTmp.append("<tr>\
                            <td>" + p.id + "</td>\
                            <td>" + p.prenom + "</td>\
                            <td>" + p.nom + "</td>\
                            <td>" + p.age + "</td></tr>");
        }
        tableTmp.append("</tbody>");
    }

    $.ajax(
        {
            "url": "../serveur_liste.php",
            'type': "GET"
        }
    ).done(function (data) {
        const obj = JSON.parse(data);
        console.log(obj);
        drawTable(obj);
    }).fail(function () {
        console.log("l'appel AJAX a échoué");
    }).always(function () {
        console.log("Je passe toujours ici");   
    });
});
