const express = require('express')
const axios = require('axios');
require('dotenv/config')

const router = express.Router();

router.get('/', (req, res) => {
    axios.get(process.env.FLICKR_URL)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.setHeader('Content-Type', 'application/json');
            res.status(500);
            res.send(JSON.stringify(err));
        });
})


module.exports = router;

