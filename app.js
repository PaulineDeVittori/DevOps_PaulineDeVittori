const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const favoritesFile = path.join(__dirname, 'favorites.json');

function loadFavorites() {
  if (fs.existsSync(favoritesFile)) {
    return JSON.parse(fs.readFileSync(favoritesFile, 'utf8'));
  }
  return [];
}

function saveFavorites(favorites) {
  fs.writeFileSync(favoritesFile, JSON.stringify(favorites, null, 2));
}

app.get('/favorites', (req, res) => {
  const favorites = loadFavorites();
  res.json(favorites);
});

app.post('/favorites', (req, res) => {
  const newColor = req.body.color;
  if (!newColor) {
    return res.status(400).send('Aucune couleur fournie');
  }

  const favorites = loadFavorites();
  favorites.push(newColor);
  saveFavorites(favorites);
  res.status(201).send('Couleur ajoutée');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'magenta.html'));
});

app.listen(PORT, () => {
  console.log(`L'application écoute sur le port ${PORT}`);
});

/*
//fonction à tester
function isFavoritesListEmpty(list) {
  return Array.isArray(list) && list.length === 0;
}

module.exports = { isFavoritesListEmpty };

//autre fonction pour la tester
function addColorToFavorites(color) {
  if (!color) {
    throw new Error('Aucune couleur fournie');
  }
  const favorites = loadFavorites();
  favorites.push(color);
  saveFavorites(favorites);
  return favorites;
}

module.exports = { app, addColorToFavorites };
*/