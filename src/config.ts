// Configuration P.I.O — Shopify (Révision 5K - FINALE)
// Sprint focalisé : Bugs critiques + REFONTE PDP + Kiwi Sizing + Essentiels
// Budget cible : ~5000$ CAD (37h @ 135$/h)

import type { OfferConfig, Step } from "./config_old";
export type { SubStep, Step, OverviewFeature, OfferConfig, ProjectMonth } from "./config_old";
export { PROJECT_SCHEDULE_VARIANTS, TIMELINE_DATA_VARIANTS } from "./config_old";

// Échelle de complexité indicative (interne)
export const COMPLEXITY_SCORE: Record<"Faible" | "Moyenne" | "Élevée", number> = {
  Faible: 1,
  Moyenne: 3,
  Élevée: 7,
};

// ===============================
// 🔹 OFFRE — P.I.O (Sprint 5K - FINALE)
// ===============================
export const OFFER: OfferConfig = {
  id: "pio-shopify-5k-sprint-final",
  name: "P.I.O – Sprint mise en marché (5K)",
  conceptSummary: {
    name: "P.I.O — Site propre, page produit qui convertit",
    description:
      "On corrige les bugs critiques (traductions, taxes, formulaires), on refait complètement la page produit avec variantes interactives et UI moderne, on ajoute le guide des tailles (Kiwi), et on valide le parcours d'achat de A à Z.",
  },
  steps: [
    // ✅ Phase 0 — Correctifs critiques
    {
      id: 0,
      name: "Phase 0 — Correctifs critiques",
      color: "#111827",
      backendNotes: [
        "Focus sur ce qui brise le professionnalisme : traductions FR/EN, formulaires, taxes, menus. On règle ce qui empêche de vendre proprement.",
      ],
      subSteps: [
        {
          title: "Traductions FR/EN (priorité haute)",
          hours: 4,
          complexity: "Moyenne",
          description:
            "Correction complète des traductions brisées sur toutes les pages clés (Accueil, PDP, Collections, Checkout). Révision des fichiers de langue Shopify + apps pour éliminer les mélanges FR/EN.",
        },
        {
          title: "Cookies & Loi 25 (conformité Québec)",
          hours: 2,
          complexity: "Faible",
          description:
            "Bandeau cookies conforme Loi 25 + gestion consentement propre (pas de warning console).",
        },
        {
          title: "Formulaire 'Nous joindre' + Taxes",
          hours: 2,
          complexity: "Faible",
          description:
            "Réparation formulaire contact (envoi fiable) + validation calcul taxes (TPS 5% + TVQ 9,975%, cas multiples).",
        },
        {
          title: "Menu & navigation (simplification)",
          hours: 2,
          complexity: "Faible",
          description:
            "Menu déroulant propre, retrait catégories obsolètes (HOMMES, libellés 'neufs'), onglet Marques nettoyé.",
        },
        {
          title: "About us : consolidation",
          hours: 1,
          complexity: "Faible",
          description:
            "Intégrer nouveau texte (Fondatrice/Mission/Valeurs), supprimer sections doublées, corriger bugs d'affichage (pixel sous photo).",
        },
        {
          title: "Ménage technique (plugins, logo, emails)",
          hours: 2,
          complexity: "Faible",
          description:
            "Désinstaller plugins inutiles, supprimer ancien logo qui réapparaît, réparer liens brisés dans emails/flows existants.",
        },
      ],
    },

    // ✅ Phase 1 — Collections automatiques
    {
      id: 1,
      name: "Phase 1 — Collections automatiques",
      color: "#2563EB",
      backendNotes: [
        "Met en place les collections essentielles avec règles automatiques. Simplifie la navigation boutique et prépare le terrain pour la vente.",
      ],
      subSteps: [
        {
          title: "Collections automatiques (New Arrivals / Best Picks / Essentials)",
          hours: 3,
          complexity: "Faible",
          description:
            "Règles par date/étiquettes + affichage cohérent sur Accueil et page Boutique.",
        },
        {
          title: "Système d'étiquettes (tags) propre",
          hours: 2,
          complexity: "Faible",
          description:
            "Convention de nommage claire (catégorie, taille, marque, couleur, état) pour filtres futurs et recherche.",
        },
        {
          title: "Gabarit de collection standard",
          hours: 2,
          complexity: "Faible",
          description:
            "En-tête, tri visible, boutons vers catégories, état 'aucun produit' propre.",
        },
      ],
    },

    // ✅ Phase 2 — Refonte page produit (focus principal)
    {
      id: 2,
      name: "Phase 2 — Refonte page produit",
      color: "#10B981",
      backendNotes: [
        "Refonte complète du template Liquid de la page produit. Variantes interactives (couleurs cliquables, dropdown tailles), tableaux de mesures visuels, UI moderne selon maquette cliente.",
      ],
      subSteps: [
        {
          title: "Template Liquid : refonte structure",
          hours: 3,
          complexity: "Élevée",
          description:
            "Refaire le template product.liquid pour supporter variantes interactives, galerie photos moderne, sections modulaires (mesures, description, fabric, care).",
        },
        {
          title: "Variantes interactives (couleurs + tailles)",
          hours: 3,
          complexity: "Élevée",
          description:
            "Swatches couleurs cliquables (au lieu de texte), dropdown tailles propre, logique de disponibilité en temps réel, messages clairs si rupture.",
        },
        {
          title: "Tableaux de mesures visuels",
          hours: 2,
          complexity: "Moyenne",
          description:
            "Transformer les métafields mesures (chest, waist, hips, etc.) en tableaux HTML propres et lisibles, avec unités (cm/pouces).",
        },
        {
          title: "Sections produit organisées",
          hours: 2,
          complexity: "Moyenne",
          description:
            "Ordre logique des blocs : Titre/Marque séparés, Description, Fabric content, Care instructions, Return policies (liens), prix barré = prix retail original, mention 'OS' (taille unique) si applicable.",
        },
        {
          title: "Affichage prix PIO vs normal",
          hours: 1,
          complexity: "Faible",
          description:
            "Logique d'affichage : prix PIO en vedette, prix retail barré si applicable, badge 'Économie' si pertinent.",
        },
      ],
    },

    // ✅ Phase 3 — Kiwi Sizing + Checkout + Accueil
    {
      id: 3,
      name: "Phase 3 — Kiwi Sizing + Validation complète",
      color: "#9333EA",
      backendNotes: [
        "Intégration guide des tailles (Kiwi) dans la PDP refaite + validation end-to-end du parcours d'achat + Accueil branché aux collections.",
      ],
      subSteps: [
        {
          title: "Installation & configuration Kiwi Sizing",
          hours: 3,
          complexity: "Moyenne",
          description:
            "Setup app, connexion aux produits, intégration du bouton 'Guide des tailles' dans le nouveau template PDP.",
        },
        {
          title: "Tableaux de tailles par catégorie",
          hours: 2,
          complexity: "Moyenne",
          description:
            "Configuration des size charts (Hauts/Bas/Robes/Chaussures/Accessoires) avec mesures standards.",
        },
        {
          title: "Page conseils mesures",
          hours: 1,
          complexity: "Faible",
          description:
            "Page dédiée avec astuces + visuels simples pour bien mesurer (comment prendre ses mesures).",
        },
        {
          title: "Accueil : sections produits dynamiques",
          hours: 2,
          complexity: "Faible",
          description:
            "Blocs collections (New Arrivals/Best Picks) + boutons vers boutique, cartes produit lisibles avec badges.",
        },
        {
          title: "Tests panier → checkout complets",
          hours: 2,
          complexity: "Faible",
          description:
            "Vérification taxes (TPS/TVQ), livraisons, courriels confirmation, devises, langues (FR/EN), flow complet.",
        },
        {
          title: "Commande test end-to-end",
          hours: 1,
          complexity: "Faible",
          description:
            "Passer commande test complète + suivre cycle (emails, états, remboursement test).",
        },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Bugs critiques résolus (traductions, taxes, formulaires)", icon: "ShieldCheck", color: "#111827" },
    { label: "Page produit refaite à neuf (variantes, mesures, UI moderne)", icon: "TrendingUp", color: "#10B981" },
    { label: "Guide des tailles intégré (Kiwi Sizing)", icon: "Ruler", color: "#9333EA" },
    { label: "Collections automatiques + navigation claire", icon: "Layout", color: "#2563EB" },
    { label: "Checkout validé de bout en bout", icon: "ShoppingCart", color: "#EF4444" },
  ],
};

// ===============================
// 🔹 OPTIONS (Hors scope sprint 5K - à discuter après)
// ===============================
export const ADDITIONAL_OPTIONS: Step[] = [
  {
    id: 4,
    name: "Filtres avancés & recherche",
    color: "#0EA5E9",
    backendNotes: ["Filtres catégorie/taille/marque/prix/couleur + amélioration recherche."],
    subSteps: [
      { title: "Activation filtres de base", hours: 3, complexity: "Faible", description: "Étiquettes existantes." },
      { title: "Filtres avancés (prix, couleur, nouveautés)", hours: 4, complexity: "Moyenne", description: "Plus de granularité." },
      { title: "Recherche améliorée", hours: 2, complexity: "Faible", description: "Suggestions et synonymes." },
    ],
  },
  {
    id: 5,
    name: "Fidélité & favoris (Growave)",
    color: "#F59E0B",
    backendNotes: ["Wishlist, points, portail client, économies au panier."],
    subSteps: [
      { title: "Setup Growave + migration favoris", hours: 4, complexity: "Moyenne", description: "Remplacement wishlist actuelle." },
      { title: "Portail client", hours: 5, complexity: "Moyenne", description: "Infos compte, favoris, préférences, mesures." },
      { title: "Programme points", hours: 4, complexity: "Moyenne", description: "Règles d'accumulation et utilisation." },
      { title: "Affichage économies panier", hours: 2, complexity: "Faible", description: "Économies totales visibles au checkout." },
    ],
  },
  {
    id: 6,
    name: "Email marketing (Klaviyo)",
    color: "#EC4899",
    backendNotes: ["Flows essentiels : bienvenue, abandon panier, post-achat + formulaires ambassadrices/membres."],
    subSteps: [
      { title: "Setup Klaviyo", hours: 3, complexity: "Moyenne", description: "Connexion boutique + import contacts." },
      { title: "Flow bienvenue", hours: 2, complexity: "Faible", description: "Onboarding nouveaux abonnés." },
      { title: "Flow abandon panier", hours: 2, complexity: "Faible", description: "Récupération ventes perdues." },
      { title: "Flow post-achat", hours: 2, complexity: "Faible", description: "Satisfaction + demande avis." },
      { title: "Formulaires (ambassadrice/membre)", hours: 2, complexity: "Faible", description: "Captation propre et traçable." },
    ],
  },
  {
    id: 7,
    name: "Retours automatisés (Loop Returns)",
    color: "#EF4444",
    backendNotes: ["Portail retours client self-serve + alternatives (échange/crédit)."],
    subSteps: [
      { title: "Installation Loop", hours: 3, complexity: "Moyenne", description: "Configuration de base." },
      { title: "Règles de retours", hours: 3, complexity: "Moyenne", description: "Conditions, délais, remboursement/échange." },
      { title: "Portail client personnalisé", hours: 2, complexity: "Faible", description: "Branding + traductions." },
    ],
  },
  {
    id: 8,
    name: "Apps checkout (Planet, Protect, Parcel Panel)",
    color: "#14B8A6",
    backendNotes: ["Compensation carbone, assurance colis, tracking personnalisé."],
    subSteps: [
      { title: "Planet (compensation carbone)", hours: 2, complexity: "Faible", description: "Intégration checkout." },
      { title: "Protect my order (assurance)", hours: 2, complexity: "Faible", description: "Protection colis." },
      { title: "Parcel Panel (tracking)", hours: 2, complexity: "Faible", description: "Page de suivi branded." },
    ],
  },
  {
    id: 9,
    name: "La Voûte (Membership VIP)",
    color: "#8B5CF6",
    backendNotes: ["Espace membres avec prix exclusifs, précommandes, accès anticipé."],
    subSteps: [
      { title: "Setup membership", hours: 4, complexity: "Moyenne", description: "Tags VIP, règles d'accès." },
      { title: "Prix exclusifs membres", hours: 3, complexity: "Moyenne", description: "Logique de pricing différencié." },
      { title: "Précommande membres (Magical Preorder)", hours: 3, complexity: "Moyenne", description: "Accès anticipé nouveautés." },
    ],
  },
  {
    id: 10,
    name: "Intégration Coolify (retours)",
    color: "#F97316",
    backendNotes: ["Alternative/complément à Loop pour gestion retours simplifiée."],
    subSteps: [
      { title: "Installation Coolify", hours: 2, complexity: "Moyenne", description: "Setup de base et configuration." },
      { title: "Configuration règles retours", hours: 2, complexity: "Moyenne", description: "Conditions, délais, options échange/remboursement." },
      { title: "Coordination avec Loop (si applicable)", hours: 1, complexity: "Faible", description: "Sync entre systèmes si les deux sont utilisés." },
    ],
  },
];

// ===============================
// 🔹 MÉTRIQUES & NOTES
// ===============================
export const COST_PER_HOUR = 135;          // tarif horaire
export const HOURS_MAX_MULTIPLIER = 1.15;  // marge haute si nécessaire
export const SIGN_LINK = "";

// Calcul total heures OFFER
const totalHours = OFFER.steps.reduce((acc, step) => {
  return acc + (step.subSteps?.reduce((sum, sub) => sum + sub.hours, 0) ?? 0);
}, 0);

export const TOTAL_HOURS = totalHours; // 37h
export const BASE_COST = totalHours * COST_PER_HOUR; // 4995$
export const MAX_COST = Math.ceil(BASE_COST * HOURS_MAX_MULTIPLIER); // 5744$

// Abonnement Kiwi Sizing
export const MONTHLY_APP_COSTS_NOTE = `
💳 Abonnement mensuel (inclus dans ce sprint) :
- Kiwi Sizing : ~40-50 CAD/mois
  → Aide à réduire les retours (ROI positif attendu)

📊 Options futures (hors scope) :
- Growave (fidélité) : ~150-200/mois
- Klaviyo (email) : ~60-80/mois selon volume
- Loop (retours) : ~80/mois
- Planet/Protect/Parcel : ~30-50/mois combinés
`;

// Planning indicatif
export const PROJECT_SCHEDULE = [
  { name: "Semaines 1-2", percent: 0.35 }, // Bugs + Collections
  { name: "Semaines 3-4", percent: 0.40 }, // REFONTE PDP (le gros morceau)
  { name: "Semaines 5-6", percent: 0.25 }, // Kiwi + Checkout + tests
];

export const TIMELINE_DATA = [
  { month: "Semaine 1", planning: 60, development: 30, testing: 0, deployment: 0 },
  { month: "Semaine 2", planning: 90, development: 55, testing: 10, deployment: 0 },
  { month: "Semaine 3", planning: 100, development: 70, testing: 15, deployment: 0 },
  { month: "Semaine 4", planning: 100, development: 90, testing: 35, deployment: 10 },
  { month: "Semaine 5", planning: 100, development: 100, testing: 65, deployment: 30 },
  { month: "Semaine 6", planning: 100, development: 100, testing: 100, deployment: 100 },
];

// ===============================
// 🔹 RÉSUMÉ EXÉCUTIF
// ===============================
export const EXECUTIVE_SUMMARY = `
🎯 OBJECTIF DU SPRINT (Budget : ~5000$ CAD)
Livrer un site e-commerce propre, professionnel, et optimisé pour la conversion.

✅ LIVRABLES CLÉS :
1. Bugs critiques résolus (traductions FR/EN impeccables, taxes, formulaires, navigation)
2. Page produit refaite à neuf (template Liquid modernisé, variantes interactives, tableaux mesures visuels, UI qui convertit)
3. Guide des tailles intégré (Kiwi Sizing) pour réduire les retours et augmenter la confiance
4. Collections automatiques fonctionnelles (New Arrivals/Best Picks/Essentials)
5. Parcours d'achat validé end-to-end (panier → paiement → confirmation)

🔥 FOCUS PRINCIPAL : La refonte de la page produit (Phase 2)
- Template Liquid refait de A à Z
- Swatches couleurs cliquables (fini le texte!)
- Dropdown tailles interactif avec disponibilité en temps réel
- Tableaux de mesures visuels (métafields transformés en HTML propre)
- Sections organisées : Description, Fabric, Care, Return policies
- Prix PIO vs prix retail clairement affichés

📊 EFFORT : 37 heures sur 6 semaines
💰 COÛT : 4 995$ (base) à 5 744$ (max avec imprévus)

🚀 APRÈS CE SPRINT :
Le site sera prêt à vendre avec une page produit qui inspire confiance et convertit. Les options futures (Klaviyo, Growave, Loop, filtres avancés, La Voûte) pourront être ajoutées selon les besoins et le budget.

📝 NOTE : La gestion de l'inventaire et des produits reste sous la responsabilité de la cliente.
`;