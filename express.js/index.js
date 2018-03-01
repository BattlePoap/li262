const express = require("express");
const http = require("http");
const path = require("path");
const app = express(); // création de variable par le constructeur d'express

app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (request, response) {
    response.write("bienvenue");
    response.end();
});

// server REST
// GET /users => JSON des utilisateurs
app.get("/users", function (request, response) {
    const users = ["goku", "gohan", "goten"];
    response.json(users); // transforme une variable en JSON, renvoie à l'utilisateur et ferme la connexion
});


const server = http.createServer(app);
server.listen(3001);
