
# TP_DevOps_Pauline_De_Vittori

# Site de Couleurs Aléatoires

## Description

Mon projet est site web qui permet de générer des couleurs de manière aléatoire. En plus d'une **image de la couleur**, on trouve le **code hexadécimal**, le **code RGB** et le **nom de la couleur**. Il est également possible de sauvegarder ses couleurs préférées.

J'utilise différentes technologies :
- **HTML** pour la structure de la page.
- **CSS** pour la mise en forme et le design.
- **JavaScript** pour la génération de couleurs
- **Node.js** pour stocker les couleurs préférées
- **Docker** pour gérer la conteneurisation
- **CI/CD** pour l'integration continue

## Comment ça fonctionne

- **Génération de la couleur** : Lorsque l'utilisateur clique sur le bouton "Générer une couleur", une couleur aléatoire est affichée avec l'image de la couleur, le code **hexadécimal**, le code **RGB**, et le **nom de la couleur**.

- **Sauvegarde des couleurs préférées** : Les utilisateurs peuvent sauvegarder leurs couleurs préférées et les afficher sous de la couleur générée.

- **Suppression des couleurs sauvegardées** : Il est possible de supprimer une couleur de la liste des préférées en cliquant dessus.

## Ce que j'ai fait

- création du repo git et du lien avec le dossier local
- j'ai créé le projet de page web du générateur de couleurs avec différentes branches pour les différentes features à ajouter
- j'ai utilisé Node.js pour avoir un serveur web simple avec Express et pouvoir sauvegarder les couleurs préférées des utilisateurs
- j'ai ajouté des test d'intégration continue CI/CD pour pouvoir tester mon application automatiquement et à chaque modification (le test est simple pour l'instant)
- j'ai conteneurisé mon serveur grâce à Docker en ajoutant le fichier Dockerfile

## Installation

- **Node.js** : installer node.js
  ```bash
  npm install
  
- pour lancer l'application : puis aller sur http://localhost:3000/
  ```bash
  node app.js


- ou avec Docker : puis aller sur http://localhost:8080/
  ```bash
  docker start <id du conteneur>


Dépôt à cloner
   ```bash
   git clone https://github.com/PaulineDeVittori/TP_DevOps_Pauline_De_Vittori
