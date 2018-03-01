exports.listUsers = function (request, response) {
    const users = ["sangoku", "vegeta"];
    response.json(users);
}