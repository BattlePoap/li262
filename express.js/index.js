const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const app = express(); // création de variable par le constructeur d'express

// demande à express de "parser" (analyser) le body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (request, response) {
    response.write("bienvenue");
    response.end();
});

// server REST
// GET /users => JSON des utilisateurs

// méthode "passable"
app.get("/users", function (request, response) {
    const users = ["goku", "gohan", "goten"];
    response.json(users); // transforme une variable en JSON, renvoie à l'utilisateur et ferme la connexion
});

// méthode "pas mal"
const users = require("./routes/userRoutes.js");
app.get("/users2", users.listUsers);

// méthode "royale"
const articlesRoutes = require("./routes/articlesRoutes.js");
app.use("/articles", articlesRoutes);

const usrRoutes = require("./routes/usrRoutes.js");
app.use("/usr", usrRoutes);

// PUG
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/hello", function (request, response) {
    response.render("hello");
});

const server = http.createServer(app);
server.listen(3001);
