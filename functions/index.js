const functions = require("firebase-functions");

const express = require("express");

const app = express();

const flickrRoutes = require("./routes/flickr");

app.use("/flickr", flickrRoutes);

app.listen(3001);

exports.app = functions.https.onRequest(app)
