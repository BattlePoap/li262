"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const body_parser_1 = require("body-parser");
const UserDAO_1 = require("./UserDAO");
const User_1 = require("./User");
class App {
    constructor() {
        this.express = express();
        this.setup();
    }
    setup() {
        const router = express.Router();
        // PUG
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "pug");
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
        this.express.get('/users_form', function (request, response) {
            response.render("addUser");
        });
        this.express.use(body_parser_1.json());
        this.express.use(body_parser_1.raw());
        this.express.use(body_parser_1.text());
        this.express.use(body_parser_1.urlencoded({ extended: true }));
        this.express.post("/users_add", function (request, response) {
            return __awaiter(this, void 0, void 0, function* () {
                const nom = request.body.nom;
                const prenom = request.body.prenom;
                const age = request.body.age;
                const userObject = new User_1.User(nom, prenom, age);
                console.log("utilisateur ajouté à la collection MongoDB");
                const user = yield new UserDAO_1.UserDAO().addUser(userObject);
                response.json(user);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map