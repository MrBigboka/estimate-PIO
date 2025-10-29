// Offre unique pour l'estimation du projet P.I.O — Shopify

import type { OfferConfig, Step } from "./config_old";

// Export des types depuis config_old
export type { SubStep, Step, OverviewFeature, OfferConfig, ProjectMonth } from "./config_old";

// Échelle de complexité
export const COMPLEXITY_SCORE: Record<"Faible" | "Moyenne" | "Élevée", number> = {
  Faible: 1,
  Moyenne: 3,
  Élevée: 7,
};

// ===============================
// 🔹 OFFRE PRINCIPALE — P.I.O
// ===============================
export const OFFER: OfferConfig = {
  id: "pio-shopify",
  name: "P.I.O – Boutique Shopify complète",
  conceptSummary: {
    name: "P.I.O — Boutique Shopify haut de gamme",
    description:
      "Refonte complète d'un e-commerce Shopify pour P.I.O : expérience sur mesure intégrant boutique, mesure personnalisée, fidélité, retours automatisés et intégrations AI (photos, SEO, Klaviyo).",
  },
  steps: [
    {
      id: 0,
      name: "Phase 0 — Setup & Environnement Shopify",
      color: "#6B7280",
      backendNotes: [
        "Stack : Shopify + Thème custom (Liquid + Tailwind), Klaviyo, Loop, Growave",
        "Configuration du store, taxes, paiements, livraisons, domaines, comptes",
        "Base : Shopify Advanced avec accès API complet",
      ],
      subSteps: [
        { title: "Setup du store + environnement de test", hours: 6, complexity: "Moyenne", description: "Configuration du store Shopify, domaines, paiements, modes de test" },
        { title: "Installation du thème custom (Liquid + Tailwind)", hours: 6, complexity: "Moyenne", description: "Base front avec sections modulaires et composants personnalisés" },
        { title: "Configuration produits et collections", hours: 6, complexity: "Moyenne", description: "Création des collections, variantes et tags de filtrage" },
      ],
    },
    {
      id: 1,
      name: "Phase 1 — Pages structurantes",
      color: "#2563EB",
      backendNotes: [
        "Pages : Home, About us (Mission, Valeurs, Fondatrice), Collections, FAQ, Politique, Contact",
        "Sections réutilisables et contenus administrables",
      ],
      subSteps: [
        { title: "Page Home + Hero section + Collections dynamiques", hours: 8, complexity: "Élevée", description: "Page d'accueil immersive avec mise en avant des produits" },
        { title: "Page About us (Fondatrice, Mission, Valeurs)", hours: 5, complexity: "Faible", description: "Page statique structurée avec sections textuelles et images pour la fondatrice et valeurs de l'entreprise" },
        { title: "FAQ + Pages politiques légales", hours: 3, complexity: "Faible", description: "Ajout du centre d'aide et pages statiques (retours, confidentialité)" },
      ],
    },
    {
      id: 2,
      name: "Phase 2 — Shop & Filtres intelligents",
      color: "#10B981",
      backendNotes: [
        "Système de filtres : catégorie, marque, taille, couleur, prix, nouveautés",
        "Collections dynamiques : New Arrivals, Best Picks, Essentials, Collections du mois",
        "Compatibilité SEO + performance",
      ],
      subSteps: [
        { title: "Shop all + vue collection + filtres combinés", hours: 10, complexity: "Élevée", description: "Composants de filtres dynamiques avec tri et double sélection" },
        { title: "Intégration filtre prix / couleur / nouveautés", hours: 6, complexity: "Moyenne", description: "Filtres avancés multi-critères configurables" },
        { title: "Recherche et mots-clés (Shopify Search & Discovery)", hours: 4, complexity: "Moyenne", description: "Configuration de la recherche intelligente par tags" },
        { title: "Collections dynamiques (New Arrivals, Best Picks, Essentials, Collections du mois)", hours: 3, complexity: "Faible", description: "Configuration des collections automatiques basées sur tags et dates" },
      ],
    },
    {
      id: 3,
      name: "Phase 3 — Mesures & Fitting intelligent",
      color: "#9333EA",
      backendNotes: [
        "Intégration Kiwi sizing + table de tailles + tutoriels",
        "Automatisation mesure + pages d'aide",
        "Note : Intégration standard de Kiwi Sizing. Toute customisation avancée du widget sera facturée en extra.",
      ],
      subSteps: [
        { title: "Tables de tailles dynamiques", hours: 6, complexity: "Moyenne", description: "Création de tables responsive pour différentes catégories" },
        { title: "Intégration Kiwi sizing (custom tab + modal)", hours: 9, complexity: "Élevée", description: "Ajout module de mesure interactif dans page produit avec configuration standard" },
        { title: "Tutoriels et astuces de mesure (vidéo/image)", hours: 4, complexity: "Faible", description: "Page conseils et vidéos pour aider les clientes" },
      ],
    },
    {
      id: 4,
      name: "Phase 4 — Profil & Fidélité",
      color: "#F59E0B",
      backendNotes: [
        "Portail client Growave : points, favoris, préférences, membership",
        "Klaviyo : automatisations email et récompenses",
        "Magical Preorder intégré pour membres exclusifs",
      ],
      subSteps: [
        { title: "Portail client (infos, préférences, favoris)", hours: 10, complexity: "Élevée", description: "Pages profil client personnalisées via Growave" },
        { title: "Points de fidélité + économies affichées", hours: 6, complexity: "Moyenne", description: "Système de points et affichage économies panier" },
        { title: "Membership / La Voute (espace VIP basique)", hours: 7, complexity: "Élevée", description: "Espace réservé aux membres premium avec tags VIP et prix exclusifs via Growave" },
        { title: "Magical Preorder (pour membres)", hours: 5, complexity: "Moyenne", description: "Intégration des preorders exclusifs réservés aux membres via Growave" },
      ],
    },
    {
      id: 5,
      name: "Phase 5 — Checkout & Retours",
      color: "#EF4444",
      backendNotes: [
        "Checkout extensible : Planet, Protect my Order, Parcel Panel",
        "Retours automatisés : Loop (solution principale recommandée)",
        "Note : Coolify peut être ajouté mais augmentera les heures de 4-5h pour l'intégration coordonnée",
      ],
      subSteps: [
        { title: "Checkout custom (Planet + Protect my Order)", hours: 6, complexity: "Moyenne", description: "Intégration des apps dans le flux de paiement" },
        { title: "Retours automatisés (Loop)", hours: 6, complexity: "Élevée", description: "Flux retour client automatisé avec notifications et portail Loop" },
        { title: "Parcel Panel (tracking de livraison)", hours: 3, complexity: "Moyenne", description: "Configuration du suivi de commande personnalisé" },
        { title: "Rappel politique de retour + disclaimers", hours: 3, complexity: "Faible", description: "Ajout sections légales au checkout" },
      ],
    },
    {
      id: 6,
      name: "Phase 6 — SEO, AI & Performance",
      color: "#0EA5E9",
      backendNotes: [
        "SEO Store AI : meta descriptions et titles automatiques",
        "Botika : génération AI de visuels produits",
        "Vitals : monitoring performance & UX",
        "Shopify Chat : configuration du module de conversation",
      ],
      subSteps: [
        { title: "SEO Store AI : description et métas auto", hours: 4, complexity: "Moyenne", description: "Intégration automatisée SEO AI sur produits et collections" },
        { title: "Botika (photos AI)", hours: 4, complexity: "Faible", description: "Connexion Botika pour générer visuels réalistes de produits" },
        { title: "Optimisation performance (Vitals)", hours: 4, complexity: "Moyenne", description: "Audit Core Web Vitals + correctifs front" },
        { title: "Configuration Shopify Chat", hours: 2, complexity: "Faible", description: "Setup du chat client et intégration avec le thème" },
      ],
    },
    {
      id: 7,
      name: "Phase 7 — QA, Formation & Lancement",
      color: "#14B8A6",
      backendNotes: [
        "Tests internes techniques + Phase de recette client (UAT)",
        "Formation administrateurs",
        "Lancement progressif + monitoring post-launch",
      ],
      subSteps: [
        { title: "Tests internes et techniques", hours: 8, complexity: "Moyenne", description: "Tests techniques effectués par l'équipe sur navigateurs de référence (Chrome desktop/mobile)" },
        { title: "Phase de recette client (UAT) + corrections", hours: 10, complexity: "Moyenne", description: "Période de 5 jours ouvrables pour tests client et corrections des bogues mineurs rapportés" },
        { title: "Formation Shopify admin", hours: 4, complexity: "Faible", description: "Session de formation à la gestion produits, commandes et apps" },
        { title: "Lancement + monitoring post-prod", hours: 4, complexity: "Moyenne", description: "Déploiement final + corrections critiques post-lancement (première semaine)" },
      ],
    },
    {
      id: 8,
      name: "Phase 8 — Formulaires & Engagement",
      color: "#EC4899",
      backendNotes: [
        "Formulaires custom pour devenir ambassadrice et membre",
        "Intégration avec Klaviyo pour automatisations email",
      ],
      subSteps: [
        { title: "Formulaire 'Devenir ambassadrice'", hours: 3, complexity: "Faible", description: "Formulaire custom avec intégration Klaviyo pour qualification des ambassadrices" },
        { title: "Formulaire 'Devenir membre' + Infolettre", hours: 3, complexity: "Faible", description: "Formulaires d'inscription avec automation Klaviyo pour onboarding membres" },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Expérience e-commerce premium sur mesure", icon: "TrendingUp", color: "#2563EB" },
    { label: "Fidélité et membres intégrés via Growave", icon: "Users", color: "#9333EA" },
    { label: "Système de mesures intelligent (Kiwi sizing)", icon: "Brain", color: "#10B981" },
    { label: "Retours et durabilité via Planet & Loop", icon: "Trophy", color: "#F59E0B" },
  ],
};

// ===============================
// 🔹 OPTIONS ADDITIONNELLES
// ===============================
export const ADDITIONAL_OPTIONS: Step[] = [
  {
    id: 100,
    name: "Lookbook Vidéo",
    color: "#8B5CF6",
    disableMaxMultiplier: true,
    backendNotes: ["Ajout d'une page Lookbook avec vidéos interactives"],
    subSteps: [
      { title: "Page Lookbook + upload vidéos", hours: 10, complexity: "Moyenne", description: "Création d'une page Lookbook vidéo immersive" },
    ],
  },
  {
    id: 101,
    name: "Assistant AI produit",
    color: "#10B981",
    disableMaxMultiplier: true,
    backendNotes: ["Assistant OpenAI pour suggestions produits et tailles"],
    subSteps: [
      { title: "Assistant AI (suggestions de taille ou produits)", hours: 16, complexity: "Élevée", description: "Chat AI intégré dans le store pour aider les clientes" },
    ],
  },
  {
    id: 103,
    name: "Mode d'essayage virtuel (AI Fit)",
    color: "#EF4444",
    disableMaxMultiplier: true,
    backendNotes: ["Utilisation d'un modèle 3D AI Fit via Botika ou Vue.ai"],
    subSteps: [
      { title: "Essayage virtuel AI", hours: 24, complexity: "Élevée", description: "Intégration d'un module d'essayage AI (visuel 3D sur mannequin)" },
    ],
  },
  {
    id: 104,
    name: "La Voute Premium (contenu exclusif avancé)",
    color: "#7C3AED",
    disableMaxMultiplier: true,
    backendNotes: [
      "Upgrade de La Voute basique vers expérience premium complète",
      "Portail privé avec contenu exclusif, preorders early access, événements membres",
    ],
    subSteps: [
      { title: "La Voute Premium", hours: 8, complexity: "Élevée", description: "Transformation de l'espace membre en portail premium avec contenu exclusif, calendrier événements et early access produits" },
    ],
  },
  {
    id: 105,
    name: "Intégration Coolify (en plus de Loop)",
    color: "#F97316",
    disableMaxMultiplier: true,
    backendNotes: [
      "Ajout de Coolify pour compléter Loop",
      "Nécessite coordination entre les deux plateformes de retours",
    ],
    subSteps: [
      { title: "Intégration Coolify + coordination avec Loop", hours: 5, complexity: "Moyenne", description: "Configuration de Coolify et synchronisation avec le flux Loop existant" },
    ],
  },
];

// ===============================
// 🔹 MÉTRIQUES ET TIMELINE
// ===============================
export const COST_PER_HOUR = 135;
export const HOURS_MAX_MULTIPLIER = 1.15;
export const SIGN_LINK = "";

// Note sur les frais d'abonnements Shopify Apps (à inclure dans la proposition)
export const MONTHLY_APP_COSTS_NOTE = `
💳 FRAIS D'ABONNEMENTS TIERS (non inclus dans l'estimation)

Cette estimation couvre le développement et l'intégration. Un budget mensuel additionnel 
de 350-500 CAD/mois est requis pour les abonnements aux applications Shopify :

- Growave (fidélité & portail client) : ~200 CAD/mois
- Loop (retours automatisés) : ~80 CAD/mois  
- Kiwi Sizing (mesures intelligentes) : ~40 CAD/mois
- Apps supplémentaires (SEO AI, Botika, Vitals, Chat, Parcel Panel) : ~50-100 CAD/mois

*Estimation basée sur les plans Growth nécessaires pour ce niveau de customisation.
Les coûts réels peuvent varier selon le volume de commandes et les fonctionnalités activées.
`;

export const PROJECT_SCHEDULE = [
  { name: "Semaines 1-2", percent: 0.22 },
  { name: "Semaines 3-4", percent: 0.24 },
  { name: "Semaines 5-6", percent: 0.24 },
  { name: "Semaines 7-8", percent: 0.18 },
  { name: "Semaines 9-10", percent: 0.12 },
];

export const TIMELINE_DATA = [
  { month: "Semaine 1", planning: 30, development: 0, testing: 0, deployment: 0 },
  { month: "Semaine 2", planning: 60, development: 15, testing: 0, deployment: 0 },
  { month: "Semaine 3", planning: 80, development: 40, testing: 5, deployment: 0 },
  { month: "Semaine 4", planning: 90, development: 60, testing: 20, deployment: 0 },
  { month: "Semaine 5", planning: 100, development: 75, testing: 40, deployment: 10 },
  { month: "Semaine 6", planning: 100, development: 88, testing: 60, deployment: 30 },
  { month: "Semaine 7", planning: 100, development: 96, testing: 80, deployment: 50 },
  { month: "Semaine 8", planning: 100, development: 100, testing: 92, deployment: 70 },
  { month: "Semaine 9", planning: 100, development: 100, testing: 98, deployment: 90 },
  { month: "Semaine 10", planning: 100, development: 100, testing: 100, deployment: 100 },
];

// ===============================
// 🔹 VARIANTES (2m → 12m)
// ===============================

export const PROJECT_SCHEDULE_VARIANTS: Record<string, { name: string; percent: number }[]> = {
  "2m": [
    { name: "Mois 1", percent: 0.6 },
    { name: "Mois 2", percent: 0.4 },
  ],
  "3m": [
    { name: "Mois 1", percent: 0.4 },
    { name: "Mois 2", percent: 0.35 },
    { name: "Mois 3", percent: 0.25 },
  ],
  "4m": [
    { name: "Mois 1", percent: 0.3 },
    { name: "Mois 2", percent: 0.3 },
    { name: "Mois 3", percent: 0.25 },
    { name: "Mois 4", percent: 0.15 },
  ],
  "6m": [
    { name: "Mois 1", percent: 0.2 },
    { name: "Mois 2", percent: 0.18 },
    { name: "Mois 3", percent: 0.17 },
    { name: "Mois 4", percent: 0.17 },
    { name: "Mois 5", percent: 0.15 },
    { name: "Mois 6", percent: 0.13 },
  ],
  "8m": [
    { name: "Mois 1", percent: 0.16 },
    { name: "Mois 2", percent: 0.14 },
    { name: "Mois 3", percent: 0.13 },
    { name: "Mois 4", percent: 0.12 },
    { name: "Mois 5", percent: 0.12 },
    { name: "Mois 6", percent: 0.11 },
    { name: "Mois 7", percent: 0.11 },
    { name: "Mois 8", percent: 0.11 },
  ],
  "12m": [
    { name: "Mois 1", percent: 0.1 },
    { name: "Mois 2", percent: 0.09 },
    { name: "Mois 3", percent: 0.09 },
    { name: "Mois 4", percent: 0.08 },
    { name: "Mois 5", percent: 0.08 },
    { name: "Mois 6", percent: 0.08 },
    { name: "Mois 7", percent: 0.08 },
    { name: "Mois 8", percent: 0.08 },
    { name: "Mois 9", percent: 0.08 },
    { name: "Mois 10", percent: 0.08 },
    { name: "Mois 11", percent: 0.08 },
    { name: "Mois 12", percent: 0.08 },
  ],
};

export const TIMELINE_DATA_VARIANTS: Record<
  string,
  { month: string; planning: number; development: number; testing: number; deployment: number }[]
> = {
  "2m": [
    { month: "Mois 1", planning: 70, development: 20, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "3m": [
    { month: "Mois 1", planning: 40, development: 10, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 80, development: 50, testing: 20, deployment: 0 },
    { month: "Mois 3", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "4m": [
    { month: "Mois 1", planning: 30, development: 0, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 70, development: 30, testing: 10, deployment: 0 },
    { month: "Mois 3", planning: 100, development: 70, testing: 40, deployment: 10 },
    { month: "Mois 4", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "6m": [
    { month: "Mois 1", planning: 30, development: 0, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 60, development: 10, testing: 0, deployment: 0 },
    { month: "Mois 3", planning: 80, development: 40, testing: 10, deployment: 0 },
    { month: "Mois 4", planning: 100, development: 70, testing: 30, deployment: 0 },
    { month: "Mois 5", planning: 100, development: 90, testing: 60, deployment: 20 },
    { month: "Mois 6", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "8m": [
    { month: "Mois 1", planning: 20, development: 0, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 40, development: 10, testing: 0, deployment: 0 },
    { month: "Mois 3", planning: 60, development: 30, testing: 10, deployment: 0 },
    { month: "Mois 4", planning: 80, development: 50, testing: 20, deployment: 0 },
    { month: "Mois 5", planning: 100, development: 70, testing: 40, deployment: 10 },
    { month: "Mois 6", planning: 100, development: 85, testing: 60, deployment: 20 },
    { month: "Mois 7", planning: 100, development: 95, testing: 80, deployment: 50 },
    { month: "Mois 8", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "12m": [
    { month: "Mois 1", planning: 10, development: 0, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 20, development: 5, testing: 0, deployment: 0 },
    { month: "Mois 3", planning: 40, development: 15, testing: 0, deployment: 0 },
    { month: "Mois 4", planning: 60, development: 25, testing: 10, deployment: 0 },
    { month: "Mois 5", planning: 80, development: 40, testing: 20, deployment: 0 },
    { month: "Mois 6", planning: 100, development: 55, testing: 30, deployment: 10 },
    { month: "Mois 7", planning: 100, development: 70, testing: 45, deployment: 15 },
    { month: "Mois 8", planning: 100, development: 80, testing: 60, deployment: 30 },
    { month: "Mois 9", planning: 100, development: 90, testing: 75, deployment: 45 },
    { month: "Mois 10", planning: 100, development: 95, testing: 85, deployment: 60 },
    { month: "Mois 11", planning: 100, development: 100, testing: 95, deployment: 80 },
    { month: "Mois 12", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
};