const express = require("express");
const axios = require("axios");
require("dotenv/config");

const router = express.Router();

router.get("/", (req, res) => {
    axios.get(process.env.FLICKR_URL)
        .then((response) => {
            res.send({ data: response.data.items });
        })
        .catch((err) => {
            res.setHeader("Content-Type", "application/json");
            res.status(404);
            res.send(JSON.stringify(err));
        });
});

router.get("/:id", (req, res) => {
    axios.get(process.env.FLICKR_URL + `&tags=${req.params.id}`)
        .then((response) => {
            res.send({ data: response.data.items });
        })
        .catch((err) => {
            res.setHeader("Content-Type", "application/json");
            res.status(404);
            res.send(JSON.stringify(err));
        });
});

module.exports = router;

