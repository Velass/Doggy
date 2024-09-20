# Doggy

Doggy est une application mobile développée avec Ionic et Angular qui permet aux utilisateurs de consulter une liste de chiens, d'ajouter de nouveaux chiens et de voir des détails sur chaque chien. L'application vise à offrir une interface simple et conviviale pour découvrir des chiens près de chez soi.

## Fonctionnalités principales

### 1. Page d'accueil
- La page d'accueil donne une brève explication de l'application et permet aux utilisateurs de se familiariser rapidement avec l'interface. Elle affiche également un chien aléatoire.

### 2. Liste des chiens
- La liste des chiens affiche tous les chiens ajoutés, avec les informations suivantes :
  - **Image** : Une photo du chien.
  - **Nom** : Le nom du chien.
  - **Race** : La race du chien.
  - **Lieu** : Le lieu où se trouve le chien.
  - **Bouton de partage** : Un bouton permettant de partager les informations du chien.
  
- En haut de la page, l'utilisateur mettre un lieu pour rechercher des chiens a cet endroit. "à venir"
  
- **Carte du chien** : Lorsque l'utilisateur clique sur la carte d'un chien, il est redirigé vers une page détaillant plus d'informations sur ce chien (photo, nom, race, lieu, description...).

### 3. Ajouter un chien
- Cette fonctionnalité permet à l'utilisateur d'ajouter un nouveau chien à la liste via un formulaire comprenant :
  - **Photo** : L'utilisateur peut ajouter une photo du chien, prise depuis l'appareil photo du téléphone si besoin.
  - **Nom** : Le nom du chien.
  - **Race** : La race du chien.
  - **Lieu** : Le lieu où se trouve le chien.
  - **Description (optionnelle)** : Une description facultative du chien.
  
## Fonctionnalités futures
- **Haptic** : Utiliser Capacitor pour activer la Vibration a la suppression d'un chien.
- **Caméra** : Utiliser Capacitor pour permettre à l'utilisateur de prendre des photos des chiens directement via l'application.
- **Share** : Utiliser Capacitor pour partager les informations des chiens.

## Tâches à venir
1. **Implémenter la page d'accueil** avec un chien aléatoire et une explication rapide de l'application.
2. **Créer la liste des chiens** avec la géolocalisation et la possibilité de partager les informations des chiens.
3. **Implémenter la fonctionnalité d'ajout de chien** via un formulaire avec la prise de photo et les détails du chien.
4. **Recherche par lieux** sur la liste des chiens. "à venir"
5. **Ajout des détails du chien** lors du clic sur la carte du chien.

## Technologies utilisées
- **Ionic** pour le développement mobile hybride.
- **Angular** pour la logique côté client.
- **Capacitor** pour les fonctionnalités natives comme la géolocalisation, la caméra et le partage.

---

*Ce fichier `README.md` a été généré avec l'aide de ChatGPT, basé sur les informations et la structure fournies par l'auteur du projet.*
