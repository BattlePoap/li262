$(document).ready(function () {
    $.ajax(
        {
            "url": "../serveur_liste.php",
            'type': "GET"
        }
    ).done(function (data) {
        console.log(JSON.parse(data));
    });
});
