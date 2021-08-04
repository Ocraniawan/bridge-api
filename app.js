const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome back Commander!')
})


app.listen(3000);