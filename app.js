const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost:27017/bookAPI');
const Book = require('./models/bookModel');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/authors', autorRouter);

app.get('/', (req, res) => {
    res.send('Welcom to my API!');
});

app.listen(port, () => {
    console.log('Gulp is running my app on PORT: ' + port);
});