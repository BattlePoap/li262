"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const UserDAO_1 = require("./UserDAO");
class App {
    constructor() {
        this.express = express();
        this.setup();
    }
    setup() {
        const router = express.Router();
        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, '../static')));
        this.express.get('/users', function (req, res) {
            res.json({ "prenom": "felix", "nom": "sportelli" });
        });
        this.express.get('/users_mongo', function (req, res) {
            new UserDAO_1.UserDAO().getAll(function (error, utilisateurs) {
                res.json(utilisateurs);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map