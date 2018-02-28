// charger le module HTTP
const fs = require("fs");

const xml2js = require("xml2js");

fs.readFile("./resources/exemple.xml", "utf-8", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        // on charge le XML
    }
});
