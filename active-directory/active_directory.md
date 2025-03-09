# 🏢 Active Directory - Umbrella Corporation

## 📌 Introduction
Bienvenue dans l'implémentation de l'**Active Directory** de **Umbrella Corporation**. Cette infrastructure est conçue pour simuler un environnement sécurisé et organisé, avec des rôles et des permissions bien définis.

## 🗂️ Arborescence des Unités Organisationnelles (OU)
```
UmbrellaCorp.local
│── 📂 Umbrella_HQ
│   ├── 📂 Management
│   ├── 📂 Security
│   ├── 📂 Research
│   ├── 📂 IT
│   ├── 📂 HR
│   ├── 📂 Legal
│
│── 📂 Umbrella_Security
│   ├── 📂 SOC
│   ├── 📂 Blue Team
│   ├── 📂 Red Team
│   ├── 📂 Threat Intelligence
│
│── 📂 Umbrella_Research
│   ├── 📂 Virology
│   ├── 📂 Biotech
│   ├── 📂 Robotics
│
│── 📂 Umbrella_Operations
│   ├── 📂 Field_Agents
│   ├── 📂 Logistics
│   ├── 📂 Medical
```

## 👥 Groupes de Sécurité et Attributions

| 📌 Groupe                     | 🎯 Description                          | 📍 OU d'appartenance            |
|--------------------------------|-----------------------------------------|---------------------------------|
| **Umbrella_Admins**           | Administrateurs AD                      | Umbrella_HQ/IT                 |
| **Security_Team**             | Équipe de Sécurité interne              | Umbrella_Security              |
| **SOC_Analysts**              | Analysts SOC                            | Umbrella_Security/SOC          |
| **Red_Team**                  | Pentesters internes                     | Umbrella_Security/Red Team     |
| **Blue_Team**                 | Défenseurs du réseau                    | Umbrella_Security/Blue Team    |
| **Threat_Intelligence**       | Analyse des menaces                     | Umbrella_Security/Threat Intel |
| **Virology_Researchers**      | Chercheurs en virologie                 | Umbrella_Research/Virology     |
| **Biotech_Developers**        | Ingénieurs en biotechnologie            | Umbrella_Research/Biotech      |
| **Robotics_Engineers**        | Ingénieurs en robotique                 | Umbrella_Research/Robotics     |
| **Field_Agents**              | Agents de terrain                       | Umbrella_Operations/Field_Agents |

## 🎭 Exemples d'Utilisateurs et Groupes Associés

| 👤 Utilisateur          | 🎖️ Rôle                             | 📂 OU                     | 🔒 Groupe(s) |
|------------------------|---------------------------------|--------------------------|-------------|
| **Albert.Wesker**     | Directeur de la Sécurité       | Umbrella_Security        | Security_Team, Red_Team |
| **Alice.Abernathy**   | Chercheuse en R&D             | Umbrella_Research        | Biotech_Developers |
| **Chris.Redfield**    | Responsable Sécurité Interne  | Umbrella_Security/SOC    | SOC_Analysts, Blue_Team |

## 🔐 GPOs (Group Policy Objects)

| 📜 Nom de la GPO             | 🎯 Objectif                                   | 📌 Appliqué à             |
|------------------------------|---------------------------------------------|-------------------------|
| **GPO_Login_Message**        | Personnalisation du message de connexion   | Tous les postes         |
| **GPO_Security_Restrictions** | Renforcement des politiques de sécurité    | Umbrella_Security       |
| **GPO_IT_Hardening**         | Configuration avancée des postes IT        | Umbrella_HQ/IT          |
| **GPO_File_Share_Permissions** | Gestion des permissions des partages réseau | Umbrella_Operations     |

## 📂 Partages Réseau

| 📌 Nom du partage        | 📍 Emplacement | 👥 Accès autorisé |
|-------------------------|---------------|----------------|
| **\UmbrellaCorp\R&D**  | `\SRV-RD01`   | Biotech, Virology |
| **\UmbrellaCorp\Security** | `\SRV-Sec01`  | Red Team, Blue Team |
| **\UmbrellaCorp\SOC**   | `\SRV-SOC01`  | SOC Analysts |

## 🏗️ Automatisation - Script PowerShell de Création des Utilisateurs

```powershell
Import-Module ActiveDirectory

$Users = @(
    @{ Name='Albert.Wesker'; Department='Security'; Group='Security_Team,Red_Team' },
    @{ Name='Alice.Abernathy'; Department='Research'; Group='Biotech_Developers' },
    @{ Name='Chris.Redfield'; Department='Security'; Group='SOC_Analysts,Blue_Team' }
)

Foreach ($User in $Users) {
    New-ADUser -Name $User.Name -SamAccountName $User.Name -UserPrincipalName "$($User.Name)@umbrella.local" -Path "OU=$($User.Department),DC=umbrella,DC=local" -AccountPassword (ConvertTo-SecureString "Umbrella2024!" -AsPlainText -Force) -Enabled $true
    $Groups = $User.Group -split ","
    Foreach ($Group in $Groups) {
        Add-ADGroupMember -Identity $Group -Members $User.Name
    }
}
```

## 🌍 Conclusion
L'Active Directory d'Umbrella Corporation est conçu pour être une infrastructure complète et bien organisée. Il intègre des rôles spécifiques, une hiérarchie stricte et des politiques de sécurité avancées. 🚀

🔥 **Restez prudents. La sécurité avant tout !** 🛡️
