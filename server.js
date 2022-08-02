const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/books-assesment'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/books-assesment/'}),
);


app.listen(process.env.PORT || 8080);