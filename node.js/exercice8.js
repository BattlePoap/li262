const http = require("http");
const fs = require("fs");
const url = require("url");

// charger les modules xml
const saveXML = require('./modules/saveXML.js');

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-type":"text/html"});
    const file = "/form.html";
    const filePath = "./resources/form.html";
    const urlData = url.parse(request.url, true);
    console.log(urlData);

    // lis le fichier form.html
    if (urlData.pathname === file) {
        fs.readFile(filePath, function (error, data) {
            if (error) {
                console.log(error);
            } else {
                response.write(data);
            }
            response.end();
        });
    } 

    if (urlData.pathname === "/register") {
        //console.log("dans le if register");
        const params = urlData.query;

        if (params.nom && params.prenom) {
            const user = {};
            user.prenom = params.prenom;
            user.nom = params.nom;

            saveXML.saveUser(user, function (error, data) {
                if (error) {
                    console.log(error);
                }
                response.end();
            })
        }


        // response.write("arguments : </br>");
        // for (const key in params) {
        //     response.write("- " + key + ": " + params[key] + "</br>");
        // }
        response.end();
    }

    if (url.pathName === "/favicon.ico") {
        response.end();
    }

}).listen(3000);
