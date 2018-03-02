import * as express from 'express';
import * as path from 'path';
import {json, raw, text, urlencoded} from "body-parser";
import {UserDAO} from "./UserDAO";
import {User} from "./User";

class App {
    public express;
    constructor(){
        this.express = express();
        this.setup();
    }
    setup(){
        const router = express.Router();

        // PUG
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "pug");

        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, '../static')));

        this.express.get('/users' , function (req, res) {
            res.json({"prenom": "felix", "nom":"sportelli"});
        });
        
        this.express.get('/users_mongo' , function (req, res) {
            new UserDAO().getAll(function (error, utilisateurs){
                res.json(utilisateurs);
            })
        });

        this.express.get('/users_form', function (request, response) {
            response.render("addUser");
        });

        this.express.use(json());
        this.express.use(raw());
        this.express.use(text());
        this.express.use(urlencoded({extended: true}));

        this.express.post("/users_add", async function (request, response) {
            const nom = request.body.nom;
            const prenom = request.body.prenom;
            const age = request.body.age;
            const userObject = new User(nom, prenom, age);
            console.log("utilisateur ajouté à la collection MongoDB");
            const user = await new UserDAO().addUser(userObject);
            response.json(user);
        });
    }
}
export {App};