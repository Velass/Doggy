# Doggy

Doggy est une application mobile développée avec **Ionic** et **Angular**. Elle permet aux utilisateurs de consulter une liste de chiens, d'ajouter de nouveaux chiens et d'accéder aux détails de chaque chien. L’objectif de l’application est de proposer une interface simple et conviviale pour découvrir des chiens près de chez soi.

## Fonctionnalités principales

### 1. Page d'accueil
- La page d'accueil donne une brève explication de l'application et permet aux utilisateurs de se familiariser rapidement avec l'interface. Elle affiche également un chien aléatoire.

### 2. Liste des chiens
- La liste des chiens affiche tous les chiens ajoutés, avec les informations suivantes :
  - **Image** : Une photo du chien
  - **Nom** : Le nom du chien
  - **Race** : La race du chien
  - **Lieu** : Le lieu où se trouve le chien
  - **Bouton de partage** : Un bouton permettant de partager les informations du chien.
  
- En haut de la page, l'utilisateur peut saisir un lieu pour rechercher des chiens à cet endroit. Cette fonctionnalité est prévue dans une version future.
  
- **Carte du chien** : Lorsque l'utilisateur clique sur la carte d'un chien, il est redirigé vers une page détaillant plus d'informations sur ce chien (photo, nom, race, lieu, description...).

### 3. Ajouter un chien
- Cette fonctionnalité permet à l'utilisateur d'ajouter un nouveau chien à la liste via un formulaire comprenant :
  - **Photo** : L'utilisateur peut ajouter une photo du chien, prise depuis l'appareil photo du téléphone si besoin.
  - **Nom** : Le nom du chien.
  - **Race** : La race du chien.
  - **Lieu** : Le lieu où se trouve le chien.
  - **Description (optionnelle)** : Une description facultative du chien.
  
## Fonctionnalités futures
- **Haptic** : Utiliser Capacitor pour activer la vibration à la suppression d'un chien.
- **Caméra** : Utiliser Capacitor pour permettre à l'utilisateur de prendre des photos des chiens directement via l'application.
- **Share** : Utiliser Capacitor pour partager les informations des chiens.

## Tâches à venir
1. **Implémenter la page d'accueil** avec un chien aléatoire et une explication rapide de l'application.
2. **Créer la liste des chiens** avec la géolocalisation et la possibilité de partager les informations des chiens.
3. **Implémenter la fonctionnalité d'ajout de chien** via un formulaire avec la prise de photo et les détails du chien.
4. **Recherche par lieu** sur la liste des chiens. Cette fonctionnalité est prévue dans une version future.
5. **Ajout des détails du chien** lors du clic sur la carte du chien.

## Technologies utilisées
- **Ionic** pour le développement mobile hybride.
- **Angular** pour la logique côté client.
- **Capacitor** pour les fonctionnalités natives comme la géolocalisation, la caméra et le partage.
- **TypeScript**
- **HTML / SCSS**

---

## Prérequis

Avant de lancer le projet, il faut installer :

- **Node.js**
- **npm** *(installé avec Node.js)*
- **Ionic CLI**

Pour vérifier que Node.js et npm sont bien installés :

```bash
node -v
npm -v
```
Pour installer Ionic CLI :
```bash
npm install -g @ionic/cli
```


## Installation du projet
### 1. Cloner le dépôt puis se placer dans le dossier du projet :
```bash
git clone https://github.com/Velass/Doggy.git
cd Doggy
```

### 2. Installer ensuite les dépendances :
```bash
npm install
```

### 3. Lancer le projet en local
Pour démarrer l’application dans le navigateur :
```bash
ionic serve
```
Une fois la commande lancée, l’application sera accessible à une adresse du type :
```bash
http://localhost:8100
```

### 4. Ouvrir le projet
Le projet peut être ouvert dans Visual Studio Code de deux façons :

- soit en ouvrant directement le dossier du projet depuis l’éditeur
- soit en utilisant la commande suivante dans un terminal placé dans le dossier du projet :

```bash
code .
```

### 5. Lancer le projet sur Android
Si le projet est configuré pour Android, vous pouvez l’ouvrir dans Android Studio avec :
```bash
ionic cap open android
```

## Structure générale du projet

Le projet contient notamment :
-	`src/` : code source principal de l’application
-	`android/` : projet Android généré avec Capacitor
-	`package.json` : dépendances et scripts du projet
-	`angular.json` : configuration Angular
-	`ionic.config.json` : configuration Ionic

## En cas de problème
- La commande `ionic serve` n’est pas reconnue.

Installer Ionic CLI avec :
```bash
npm install -g @ionic/cli
```
- Les dépendances ne s’installent pas.
  
Essayer :
```bash
npm install
```
ou, si besoin, supprimer `node_modules` et relancer l’installation.

- Le projet ne démarre pas
  
Vérifier être bien placé dans le dossier contenant le fichier `package.json`

## Auteur
Projet réalisé par Velass.

*Ce fichier `README.md` a été généré avec l'aide de ChatGPT, basé sur les informations et la structure fournies par l'auteur du projet.*
