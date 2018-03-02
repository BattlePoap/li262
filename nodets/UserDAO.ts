// DAO : Data Access Object

const mongoClient = require("mongodb").MongoClient;

class UserDAO {
    async getAll(cb) {
        try {
            const database = await mongoClient.connect("mongodb://localhost:27017/formation");
            const collection = await database.collection("utilisateurs");
            const utilisateurs = await collection.find().toArray();
            cb(null,utilisateurs);
        } catch (error) {
            cb(error);
        }

        /*
        version basique :
        mongoClient.connect("mongodb://localhost:27017/formation", function (error, database) {
            if (error) {
                console.log(error);
            } else {
                database.collection("utilisateurs", function (error2, collection) {
                    if (error2) {
                        console.log(error2);                        
                    } else {
                        collection.find().toArray(function (error3, utilisateurs) {
                            cb(null, utilisateurs); // cb en paramètre de getAll()
                        });
                    }
                });
            }
        });
        */
    }

    async addUser(user) {
        try {
            const database = await mongoClient.connect("mongodb://localhost:27017/formation");
            const collection = await database.collection("utilisateurs");
            await collection.insert(user);
            return user;

        } catch (error) {
            return null;
        }
    }
}

export{UserDAO};