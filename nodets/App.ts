import * as express from 'express';
import * as path from 'path';

class App {
    public express;
    constructor(){
        this.express = express();
        this.setup();
    }
    setup(){
        const router = express.Router();

        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, '../static')));

        this.express.get('/users' , function (req, res) {
            res.json({"prenom": "felix", "nom":"sportelli"});
        });

    }
}
export {App};