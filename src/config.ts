// Configuration MVP optimisée pour P.I.O — Shopify
// Version allégée basée sur l'analyse de l'existant

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
// 🔹 OFFRE MVP — P.I.O (VERSION OPTIMISÉE)
// ===============================
export const OFFER: OfferConfig = {
  id: "pio-shopify-optimization",
  name: "P.I.O – Optimisation & Mise en marché",
  conceptSummary: {
    name: "P.I.O — Optimisation & Mise en marché Shopify",
    description:
      "Optimisation d'une boutique Shopify existante pour la mise en marché : import produits, collections dynamiques, outils de conversion (fidélité, mesures, retours) et automatisations email. Infrastructure technique déjà en place, focus sur le lancement commercial.",
  },
  steps: [
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
    {
      id: 2,
      name: "Phase 2 — Filtres & Navigation intelligente",
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
    {
      id: 3,
      name: "Phase 3 — Mesures intelligentes (Kiwi Sizing)",
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
    {
      id: 4,
      name: "Phase 4 — Fidélité & Portail client (Growave)",
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
    {
      id: 5,
      name: "Phase 5 — Checkout optimisé & Retours",
      color: "#EF4444",
      backendNotes: [
        "Checkout Shopify déjà fonctionnel, ajout apps",
        "Planet + Protect my Order + Parcel Panel",
        "Loop pour retours automatisés (principal)",
        "Note : Coolify non inclus, disponible en option (+5h)",
      ],
      subSteps: [
        { title: "Intégration Planet + Protect my Order", hours: 3, complexity: "Faible", description: "Ajout des apps dans le flux checkout" },
        { title: "Installation et configuration Loop (retours)", hours: 5, complexity: "Moyenne", description: "Mise en place du portail retours client automatisé" },
        { title: "Configuration Parcel Panel (tracking)", hours: 2, complexity: "Faible", description: "Setup du suivi de livraison personnalisé" },
        { title: "Rappels politique de retour au checkout", hours: 1, complexity: "Faible", description: "Ajout disclaimers et liens politiques" },
      ],
    },
    {
      id: 6,
      name: "Phase 6 — Email Marketing (Klaviyo)",
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
    {
      id: 7,
      name: "Phase 7 — QA, Formation & Lancement",
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
  ],
  overviewFeatures: [
    { label: "Mise en marché rapide avec base existante", icon: "TrendingUp", color: "#2563EB" },
    { label: "Fidélité et membre via Growave", icon: "Users", color: "#9333EA" },
    { label: "Mesures intelligentes (Kiwi Sizing)", icon: "Brain", color: "#10B981" },
    { label: "Retours automatisés (Loop) & Email (Klaviyo)", icon: "Trophy", color: "#F59E0B" },
  ],
};

// ===============================
// 🔹 OPTIONS ADDITIONNELLES
// ===============================
export const ADDITIONAL_OPTIONS: Step[] = [
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
requis pour les applications Shopify : 300-450 CAD/mois

Apps principales :
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
};

// ===============================
// 🔹 NOTES DE CONFIGURATION
// ===============================

export const CONFIG_NOTES = `
📝 NOTES IMPORTANTES SUR CETTE CONFIGURATION MVP

✅ CE QUI EST DÉJÀ EN PLACE (CONSERVÉ) :
- Thème Prestige v5.6.1 (excellent, performant, luxe)
- Analytics complets (GA4, GTM, Meta Pixel, TikTok, Snapchat)
- Multi-langues (FR/EN) et multi-devises (CAD/USD)
- Paiements configurés (Shop Pay, PayPal, Apple/Google Pay, cartes)
- Infrastructure technique solide (CDN, PWA, RGPD, légal)
- Design cohérent et professionnel
- Shopify Chat/Inbox actif

🔧 CE QUI SERA MODIFIÉ/AMÉLIORÉ :
- Migration SE Wishlist → Growave (meilleure intégration fidélité)
- Uppush conservé ou remplacé par Klaviyo selon préférence
- Instagram Feed conservé (déjà fonctionnel)
- Ajout de toutes les apps manquantes (Kiwi, Loop, Growave, etc.)

🎯 FOCUS DU MVP :
Ce projet n'est PAS une refonte complète, c'est une MISE EN MARCHÉ.
Le site est déjà bien fait techniquement, il manque :
1. Des produits à vendre
2. Du contenu authentique
3. Des outils de conversion (fidélité, retours, mesures)
4. De l'automatisation email

💰 BUDGET ESTIMÉ OPTIMISATION COMPLÈTE :
~95-110 heures × 135 $/h = 12 825 $ - 14 850 $ CAD
+ 300-450 $/mois d'apps Shopify

⏱️ TIMELINE RÉALISTE :
4-6 semaines en mode concentré
2-3 mois en mode détendu

🚀 READY TO LAUNCH :
Après ce MVP, la boutique sera 100% opérationnelle et prête à générer des ventes.
`;