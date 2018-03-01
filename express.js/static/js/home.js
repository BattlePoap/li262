$(document).ready(function () {
    console.log("toto");
    $.ajax({
        "url": "/users",
        "method": "GET"
    }).done(function (data) {
        let contenu = "<ul>";
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            contenu += "<li>" + element + "</li>";
        }
        contenu += "</ul>";
        $("#users").html(contenu);
    });
});
