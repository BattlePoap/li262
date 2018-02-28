// charger le module HTTP
const http = require("http");

// charger le module filesystem
const fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./resources/exemple.html", function (error, data) {
        if (error) {
            console.log(error);
        } else {
            response.write(data);
        }
        response.end("au revoir");
    });
}).listen(3000);
