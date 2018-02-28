// charger le module HTTP
const fs = require("fs");

const xml2js = require("xml2js");

exports.getUsers = function (filename, cb) {
    fs.readFile(filename, "utf-8", function (error, data) {
        if (error) {
            cb(error);
        } else {
            // on charge le XML
            xml2js.parseString(data, function (error2, result) {
                if (error2) {
                    cb(error2);
                }
                // console.log(result);
                const nodeUser = result.utilisateurs.utilisateur;
                // console.log(nodeUser);
                let tabUsers = [];
                // console.log("tabUsers? :");
    
                for (let i = 0; i < nodeUser.length; i++) {
                    const u = nodeUser[i];
                    let user = {};
                    user.nom = u.nom;
                    user.prenom = u.prenom;
                    user.id = (u.$ != null)? u.$.id : null;
                    tabUsers.push(user);
                }
                cb(null, tabUsers);
            });
        }
    }); 
};

