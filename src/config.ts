// Configuration MVP optimisée pour P.I.O — Shopify
// Version LITE: offre de base = Produits + Collections + Checkout (phases 0,1,5)
// Les autres phases (2,3,4,6,7) sont déplacées en options additionnelles (mêmes IDs)

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
// 🔹 OFFRE MVP — P.I.O (VERSION LITE)
// ===============================
export const OFFER: OfferConfig = {
  id: "pio-shopify-optimization-lite",
  name: "P.I.O – Mise en marché (Lite)",
  conceptSummary: {
    name: "P.I.O — Optimisation & Mise en marché Shopify (Lite)",
    description:
      "Offre de base centrée sur la mise en vente rapide : audit, import produits, collections dynamiques et validation du checkout. Toutes les autres fonctionnalités avancées sont proposées en options additionnelles.",
  },
  steps: [
    // ✅ Phase 0 — Incluse
    {
      id: 0,
      name: "Phase 0 — Audit & Configuration produits",
      color: "#6B7280",
      backendNotes: [
        "Audit de l'existant (thème Prestige, analytics, apps déjà en place)",
        "Import de 15-25 produits avec photos, descriptions, variantes",
        "Configuration des collections de base",
        "Note : Le store Shopify est déjà configuré (paiements, domaines, taxes OK)",
      ],
      subSteps: [
        { title: "Audit technique de l'existant", hours: 3, complexity: "Faible", description: "Vérification de la configuration actuelle, apps installées, analytics" },
        { title: "Import et configuration de 15-25 produits", hours: 12, complexity: "Moyenne", description: "Import produits avec photos, descriptions, prix, variantes, tags" },
        { title: "Configuration collections de base", hours: 4, complexity: "Faible", description: "Création des collections New Arrivals, Best Picks, Essentials" },
      ],
    },
    // ✅ Phase 1 — Incluse
    {
      id: 1,
      name: "Phase 1 — Pages structurantes optimisées",
      color: "#2563EB",
      backendNotes: [
        "Optimisation des pages existantes (Home, About déjà présentes)",
        "Création FAQ (absente actuellement)",
        "Amélioration storytelling About us",
        "Pages politiques déjà OK, vérification contenu",
      ],
      subSteps: [
        { title: "Optimisation Home + Hero + sections produits", hours: 4, complexity: "Faible", description: "Amélioration de la page d'accueil existante avec sections dynamiques" },
        { title: "Refonte page About us (Storytelling + Fondatrice)", hours: 4, complexity: "Faible", description: "Enrichissement du contenu avec mission, valeurs, histoire authentique" },
        { title: "Création page FAQ structurée", hours: 4, complexity: "Faible", description: "Nouvelle page FAQ avec sections aide, retours, mesures" },
        { title: "Révision pages légales + Contact", hours: 1, complexity: "Faible", description: "Vérification et ajustements mineurs" },
      ],
    },
    // ✅ Phase 2 — Incluse (Checkout & Retours light = test checkout uniquement)
    {
      id: 2,
      name: "Phase 2 — Checkout optimisé (validation de base)",
      color: "#EF4444",
      backendNotes: [
        "Checkout Shopify déjà fonctionnel",
        "Dans la version Lite : validation du flux sans apps payantes",
        "Les intégrations Planet / Protect my Order / Parcel Panel / Loop sont en options",
      ],
      subSteps: [
        { title: "Vérification du flux Checkout (panier → paiement)", hours: 2, complexity: "Faible", description: "Tests taxes, livraisons, confirmations email" },
        { title: "Ajustements mineurs (libellés, liens politiques)", hours: 1, complexity: "Faible", description: "Rappels politiques, disclaimers et liens utiles" },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Mise en marché rapide avec base existante", icon: "TrendingUp", color: "#2563EB" },
    { label: "Produits + Collections + Checkout validés", icon: "ArrowRight", color: "#10B981" },
    { label: "Aucun lock-in d’apps payantes", icon: "Brain", color: "#10B981" },
    { label: "Extensions disponibles à la carte", icon: "Trophy", color: "#F59E0B" },
  ],
};

// ===============================
// 🔹 OPTIONS ADDITIONNELLES
// (Phases complètes déplacées + options 100-105 conservées)
// ===============================
export const ADDITIONAL_OPTIONS: Step[] = [
  // 🔁 Option — Filtres & Navigation intelligente
  {
    id: 3,
    name: "Filtres & Navigation intelligente",
    color: "#10B981",
    backendNotes: [
      "Filtres catégorie/taille déjà présents mais non alimentés",
      "Ajout filtres prix, couleur, nouveautés",
      "Configuration collections dynamiques automatiques",
      "Utilisation Search & Discovery natif Shopify",
    ],
    subSteps: [
      { title: "Activation et optimisation filtres existants", hours: 3, complexity: "Faible", description: "Configuration des filtres par catégorie, taille, marque déjà en place" },
      { title: "Ajout filtres avancés (prix, couleur, nouveautés)", hours: 4, complexity: "Moyenne", description: "Intégration de filtres supplémentaires multi-critères" },
      { title: "Configuration collections dynamiques automatiques", hours: 3, complexity: "Faible", description: "Règles auto pour New Arrivals, Best Picks basées sur tags/dates" },
      { title: "Optimisation recherche par mots-clés", hours: 2, complexity: "Faible", description: "Configuration Search & Discovery avec tags intelligents" },
    ],
  },
  // 🔁 Option — Mesures intelligentes (Kiwi Sizing)
  {
    id: 4,
    name: "Mesures intelligentes (Kiwi Sizing)",
    color: "#9333EA",
    backendNotes: [
      "Installation et intégration standard de Kiwi Sizing",
      "Tables de tailles dynamiques par catégorie",
      "Page tutoriel mesures",
      "Note : Configuration standard uniquement, customisation avancée en extra",
    ],
    subSteps: [
      { title: "Installation et configuration Kiwi Sizing", hours: 4, complexity: "Moyenne", description: "Setup de base de l'app avec intégration dans pages produits" },
      { title: "Tables de tailles dynamiques", hours: 3, complexity: "Moyenne", description: "Création tables responsive par catégorie (hauts, bas, robes, chaussures)" },
      { title: "Page tutoriels et astuces mesures", hours: 2, complexity: "Faible", description: "Page d'aide avec guides visuels pour mesures" },
    ],
  },
  // 🔁 Option — Fidélité & Portail client (Growave)
  {
    id: 5,
    name: "Fidélité & Portail client (Growave)",
    color: "#F59E0B",
    backendNotes: [
      "Installation Growave pour remplacer SE Wishlist actuel",
      "Portail client avec favoris, points, préférences",
      "La Voute basique (espace membre avec tags VIP)",
      "Intégration Magical Preorder pour membres",
    ],
    subSteps: [
      { title: "Installation et configuration Growave", hours: 4, complexity: "Moyenne", description: "Setup app, migration wishlist SE vers Growave" },
      { title: "Portail client (favoris, infos, préférences)", hours: 5, complexity: "Moyenne", description: "Configuration du portail client personnalisé" },
      { title: "Système points de fidélité + économies", hours: 4, complexity: "Moyenne", description: "Setup règles de points et affichage économies panier" },
      { title: "La Voute (espace membre basique)", hours: 4, complexity: "Moyenne", description: "Espace VIP avec tags membres et prix exclusifs" },
      { title: "Magical Preorder pour membres", hours: 3, complexity: "Moyenne", description: "Configuration preorders exclusifs membres" },
    ],
  },
  // 🔁 Option — Email Marketing (Klaviyo)
  {
    id: 6,
    name: "Email Marketing (Klaviyo)",
    color: "#EC4899",
    backendNotes: [
      "Popup newsletter déjà en place via Uppush",
      "Installation Klaviyo pour automatisations",
      "Séquences essentielles : Bienvenue, Abandon panier, Post-achat",
      "Migration des emails collectés",
    ],
    subSteps: [
      { title: "Installation et configuration Klaviyo", hours: 3, complexity: "Moyenne", description: "Setup de base, connexion Shopify, migration emails" },
      { title: "Séquence Bienvenue (Welcome series)", hours: 2, complexity: "Faible", description: "Flow d'onboarding pour nouveaux abonnés" },
      { title: "Séquence Abandon panier", hours: 2, complexity: "Faible", description: "Flow de récupération des paniers abandonnés" },
      { title: "Séquence Post-achat + Demande avis", hours: 2, complexity: "Faible", description: "Flow de suivi après commande" },
      { title: "Intégration formulaires ambassadrice/membre", hours: 2, complexity: "Faible", description: "Formulaires custom avec automation Klaviyo" },
    ],
  },
  // 🔁 Option — QA, Formation & Lancement
  {
    id: 7,
    name: "QA, Formation & Lancement",
    color: "#14B8A6",
    backendNotes: [
      "Tests complets du parcours client",
      "Recette client (UAT) sur 5 jours",
      "Formation administration Shopify",
      "Support post-lancement 1 semaine",
    ],
    subSteps: [
      { title: "Tests internes complets", hours: 4, complexity: "Moyenne", description: "Tests techniques sur navigateurs desktop/mobile" },
      { title: "Phase de recette client (UAT) + corrections", hours: 6, complexity: "Moyenne", description: "Période de tests client et corrections bugs mineurs" },
      { title: "Formation Shopify admin", hours: 2, complexity: "Faible", description: "Session formation gestion produits, commandes, apps" },
      { title: "Lancement + support post-prod", hours: 3, complexity: "Faible", description: "Déploiement et corrections critiques première semaine" },
    ],
  },

  // ✅ Options 100–105 conservées
  {
    id: 100,
    name: "SEO & Performance Premium",
    color: "#0EA5E9",
    disableMaxMultiplier: true,
    backendNotes: [
      "SEO Store AI pour métas automatiques",
      "Botika pour génération photos AI",
      "Vitals pour monitoring performance",
    ],
    subSteps: [
      { title: "SEO Store AI + Botika + Vitals", hours: 12, complexity: "Moyenne", description: "Pack complet SEO AI, photos AI et monitoring performance" },
    ],
  },
  {
    id: 101,
    name: "La Voute Premium (contenu exclusif)",
    color: "#7C3AED",
    disableMaxMultiplier: true,
    backendNotes: [
      "Upgrade de La Voute basique vers expérience premium",
      "Contenu exclusif, événements, early access produits",
    ],
    subSteps: [
      { title: "La Voute Premium + Contenu exclusif", hours: 8, complexity: "Élevée", description: "Portail membre premium avec calendrier événements et early access" },
    ],
  },
  {
    id: 102,
    name: "Intégration Coolify (en complément de Loop)",
    color: "#F97316",
    disableMaxMultiplier: true,
    backendNotes: [
      "Ajout Coolify pour compléter Loop",
      "Coordination entre deux plateformes de retours",
    ],
    subSteps: [
      { title: "Installation et coordination Coolify + Loop", hours: 5, complexity: "Moyenne", description: "Configuration Coolify et sync avec Loop existant" },
    ],
  },
  {
    id: 103,
    name: "Lookbook Vidéo",
    color: "#8B5CF6",
    disableMaxMultiplier: true,
    backendNotes: ["Page Lookbook avec vidéos interactives"],
    subSteps: [
      { title: "Page Lookbook + vidéos interactives", hours: 10, complexity: "Moyenne", description: "Création page Lookbook vidéo immersive" },
    ],
  },
  {
    id: 104,
    name: "Assistant AI produit",
    color: "#10B981",
    disableMaxMultiplier: true,
    backendNotes: ["Assistant OpenAI pour suggestions produits et tailles"],
    subSteps: [
      { title: "Chat AI produit et suggestions taille", hours: 16, complexity: "Élevée", description: "Intégration assistant AI dans le store" },
    ],
  },
  {
    id: 105,
    name: "Essayage virtuel (AI Fit)",
    color: "#EF4444",
    disableMaxMultiplier: true,
    backendNotes: ["Module d'essayage virtuel 3D via Botika ou Vue.ai"],
    subSteps: [
      { title: "Module essayage virtuel AI", hours: 24, complexity: "Élevée", description: "Intégration système d'essayage AI 3D sur mannequin" },
    ],
  },
];

// ===============================
// 🔹 MÉTRIQUES ET TIMELINE
// ===============================
export const COST_PER_HOUR = 135;
export const HOURS_MAX_MULTIPLIER = 1.15;
export const SIGN_LINK = "";

// Note sur les frais d'abonnements
export const MONTHLY_APP_COSTS_NOTE = `
💳 FRAIS D'ABONNEMENTS MENSUELS (non inclus dans l'estimation)

Cette estimation couvre le développement et l'intégration. Budget mensuel additionnel 
requis pour les applications Shopify (si options activées) : 300-450 CAD/mois

Apps principales (si choisies) :
- Growave (fidélité & portail client) : ~150-200 CAD/mois
- Loop (retours automatisés) : ~80 CAD/mois  
- Kiwi Sizing (mesures intelligentes) : ~40 CAD/mois
- Klaviyo (email marketing) : ~60-80 CAD/mois (selon volume emails)
- Apps secondaires (Planet, Protect my Order, Parcel Panel) : ~30-50 CAD/mois

Apps déjà en place conservées :
- Uppush, SE Wishlist, Instafeed : peuvent être retirées après migration
- Analytics (GA4, Meta Pixel, etc.) : déjà configurés, aucun coût additionnel

*Estimation basée sur les plans nécessaires pour ce niveau de personnalisation.
Les coûts réels varient selon le volume de commandes et fonctionnalités activées.
`;

export const PROJECT_SCHEDULE = [
  { name: "Semaines 1-2", percent: 0.25 },
  { name: "Semaines 3-4", percent: 0.30 },
  { name: "Semaines 5-6", percent: 0.25 },
  { name: "Semaines 7-8", percent: 0.20 },
];

export const TIMELINE_DATA = [
  { month: "Semaine 1", planning: 40, development: 10, testing: 0, deployment: 0 },
  { month: "Semaine 2", planning: 70, development: 30, testing: 5, deployment: 0 },
  { month: "Semaine 3", planning: 90, development: 50, testing: 15, deployment: 0 },
  { month: "Semaine 4", planning: 100, development: 70, testing: 30, deployment: 10 },
  { month: "Semaine 5", planning: 100, development: 85, testing: 50, deployment: 25 },
  { month: "Semaine 6", planning: 100, development: 95, testing: 75, deployment: 50 },
  { month: "Semaine 7", planning: 100, development: 100, testing: 90, deployment: 75 },
  { month: "Semaine 8", planning: 100, development: 100, testing: 100, deployment: 100 },
];

// ===============================
// 🔹 VARIANTES TIMELINE
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
    { name: "Mois 2", percent: 0.15 },
    { name: "Mois 3", percent: 0.14 },
    { name: "Mois 4", percent: 0.13 },
    { name: "Mois 5", percent: 0.13 },
    { name: "Mois 6", percent: 0.12 },
    { name: "Mois 7", percent: 0.10 },
    { name: "Mois 8", percent: 0.07 },
  ],
  "12m": [
    { name: "Mois 1", percent: 0.12 },
    { name: "Mois 2", percent: 0.11 },
    { name: "Mois 3", percent: 0.10 },
    { name: "Mois 4", percent: 0.09 },
    { name: "Mois 5", percent: 0.09 },
    { name: "Mois 6", percent: 0.09 },
    { name: "Mois 7", percent: 0.08 },
    { name: "Mois 8", percent: 0.08 },
    { name: "Mois 9", percent: 0.08 },
    { name: "Mois 10", percent: 0.07 },
    { name: "Mois 11", percent: 0.05 },
    { name: "Mois 12", percent: 0.04 },
  ],
};

export const TIMELINE_DATA_VARIANTS: Record<
  string,
  { month: string; planning: number; development: number; testing: number; deployment: number }[]
> = {
  "2m": [
    { month: "Mois 1", planning: 70, development: 30, testing: 10, deployment: 0 },
    { month: "Mois 2", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "3m": [
    { month: "Mois 1", planning: 50, development: 15, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 85, development: 60, testing: 30, deployment: 10 },
    { month: "Mois 3", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "4m": [
    { month: "Mois 1", planning: 40, development: 10, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 75, development: 40, testing: 15, deployment: 0 },
    { month: "Mois 3", planning: 100, development: 80, testing: 50, deployment: 20 },
    { month: "Mois 4", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "6m": [
    { month: "Mois 1", planning: 30, development: 5, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 60, development: 20, testing: 5, deployment: 0 },
    { month: "Mois 3", planning: 80, development: 50, testing: 20, deployment: 0 },
    { month: "Mois 4", planning: 100, development: 75, testing: 40, deployment: 10 },
    { month: "Mois 5", planning: 100, development: 90, testing: 70, deployment: 30 },
    { month: "Mois 6", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "8m": [
    { month: "Mois 1", planning: 25, development: 5, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 50, development: 15, testing: 0, deployment: 0 },
    { month: "Mois 3", planning: 70, development: 30, testing: 10, deployment: 0 },
    { month: "Mois 4", planning: 85, development: 50, testing: 20, deployment: 0 },
    { month: "Mois 5", planning: 95, development: 65, testing: 35, deployment: 5 },
    { month: "Mois 6", planning: 100, development: 80, testing: 55, deployment: 15 },
    { month: "Mois 7", planning: 100, development: 95, testing: 80, deployment: 50 },
    { month: "Mois 8", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
  "12m": [
    { month: "Mois 1", planning: 20, development: 0, testing: 0, deployment: 0 },
    { month: "Mois 2", planning: 35, development: 5, testing: 0, deployment: 0 },
    { month: "Mois 3", planning: 50, development: 15, testing: 0, deployment: 0 },
    { month: "Mois 4", planning: 65, development: 25, testing: 5, deployment: 0 },
    { month: "Mois 5", planning: 75, development: 35, testing: 10, deployment: 0 },
    { month: "Mois 6", planning: 85, development: 50, testing: 20, deployment: 0 },
    { month: "Mois 7", planning: 95, development: 60, testing: 30, deployment: 5 },
    { month: "Mois 8", planning: 100, development: 70, testing: 45, deployment: 10 },
    { month: "Mois 9", planning: 100, development: 85, testing: 60, deployment: 20 },
    { month: "Mois 10", planning: 100, development: 95, testing: 80, deployment: 40 },
    { month: "Mois 11", planning: 100, development: 100, testing: 95, deployment: 70 },
    { month: "Mois 12", planning: 100, development: 100, testing: 100, deployment: 100 },
  ],
};

// ===============================
// 🔹 NOTES DE CONFIGURATION
// ===============================
export const CONFIG_NOTES = `
📝 NOTES IMPORTANTES — VERSION LITE

🎯 Portée de l'offre de base (incluse) :
- Phase 0 : Audit + Import produits + Collections
- Phase 1 : Pages structurantes (Home, About, FAQ light)
- Phase 2 : Checkout (validation de base, sans apps payantes)

📦 Extensions disponibles (en options) :
- Filtres & Navigation (prix, couleur, nouveautés, recherche)
- Mesures intelligentes (Kiwi Sizing)
- Fidélité & Portail client (Growave, Preorder)
- Email Marketing (Klaviyo, flows)
- QA avancée, formation et lancement encadré

✅ CE QUI EST DÉJÀ EN PLACE (CONSERVÉ) :
- Thème Prestige v5.6.1 (excellent, performant, luxe)
- Analytics complets (GA4, GTM, Meta Pixel, TikTok, Snapchat)
- Multi-langues (FR/EN) et multi-devises (CAD/USD)
- Paiements configurés (Shop Pay, PayPal, Apple/Google Pay, cartes)
- Infrastructure technique solide (CDN, PWA, RGPD, légal)
- Shopify Chat/Inbox actif

💰 ESTIMATION LITE (ordre de grandeur) :
~20 h × 135 $/h ≈ 2 700 $ CAD (selon volume produits)
Les extensions sont chiffrées à la carte.

🚀 Stratégie :
On lance vite (produits/collections/checkout), puis on active les modules qui augmentent la conversion quand il y a trafic et ventes.
`;
