const { isFavoritesListEmpty } = require('./app');

test('retourne true pour une liste vide', () => {
  const emptyList = [];
  expect(isFavoritesListEmpty(emptyList)).toBe(true);
});

test('retourne false pour une liste non vide', () => {
  const list = ['#FFFFFF'];
  expect(isFavoritesListEmpty(list)).toBe(false);
});

// les deux tests sont passés