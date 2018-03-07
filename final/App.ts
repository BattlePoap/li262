import * as express from 'express';
import * as path from 'path';
import {json, raw, text, urlencoded} from 'body-parser';


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
            response.render("front");
        });
    }
}

export {App};