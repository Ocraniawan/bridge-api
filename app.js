const express = require('express');

const app = express();

const flickrRoutes = require('./routes/flickr')

app.use('/flickr', flickrRoutes)

app.listen(3001);