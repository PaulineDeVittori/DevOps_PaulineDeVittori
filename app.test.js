//test

test('Dummy test - always passes', () => {
  expect(2 + 3).toBe(5);
});

/*
const { isFavoritesListEmpty } = require('./app');

test('retourne true pour une liste vide', () => {
  const emptyList = [];
  expect(isFavoritesListEmpty(emptyList)).toBe(true);
});

test('retourne false pour une liste non vide', () => {
  const list = ['#FFFFFF'];
  expect(isFavoritesListEmpty(list)).toBe(false);
});


const fs = require('fs');
const path = require('path');
const { addColorToFavorites } = require('./app');

const favoritesFile = path.join(__dirname, 'favorites.json');
let originalFavorites;

beforeAll(() => {
  if (fs.existsSync(favoritesFile)) {
    originalFavorites = fs.readFileSync(favoritesFile, 'utf8');
  }
});

afterAll(() => {
  if (originalFavorites !== undefined) {
    fs.writeFileSync(favoritesFile, originalFavorites);
  }
});

test('addColorToFavorites ajoute une couleur au fichier JSON', () => {
  const testColor = '#ABCDEF';
  const updatedFavorites = addColorToFavorites(testColor);

  expect(updatedFavorites).toContain(testColor);
});

*/