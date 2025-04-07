# 🚗 Plateforme MERN - Réparation & Pièces Auto

Ce projet consiste à développer une **plateforme web** intuitive dédiée à l'achat de pièces automobiles, à la mise en relation avec des mécaniciens qualifiés, et à l’amélioration des performances de véhicules. L’architecture est construite sur le **stack MERN** : MongoDB, Express.js, React.js et Node.js.

## 🎯 Objectifs

- Acheter des pièces selon **marque** et **modèle** du véhicule.
- Prendre rendez-vous avec des **mécaniciens qualifiés**.
- Noter les **prestataires** et les **produits**.
- Estimer les performances d’un véhicule après modification.

## 👥 Acteurs de la plateforme

- **Clients** (particuliers ou pros)
- **Mécaniciens**
- **Fournisseurs**
- **Administrateurs**

## ⚙️ Fonctionnalités

### 👤 Clients

- Création de compte (email / réseaux sociaux)
- Recherche de pièces par marque et modèle
- Filtres (prix, avis, compatibilité)
- Panier, commande, suivi
- Prise de rendez-vous avec un mécanicien
- Ajout d’avis et notes
- Estimation des performances (comparatif avant/après)

### 🧰 Mécaniciens

- Création et gestion du profil (localisation, compétences, tarif)
- Gestion des rendez-vous
- Consultation de l’historique de services
- Réponses aux commentaires

### 🏷️ Fournisseurs

- Gestion de stock : ajout/modif/suppression de pièces
- Mise à jour du prix, quantités, photos
- Traitement des commandes
- Suivi des ventes et retours
- Paiements sécurisés

### 🔐 Administrateurs

- Gestion des utilisateurs (validation, suspension)
- Statistiques d’utilisation
- Gestion des litiges
- Surveillance de la conformité (sécurité, RGPD)

## 🧪 Technologies utilisées

- **Frontend** : React.js
- **Backend** : Node.js + Express.js
- **Base de données** : MongoDB
- **Authentification** : JWT, 2FA (authentification à deux facteurs)
- **Sécurité** : Validation des entrées, CSRF, XSS, HTTPS

## 🚀 Exigences non fonctionnelles

- 🔄 Temps de réponse rapide
- ☁️ Hébergement scalable (AWS / Azure / GCP)
- 🔒 Journalisation des accès et erreurs
- 📱 Interface responsive
- 🎨 Design ergonomique et moderne

## 📁 Installation & Lancement

```bash
# Cloner le dépôt
git clone https://github.com/abdelkrim-essassi/Mern-car-Repair.git
cd Mern-car-Repair

# Installer le backend
cd backend
npm install
npm run dev

# Installer le frontend
cd ../frontend
npm install
npm start
