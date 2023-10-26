const express = require('express');
const app = express();
const port = 3000; // Choisissez le port que vous préférez

// Middleware pour servir des fichiers statiques depuis le répertoire 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});