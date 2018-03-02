"use strict";
// DAO : Data Access Object
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoClient = require("mongodb").MongoClient;
class UserDAO {
    getAll(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const database = yield mongoClient.connect("mongodb://localhost:27017/formation");
                const collection = yield database.collection("utilisateurs");
                const utilisateurs = yield collection.find().toArray();
                cb(null, utilisateurs);
            }
            catch (error) {
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
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const database = yield mongoClient.connect("mongodb://localhost:27017/formation");
                const collection = yield database.collection("utilisateurs");
                yield collection.insert(user);
                return user;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.UserDAO = UserDAO;
//# sourceMappingURL=UserDAO.js.map