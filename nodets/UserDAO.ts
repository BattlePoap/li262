// DAO : Data Access Object

const mongoClient = require("mongodb").MongoClient;

class UserDAO {
    getAll(cb) {
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
    }
}

export {UserDAO};