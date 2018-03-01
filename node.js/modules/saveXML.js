// charge les modules
const http = require("http");
const url = require("url");
const xml2js = require("xml2js");
const fs = require("fs");

exports.saveUser = function (user, cb) {
    const builder = new xml2js.Builder();

    const json = {};
    json.utilisateur = user;
    json.utilisateur.$ = {};
    json.utilisateur.$.id = "23";

    const xml = builder.buildObject(json);

    console.log(xml);

    fs.writeFile(user.prenom + ".xml", xml, function (error) {
        if (error) {
            console.log(error);
        } else {
            cb(null);
        }
    });
};
