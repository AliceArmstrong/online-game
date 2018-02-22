'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use(express.static(path.join(__dirname, './../../dist/client')));
app.use('/assets', express.static(path.join(__dirname, './../../client/assets')));
app.use('/vendor', express.static(path.join(__dirname, './../../vendor')));
app.use(cors());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../../client/views'));

// Routing
app.get('/game', function (req, res) {
    res.render('game.pug');
});
app.get('/', function (req, res) {
  res.render('index.pug');
});

module.exports = app
