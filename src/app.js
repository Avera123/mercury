const express = require('express');
const cors = require('cors');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => res.redirect('/mercury/api/users'));
app.get('/mercury/api/users', (req, res) => res.send('TST'));
app.get('/mercury/api/notes', (req, res) => res.send('TST'));
app.get('/mercury/api/tasks', (req, res) => res.send('TST'));

module.exports = app;