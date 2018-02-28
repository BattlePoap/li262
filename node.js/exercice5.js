// charger le module HTTP
const http = require("http");

// charger le module filesystem
const fs = require("fs");

// charger le module url
const url = require("url");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    const urlCalled = request.url;
    const urlObject = url.parse(urlCalled, true);

    let toDelete = false;

    for (const key in urlObject.query) {
        if ((key == "delete") && (urlObject.query[key] == "true")) {
            toDelete = true;
        }
    }

    if (!toDelete) {
        if (urlObject.pathname == "/favicon.ico") {
            console.log("favicon");
        } else {
            console.log("else");
            let data = "";
            data += "url visitee: " + urlCalled + "\n";
            data += "params: \n";
            for ( const key in urlObject.query) {
                data += "- " + key + ": " + urlObject.query[key] + "\n";
            }

            fs.appendFile("./resources/access.log", data, function (error) {
                if (error) {
                    console.log("appendFile error : " + error);
                } else {
                    console.log("success");
                    fs.readFile("./resources/access.log", function (error, data) {
                        if (error) {
                            console.log("readFile error: " + error);   
                        } else {
                            response.write(data);
                        }
                        response.end("au revoir");
                    });        
                }
            });
        }
    } else {
        fs.unlink("./resources/access.log", function (error) {
            if (error) {
                console.log("unlink error: " + error);
            } else {
                console.log("suppression ok");
            }
        });
        response.end();
    }
}).listen(3000);
