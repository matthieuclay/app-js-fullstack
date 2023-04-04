const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv').config();
const port = 3000;

// Connexion à la base de données
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/post', require('./routes/post.routes'));

// Lancer le serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));
