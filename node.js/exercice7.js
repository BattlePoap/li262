// charger le module HTTP
const http = require('http');

// charger le module de chargement d'xml
const loadXML = require('./modules/loadXML.js');

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});

    const url = "./resources/exemple.xml";

    loadXML.getUsers(url, function (error, users) { // users est l'argument 'data'
        if (error) {
            console.log("impossible de charger le fichier");
        } else {
            //console.log(users);
            for ( let i = 0; i < users.length; i++) {
                //console.log(users[i]);
                const u = users[i];
                response.write("- id: " + u.id + ", nom: " + u.nom + ", prenom: " + u.prenom + "</br>");
            }
        }
        response.end("fin de reponse");
    });


}).listen(3000);
