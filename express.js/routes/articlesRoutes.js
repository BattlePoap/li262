const express = require("express");
const router = express.Router();
const config = require("../config.json");

router.get("/", function (request, response) {
    const articles = ["frites", "steack", "petits pois"];
    response.json(articles);
});

router.get("/:id", function (request, response) {
    response.json({"id_reçue": request.params.id});
});

router.post("/", function (request, response) {
    const produit = {};
    produit.title = request.body.title;
    produit.price = request.body.price;
    produit.desc = request.body.desc;


    if (produit.price >= config.priceMax) {
        response.status(500);
        response.write("c'est trop cher >100€");
    } else {
        response.write("article recu: " + JSON.stringify(produit));
    }
    response.end();
});

// Création d'articles (pug)
router.get("/form/form.html", function (request, response) {
    const title = "Création d'articles dynamique";
    const produits = [];
    const p1 = {"produit": "iPhone6", "prix": 500};
    const p2 = {"produit": "iPhone8", "prix": 800};
    const p3 = {"produit": "iPhoneX", "prix": 1000};
    const p4 = {"produit": "MacBook", "prix": 2000};
    const p5 = {"produit": "HomePod"};

    produits.push(p1);
    produits.push(p2);
    produits.push(p3);
    produits.push(p4);
    produits.push(p5);
    response.render("article", {
        "title": title,
        "inventaire": produits
    });
});

module.exports = router;
