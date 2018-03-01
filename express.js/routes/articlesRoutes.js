const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    const articles = ["frites", "steack", "petits pois"];
    response.json(articles);
});

module.exports = router;
