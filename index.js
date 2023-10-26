const express = require('express');
const app = express();
const port = 4000; // Choisissez le port que vous préférez

// Middleware pour servir des fichiers statiques depuis le répertoire 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});