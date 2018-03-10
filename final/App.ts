import * as express from 'express';
import * as path from 'path';
import {json, raw, text, urlencoded} from 'body-parser';
import {UsersDao} from "./dao";
import { User } from './User';


class App {
    public express;
    constructor() {
        this.express = express();
        this.setup(); // appelle setup ci-dessous
    }

    setup(){
        const router = express.Router();

        // setup PUG
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "pug");

        // setup le router
        this.express.use("/", router);
        this.express.use(express.static(path.join(__dirname, "../static")));
    
        // setup le bodyparser
        this.express.use(json());
        this.express.use(raw());
        this.express.use(text());
        this.express.use(urlencoded({extended: true}));

        // routes
        this.express.get("/", function(request, response) {
            response.render("login");
        });

        this.express.post("/ms_front", function(request, response) {
            async function (request, response) {
                const nom = request.body.nom;
                const prenom = request.body.prenom;
                const age = request.body.age;
                const user = await new UsersDao().add(new User(nom,prenom,age));
                console.log("nouvel user ajouté à la collection");
                response.json(user);
            };
            response.render("front");
        });
    }
}

export {App};