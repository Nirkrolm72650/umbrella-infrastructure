# 🧪 **Umbrella Corporation - Infrastructure Simulation** 🛡️

> **"Our Business is Life Itself"**  
Bienvenue dans une infrastructure complète inspirée par **Umbrella Corporation**, une entreprise fictive de biotechnologie. Ce projet a pour objectif de recréer un environnement informatique professionnel avec un focus sur l'administration système, réseau et la cybersécurité.  

---

## 🚀 **Présentation du projet**
Ce projet est une **simulation complète** conçue pour :  
- Apprendre et mettre en pratique l'administration système et réseau.  
- Configurer et sécuriser un **Active Directory** fonctionnel.  
- Intégrer des outils de **cybersécurité** comme Wazuh, Security Onion, et OPNsense.  
- Héberger un site statique à l’image de **Umbrella Corporation**.  
- Documenter chaque étape pour présenter un portfolio **professionnel**.  

<!--🌐 **Démo du site statique** : [Umbrella Corporation - Static Website](https://tonportfolio.github.io)-->

---

## 🔧 **Composants de l'infrastructure**
### 💯 **Architecture principale :**
- **Active Directory (AD)** : Gestion des utilisateurs, groupes, et politiques (GPO).
- **Site statique Bolt** : Représente l'identité d'Umbrella dans une DMZ.
- **Sécurité** :
  - 🔍 **Security Onion** pour la surveillance réseau.
  - 🔒 **Wazuh** pour la détection d'intrusion et la gestion des logs.
  - 🔥 **Pare-feu OPNsense** pour protéger l'accès réseau.
- **Virtualisation** : Machines virtuelles pour chaque composant.

### 📂 **Structure Active Directory :**
- **Domain Name** : `umbrella.local`
- **OUs et groupes** :
  - `Research`, `Security`, `IT`, `HR`  
  - Groupes : `Admin_Security`, `R&D_Staff`, `Security_Team`

---

## 🗃️ **Fonctionnalités principales**
1. **Active Directory complet** 🏢  
   - Scripts PowerShell pour créer les utilisateurs, groupes, et personnaliser les écrans de connexion.  
   - Politique GPO avec message personnalisé :  
     *"Bienvenue chez Umbrella [Nom utilisateur] - Sécurisez votre futur."*

2. **Site statique** 🌐  
   - Hébergé dans une DMZ avec un design unique représentant Umbrella Corporation.  
   - Créé avec **Bolt**, **HTML**, **Tailwind CSS**, et **JavaScript**.  

3. **Cybersécurité intégrée** 🛡️  
   - Surveillance réseau avec **Security Onion**.  
   - Gestion des logs et alertes avec **Wazuh**.  
   - Pare-feu OPNsense avec règles personnalisées.

4. **Réseau segmenté** 🔗  
   - Configuration réseau avec DHCP, DNS, VPN, et DMZ.  
   - Scripts pour déployer automatiquement les machines virtuelles.

---

## 🗂 **Structure du dépôt**
```plaintext
umbrella-infrastructure/
├── README.md                     # Documentation principale
├── assets/                       # Fichiers médias (images, diagrammes)
│   ├── diagrams/                 # Schémas d'architecture
│   └── screenshots/              # Captures d'écran
├── active-directory/             # Scripts et configuration AD
│   ├── scripts/                  # Scripts PowerShell
│   └── policies/                 # Modèles de GPO
├── security/                     # Configurations cybersécurité
│   ├── monitoring/               # Wazuh et Security Onion
│   ├── siem_rules/               # Règles SIEM personnalisées
│   └── firewall/                 # Règles du pare-feu
├── static-site/                  # Site statique Umbrella
├── network/                      # Configuration réseau (DHCP, DNS, VPN)
├── vm-setup/                     # Scripts pour déployer les VMs
└── documentation/                # Documentation détaillée
```

---

## 📚 **Documentation**
Chaque aspect de l'infrastructure est détaillé dans les fichiers du dossier [`documentation`](documentation/) :
- **Vue d'ensemble** : [overview.md](documentation/overview.md)  
- **Active Directory** : [active_directory.md](documentation/active_directory.md)  
- **Cybersécurité** : [security_tools.md](documentation/security_tools.md)  
- **Réseau** : [network_setup.md](documentation/network_setup.md)  
- **Site statique** : [static_site.md](documentation/static_site.md)

---

## ⚙️ **Installation**
1. Clonez ce dépôt :  
   ```bash
   git clone https://github.com/ton-username/umbrella-infrastructure.git
   cd umbrella-infrastructure
   ```

2. Suivez les guides d'installation pour chaque composant :
   - **Active Directory** : [`active_directory.md`](documentation/active_directory.md)  
   - **Sécurité** : [`security_tools.md`](documentation/security_tools.md)  
   - **Réseau** : [`network_setup.md`](documentation/network_setup.md)  
   - **Site statique** : [`static_site.md`](documentation/static_site.md)  

3. Déployez les machines virtuelles avec :  
   ```powershell
   ./vm-setup/umbrella-vm-deploy.ps1
   ```

---

## 🌟 **À propos**
Ce projet est un exercice personnel pour :  
- Renforcer mes compétences en administration système et réseau.  
- Intégrer des outils de cybersécurité dans une infrastructure réaliste.  
- Présenter mes capacités techniques dans un contexte professionnel.


# umbrella-infrastructure
