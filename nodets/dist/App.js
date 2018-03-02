"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
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
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map