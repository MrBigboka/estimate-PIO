// Configuration MVP optimisée pour P.I.O — Shopify
// Version LITE: offre de base = Collections + Merchandising + Checkout (phases 0,1,2)
// Les phases avancées (3,4,5,6,7) sont en options additionnelles.

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
// 🔹 OFFRE MVP — P.I.O (VERSION LITE, ~26h)
// ===============================
export const OFFER: OfferConfig = {
  id: "pio-shopify-optimization-lite",
  name: "P.I.O – Mise en marché (Lite)",
  conceptSummary: {
    name: "P.I.O — Optimisation & Mise en marché Shopify (Lite)",
    description:
      "Mise en vente rapide basée sur l'existant : collections dynamiques, merchandising (Home/PDP/cartes produit) et validation du checkout. Modules avancés en options.",
  },
  steps: [
    // ✅ Phase 0 — Incluse
    {
      id: 0,
      name: "Phase 0 — Audit léger & Collections",
      color: "#6B7280",
      backendNotes: [
        "Audit léger de l'existant (thème Prestige, pixels/analytics, apps actives, paramètres clés).",
        "Configuration/validation des collections de base et dynamiques.",
      ],
      subSteps: [
        {
          title: "Audit technique (léger)",
          hours: 3,
          complexity: "Faible",
          description: "Vérification rapide: thème, pixels (GTM/GA4/Meta), apps, devises/langues, taxes de base.",
        },
        {
          title: "Collections dynamiques (New Arrivals / Best Picks / Essentials)",
          hours: 4,
          complexity: "Faible",
          description: "Règles auto (tags/date), tri, affichage (Home & Shop).",
        },
        {
          title: "Taxonomie & conventions de tags",
          hours: 2,
          complexity: "Faible",
          description: "Schéma de tags (catégorie, état, saison, marque) pour préparer filtres/SEO.",
        },
        {
          title: "Gabarits de collections (UX minimal)",
          hours: 2,
          complexity: "Faible",
          description: "En-têtes/intro, tri visible, CTA vers catégories, état vide propre.",
        },
      ],
    },

    // ✅ Phase 1 — Incluse
    {
      id: 1,
      name: "Phase 1 — Merchandising & Templates",
      color: "#2563EB",
      backendNotes: [
        "Brancher les sections produits/collections sur Home.",
        "Amélioration UX rapide: cartes produit & PDP (sans refonte).",
      ],
      subSteps: [
        {
          title: "Home: branchement sections produits/collections",
          hours: 3,
          complexity: "Faible",
          description: "Blocks dynamiques, vignettes, CTA vers Shop/Collections.",
        },
        {
          title: "Cartes produit (UX rapide)",
          hours: 2,
          complexity: "Faible",
          description: "Prix, badges (New/Best), état/stock, hover, liens clairs.",
        },
        {
          title: "PDP checklist (sans refonte)",
          hours: 3,
          complexity: "Faible",
          description: "Vérif: titre, prix, variantes (taille/couleur), galerie, policies visibles, sections clés.",
        },
        {
          title: "Recherche: synonymes & état vide",
          hours: 2,
          complexity: "Faible",
          description: "Mots-clés de base & message 'aucun résultat' avec suggestions.",
        },
        {
          title: "Performance rapide (médias)",
          hours: 2,
          complexity: "Faible",
          description: "Compression rapide/paramètres d’image + lazy où pertinent.",
        },
      ],
    },

    // ✅ Phase 2 — Incluse
    {
      id: 2,
      name: "Phase 2 — Checkout (validation de base)",
      color: "#EF4444",
      backendNotes: [
        "Flux Shopify standard validé de bout en bout.",
        "Aucune app payante incluse (Planet/Protect/Parcel/Loop en options).",
      ],
      subSteps: [
        {
          title: "Tests panier → paiement",
          hours: 3,
          complexity: "Faible",
          description: "Taxes, livraisons, confirmations e-mail, multi-devises/langues.",
        },
        {
          title: "Micro-ajustements de libellés (si requis)",
          hours: 1,
          complexity: "Faible",
          description: "Libellés/CTA/links politiques au besoin (pas de refonte).",
        },
        {
          title: "Sanity check commandes",
          hours: 1,
          complexity: "Faible",
          description: "Commande test → suivi: e-mails, états, remboursements de test.",
        },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Collections dynamiques prêtes", icon: "TrendingUp", color: "#2563EB" },
    { label: "Home & PDP alignés vente", icon: "Layout", color: "#10B981" },
    { label: "Checkout validé de bout en bout", icon: "ArrowRight", color: "#EF4444" },
    { label: "Sans lock-in d’apps, modules à la carte", icon: "Puzzle", color: "#F59E0B" },
  ],
};

// ===============================
// 🔹 OPTIONS ADDITIONNELLES
// (Phases avancées + extras)
// ===============================
export const ADDITIONAL_OPTIONS: Step[] = [
  // 🔁 Option — Filtres & Navigation intelligente
  {
    id: 3,
    name: "Filtres & Navigation intelligente",
    color: "#10B981",
    backendNotes: [
      "Filtres catégorie/taille déjà présents mais non alimentés.",
      "Ajout filtres prix, couleur, nouveautés.",
      "Collections dynamiques automatiques élargies.",
      "Utilisation Search & Discovery natif Shopify.",
    ],
    subSteps: [
      { title: "Activation filtres existants", hours: 3, complexity: "Faible", description: "Catégorie, taille, marque alimentés via tags." },
      { title: "Filtres avancés (prix, couleur, nouveautés)", hours: 4, complexity: "Moyenne", description: "Multi-critères + UX claire." },
      { title: "Collections auto supplémentaires", hours: 3, complexity: "Faible", description: "Règles basées sur tags/dates/performance." },
      { title: "Search & Discovery tuning", hours: 2, complexity: "Faible", description: "Synonymes étendus et boosting basique." },
    ],
  },

  // 🔁 Option — Mesures intelligentes (Kiwi Sizing)
  {
    id: 4,
    name: "Mesures intelligentes (Kiwi Sizing)",
    color: "#9333EA",
    backendNotes: [
      "Installation standard de Kiwi Sizing.",
      "Tables de tailles dynamiques par catégorie.",
      "Page tutoriel mesures.",
    ],
    subSteps: [
      { title: "Installation Kiwi Sizing", hours: 4, complexity: "Moyenne", description: "Setup & intégration sur PDP." },
      { title: "Tables de tailles dynamiques", hours: 3, complexity: "Moyenne", description: "Hauts/bas/robes/chaussures." },
      { title: "Page tutoriels & astuces", hours: 2, complexity: "Faible", description: "Guides visuels et conseils." },
    ],
  },

  // 🔁 Option — Fidélité & Portail client (Growave)
  {
    id: 5,
    name: "Fidélité & Portail client (Growave)",
    color: "#F59E0B",
    backendNotes: [
      "Remplace SE Wishlist par Growave.",
      "Favoris, points, préférences.",
      "La Voute basique + Preorder membres.",
    ],
    subSteps: [
      { title: "Installation & migration wishlist", hours: 4, complexity: "Moyenne", description: "Setup Growave + reprise favoris." },
      { title: "Portail client", hours: 5, complexity: "Moyenne", description: "Infos, favoris, préférences." },
      { title: "Points & économies", hours: 4, complexity: "Moyenne", description: "Règles points + affichage économies panier." },
      { title: "La Voute (basique)", hours: 4, complexity: "Moyenne", description: "Tags VIP, prix exclusifs." },
      { title: "Preorder (membres)", hours: 3, complexity: "Moyenne", description: "Magical Preorder pour VIP." },
    ],
  },

  // 🔁 Option — Checkout & Retours (apps)
  {
    id: 5_1,
    name: "Checkout & Retours (apps)",
    color: "#EF4444",
    backendNotes: [
      "Planet + Protect my Order + Parcel Panel.",
      "Loop pour retours automatisés.",
    ],
    subSteps: [
      { title: "Planet + Protect my Order", hours: 3, complexity: "Faible", description: "Ajout et configuration dans le flux checkout." },
      { title: "Parcel Panel (tracking)", hours: 2, complexity: "Faible", description: "Tracking personnalisé post-commande." },
      { title: "Loop (retours automatisés)", hours: 5, complexity: "Moyenne", description: "Portail de retours complet." },
    ],
  },

  // 🔁 Option — Email Marketing (Klaviyo)
  {
    id: 6,
    name: "Email Marketing (Klaviyo)",
    color: "#EC4899",
    backendNotes: [
      "Installation Klaviyo & flows essentiels.",
    ],
    subSteps: [
      { title: "Setup Klaviyo & connexion Shopify", hours: 3, complexity: "Moyenne", description: "Migration emails si besoin." },
      { title: "Welcome series", hours: 2, complexity: "Faible", description: "Onboarding nouveaux abonnés." },
      { title: "Abandon panier", hours: 2, complexity: "Faible", description: "Récupération paniers." },
      { title: "Post-achat + Avis", hours: 2, complexity: "Faible", description: "Suivi satisfaction & UGC." },
      { title: "Formulaires (membre/ambassadeur)", hours: 2, complexity: "Faible", description: "Forms + automatisations." },
    ],
  },

  // 🔁 Option — Import & Configuration Produits
  {
    id: 7,
    name: "Import & Configuration Produits",
    color: "#F59E0B",
    backendNotes: [
      "Import assisté de 20-30 produits avec photos, descriptions, variantes et tags.",
      "Optimisation SEO de base des fiches produits.",
    ],
    subSteps: [
      { title: "Template & mapping produits", hours: 1, complexity: "Faible", description: "Fichier modèle CSV + conventions." },
      { title: "Import & validation", hours: 6, complexity: "Moyenne", description: "Import produits + contrôle qualité." },
      { title: "Optimisation fiches produits", hours: 4, complexity: "Moyenne", description: "SEO, descriptions, tags cohérents." },
    ],
  },

  // 🔁 Option — Contenu & Copywriting
  {
    id: 8,
    name: "Contenu & Copywriting",
    color: "#8B5CF6",
    backendNotes: [
      "Rédaction/révision des textes clés du site.",
      "Pages About, FAQ, Politiques.",
      "Ton de marque cohérent.",
    ],
    subSteps: [
      { title: "Page About & Histoire de marque", hours: 3, complexity: "Moyenne", description: "Storytelling et valeurs." },
      { title: "FAQ & Politiques", hours: 2, complexity: "Faible", description: "Livraison, retours, garanties." },
      { title: "Révision copywriting Home/Collections", hours: 3, complexity: "Moyenne", description: "Titres, CTA, descriptions." },
    ],
  },

  // 🔁 Option — QA, Formation & Lancement
  {
    id: 9,
    name: "QA, Formation & Lancement",
    color: "#14B8A6",
    backendNotes: [
      "Tests complets du parcours client, UAT 5 jours, formation admin, support 1 semaine.",
    ],
    subSteps: [
      { title: "Tests internes complets", hours: 4, complexity: "Moyenne", description: "Desktop/mobile, navigateurs majeurs." },
      { title: "UAT + corrections", hours: 6, complexity: "Moyenne", description: "Feedback client et correctifs mineurs." },
      { title: "Formation Shopify admin", hours: 2, complexity: "Faible", description: "Produits, commandes, apps." },
      { title: "Lancement + support", hours: 3, complexity: "Faible", description: "Go-live & bugfix critiques S1." },
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
      "Botika (photos AI)",
      "Vitals (monitoring)",
    ],
    subSteps: [
      { title: "SEO Store AI + Botika + Vitals", hours: 12, complexity: "Moyenne", description: "Pack complet SEO AI, photos AI et monitoring performance." },
    ],
  },
  {
    id: 101,
    name: "La Voute Premium (contenu exclusif)",
    color: "#7C3AED",
    disableMaxMultiplier: true,
    backendNotes: [
      "Calendrier événements, early access produits.",
    ],
    subSteps: [
      { title: "La Voute Premium + Contenu exclusif", hours: 8, complexity: "Élevée", description: "Espace premium pour VIP." },
    ],
  },
  {
    id: 102,
    name: "Intégration Coolify (complément Loop)",
    color: "#F97316",
    disableMaxMultiplier: true,
    backendNotes: [
      "Coordination entre deux plateformes de retours.",
    ],
    subSteps: [
      { title: "Coolify + Loop", hours: 5, complexity: "Moyenne", description: "Setup & synchronisation." },
    ],
  },
  {
    id: 103,
    name: "Lookbook Vidéo",
    color: "#8B5CF6",
    disableMaxMultiplier: true,
    backendNotes: ["Page Lookbook vidéo immersive."],
    subSteps: [
      { title: "Page Lookbook + vidéos", hours: 10, complexity: "Moyenne", description: "Narratif visuel & sections épurées." },
    ],
  },
  {
    id: 104,
    name: "Assistant AI produit",
    color: "#10B981",
    disableMaxMultiplier: true,
    backendNotes: ["Assistant OpenAI pour suggestions produits/tailles."],
    subSteps: [
      { title: "Chat AI produit", hours: 16, complexity: "Élevée", description: "Guidage achat & tailles." },
    ],
  },
  {
    id: 105,
    name: "Essayage virtuel (AI Fit)",
    color: "#EF4444",
    disableMaxMultiplier: true,
    backendNotes: ["Botika/Vue.ai"],
    subSteps: [
      { title: "Module essayage virtuel", hours: 24, complexity: "Élevée", description: "Intégration 3D mannequin." },
    ],
  },
];

// ===============================
// 🔹 MÉTRIQUES & TIMELINE
// ===============================
export const COST_PER_HOUR = 135;
export const HOURS_MAX_MULTIPLIER = 1.15;
export const SIGN_LINK = "";

// Note sur les frais d'abonnements
export const MONTHLY_APP_COSTS_NOTE = `
💳 FRAIS D'ABONNEMENTS (si options activées) — 300–450 CAD/mois (ordre de grandeur)
- Growave : ~150–200
- Loop : ~80
- Kiwi Sizing : ~40
- Klaviyo : ~60–80 (selon volume)
- Planet / Protect / Parcel Panel : ~30–50
`;

// Planning simple (si besoin d’affichage)
export const PROJECT_SCHEDULE = [
  { name: "Semaines 1-2", percent: 0.30 },
  { name: "Semaines 3-4", percent: 0.35 },
  { name: "Semaines 5-6", percent: 0.20 },
  { name: "Semaines 7-8", percent: 0.15 },
];

export const TIMELINE_DATA = [
  { month: "Semaine 1", planning: 40, development: 15, testing: 0, deployment: 0 },
  { month: "Semaine 2", planning: 80, development: 35, testing: 5, deployment: 0 },
  { month: "Semaine 3", planning: 100, development: 60, testing: 15, deployment: 0 },
  { month: "Semaine 4", planning: 100, development: 80, testing: 30, deployment: 10 },
  { month: "Semaine 5", planning: 100, development: 90, testing: 55, deployment: 25 },
  { month: "Semaine 6", planning: 100, development: 100, testing: 75, deployment: 45 },
  { month: "Semaine 7", planning: 100, development: 100, testing: 90, deployment: 70 },
  { month: "Semaine 8", planning: 100, development: 100, testing: 100, deployment: 100 },
];

// Variantes de planning (inchangées)
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
📝 NOTES IMPORTANTES — VERSION LITE (20–30h visées, ~26h estimées)
- Focus: Collections dynamiques + merchandising (Home/PDP/cartes) + checkout validé.
- Import produits est en option (id: 106). Si la cliente ajoute elle-même les produits, on garde la portée basse.
- Tout le reste (filtres avancés, fidélité, retours Loop, Klaviyo…) est à la carte.

💰 Ordre de grandeur:
~26 h × 135 $/h ≈ 3 510 $ CAD (hors apps). Plage cible: 20–30 h selon ajustements.

🚀 Stratégie:
Lancer vite avec l’essentiel pour vendre; activer les modules qui augmentent la conversion une fois le trafic présent.
`;
