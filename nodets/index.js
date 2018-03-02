const express = require("express");
const http = require("http");
const path = require("path");
const app = express(); // création de variable par le constructeur d'express

app.use(express.static(path.join(__dirname, "static")));


const server = http.createServer(app); // const app = new App();
server.listen(3001); // app.express.listen(port);
