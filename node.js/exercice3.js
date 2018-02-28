// charger le module HTTP
const http = require("http");

// charger le module url
const url = require("url");

http.createServer(function (request, response) {
    console.log("requête reçue");
    response.writeHead(200, {"Content-Type": "text/html"});
    const urlCalled = request.url;
    console.log("url appelee: " + urlCalled);
    response.write("url appelee: " + urlCalled + "</br>");
    const method = request.method;
    console.log("methode appelee: " + method);
    response.write("methode appelee: " + method + "</br>");

    const urlObject = url.parse(urlCalled, true);
    response.write("url appelee: " + urlObject.pathname + "</br>");
    response.write("arguments: </br>");
    for ( const key in urlObject.query) {
        response.write("- " + key + ": " + urlObject.query[key] + "</br>");
    }

    response.end("au revoir");
}).listen(3000);
