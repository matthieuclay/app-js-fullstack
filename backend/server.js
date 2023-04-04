const express = require('express');
const port = 3000;

const app = express();

app.get('/post', (req, res) => {
	res.json({ message: 'voici les données' });
});

// Lancer le serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));
