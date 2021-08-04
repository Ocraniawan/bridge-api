const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome back Commander!')
// })

const flickrRoutes = require('./routes/flickr')

app.use('/flickr', flickrRoutes)

app.listen(3001);