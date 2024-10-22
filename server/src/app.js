const express = require('express');
const morgan = require('morgan');
const app = express();
const coffeeRouter = require('./routers/coffeeRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.use('/api/coffees', coffeeRouter);

module.exports = app;
