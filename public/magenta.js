document.getElementById('generateColorButton').addEventListener('click', generateRandomColor);
document.getElementById('saveColorButton').addEventListener('click', saveColor);

function generateRandomColor() {
  const randomColor = getRandomColor();

  const rgb = hexToRgb(randomColor);

  document.getElementById('colorImage').style.backgroundColor = randomColor;

  document.getElementById('hexCode').textContent = `Code Hex: ${randomColor}`;
  document.getElementById('rgbCode').textContent = `Code RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const colorName = getColorName(randomColor);
  document.getElementById('colorName').textContent = `Nom de la couleur: ${colorName || "Inconnu"}`;

  document.getElementById('colorDisplay').style.display = 'block';

  document.getElementById('saveColorButton').style.display = 'inline-block';
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function getColorName(hex) {
  const colorNames = {
    '#FF0000': 'Rouge',
    '#00FF00': 'Vert',
    '#0000FF': 'Bleu',
    '#FFFF00': 'Jaune',
    '#FF00FF': 'Magenta',
    '#00FFFF': 'Cyan',
    '#000000': 'Noir',
    '#FFFFFF': 'Blanc',
    '#808080': 'Gris',

  };
  return colorNames[hex.toUpperCase()] || null;
}

function saveColor() {
  const currentColor = document.getElementById('colorImage').style.backgroundColor;
  fetch('/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ color: currentColor }),
  })
  .then(response => {
    if (response.ok) {
      alert('Couleur ajoutée aux favoris !');
      loadFavorites(); 
    } else {
      alert('Erreur lors de l\'ajout de la couleur');
    }
  });
}

function loadFavorites() {
  fetch('/favorites')
    .then(response => response.json())
    .then(data => {
      const favoritesContainer = document.getElementById('favoritesContainer');
      favoritesContainer.innerHTML = '';

      data.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.classList.add('favorite-color');
        favoritesContainer.appendChild(colorDiv);
      });
    });
}

loadFavorites();
