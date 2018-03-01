const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    response.render("login");
});

router.post("/", function (request, response) {
    const usr = [];
    usr.identifiant = request.body.identifiant;
    usr.password = request.body.password;
    
    if (usr.password === "toto") {
        response.render("hello", {
            "mail": usr.identifiant
        });
    } else {
        const error = "mot de passe erronné";
        response.status(301);
        response.render("login", {
            "error": error
        });
    }
});

module.exports = router;
