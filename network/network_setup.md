# 🌐 Network Setup - Umbrella Corporation Cybersecurity Lab

## 🏗️ Infrastructure Réseau

### 🔹 Objectif
L'objectif de cette architecture est de fournir un environnement réaliste de cybersécurité avec une segmentation réseau adaptée pour :
- Un **SOC sécurisé**.
- Un **Active Directory complet**.
- Une **zone de test et de simulation d’attaques**.
- Une **DMZ avec services exposés**.
- Une **connexion sécurisée à Internet via pfSense**.

---

## 🖥️ Machines Virtuelles
| Nom VM            | OS                 | Rôle                           | RAM  | CPU  | Stockage  |
|------------------|------------------|------------------------------|------|------|-----------|
| **pfSense**     | pfSense           | Firewall & Load Balancer      | 2Go  | 2vCPU | 20Go SSD  |
| **DC01**        | Windows Server 2022 | Contrôleur de domaine AD      | 8Go  | 4vCPU | 60Go SSD  |
| **SOC-Server**  | Security Onion     | SIEM et analyse des logs      | 16Go | 6vCPU | 200Go SSD |
| **WS01**        | Windows 10/11      | Poste utilisateur sécurisé    | 4Go  | 2vCPU | 40Go SSD  |
| **Attacker**    | Kali Linux         | Machine de test d’attaque     | 4Go  | 2vCPU | 40Go SSD  |
| **Web-Server**  | Ubuntu 22.04       | Serveur web Umbrella (Bolt CMS) | 4Go | 2vCPU | 40Go SSD  |

---

## 🔌 Topologie Réseau

```plaintext
                INTERNET
                   │
                   │
          ┌────────▼────────┐
          │     pfSense     │ (Firewall & VPN)
          └───────┬────────┘
                  │
    ┌────────────┼────────────┐
    │            │            │
    ▼            ▼            ▼
 ActiveDir     DMZ         SOC-Network
   │           │             │
   │           │             │
 DC01       Web-Server   Security Onion
   │                          │
   │                          │
 Workstations             Analyste SOC
```

- **pfSense** : Firewall principal, gestion des VLANs et Load Balancing.
- **Active Directory Network** : Contient le DC, les postes clients et les services internes.
- **DMZ** : Contient les services exposés à Internet (site web, honeypots si nécessaire).
- **SOC Network** : Séparé du réseau principal, pour l'analyse des logs et la détection des intrusions.

---

## 🚀 Configuration Réseau
| VLAN | Réseau            | Description |
|------|------------------|-------------|
| 10   | 192.168.10.0/24  | Active Directory & Users |
| 20   | 192.168.20.0/24  | DMZ (Web, Honeypot) |
| 30   | 192.168.30.0/24  | SOC Network (Security Onion, SIEM) |

### 🔒 Règles de Sécurité (Firewall pfSense)
- **Interdiction de communication directe entre le VLAN 10 (Users) et le VLAN 30 (SOC).**
- **Filtrage strict entre le VLAN 20 (DMZ) et les autres réseaux.**
- **Accès restreint à Internet pour le VLAN SOC sauf pour Threat Intelligence Feeds.**
- **NAT et Reverse Proxy pour exposer uniquement le site web en DMZ.**

---

## 📡 Connexion Internet pour le SOC
Le SOC aura un accès limité à Internet via pfSense pour :
- **Récupération de Threat Intelligence Feeds (MITRE, AlienVault OTX, etc.).**
- **Mises à jour des outils de détection (Suricata, Zeek, Wazuh).**
- **Aucune navigation directe sur Internet depuis le SOC.**

---

## ✅ Prochaines Étapes
- [ ] Configurer pfSense avec VLANs et règles de firewall.
- [ ] Installer et configurer le DC et les comptes utilisateurs.
- [ ] Déployer Security Onion et connecter les logs des différentes VMs.
- [ ] Tester l'accès Internet pour le SOC et ajuster les règles de sécurité.

---

💉 *Bienvenue chez Umbrella Corporation - La sécurité avant tout.* 🔬🛡️