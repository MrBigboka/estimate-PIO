export type SubStep = {
  title: string;
  hours: number;
  complexity: "Faible" | "Moyenne" | "Élevée";
  description: string;
};

export type Step = {
  id: number;
  name: string;
  // Detailed estimation inputs
  hours?: number; // minimal hours when no subSteps
  // complexity is intentionally omitted; derived from subSteps mean
  complexity?: number;
  color: string;
  subSteps?: SubStep[];
  backendNotes?: string[];
  tablesRequired?: string[];
  // When true, disable max range multiplier; display hoursMax as 1h and set costMax to 0
  disableMaxMultiplier?: boolean;
};

export type OverviewFeature = {
  label: string;
  icon: "Brain" | "Users" | "Trophy" | "TrendingUp" | "ArrowRight";
  color: string; // hex color like #0EA5E9
};

export type OfferConfig = {
  id: string;
  name: string;
  conceptSummary: { name: string; description: string };
  steps: Step[];
  overviewFeatures: OverviewFeature[];
};

export type ProjectMonth = {
  name: string;
  percent: number; // 0..1 portion of the total budget
};

// Compute global step complexity as the mean of sub-steps (linear, not rounded)
export const COMPLEXITY_SCORE: Record<SubStep["complexity"], number> = {
  Faible: 1,
  Moyenne: 3,
  Élevée: 7,
};

export const SIGN_LINK = "";

// Offre unique pour l'estimation du projet Sentinelle
export const OFFER: OfferConfig = {
  id: "sentinelle-soc",
  name: "Sentinelle",
  conceptSummary: {
    name: "Sentinelle (SOC-as-a-Service)",
    description:
      "Plateforme SOC-as-a-Service cloud-native, avec détection en temps réel, triage automatisé par IA et réponse aux incidents pour PME, MSP et entreprises",
  },
  steps: [
    {
      id: 1,
      name: "Workflow 1 — Script vidéoconférence vers CRM",
      color: "#0EA5E9",
      backendNotes: [
        "Intégrations requises: ACT API, Teams/Meet/Autre API",
        "Enjeux: Récupération de la transcription, calendrier, compréhension ACT API",
      ],
      subSteps: [
        {
          title:
            "Aller chercher les scripts automatiquement et créer contacts/dossiers dans le CRM",
          hours: 25,
          complexity: "Moyenne",
          description:
            "Connexion aux APIs de réunion, extraction de transcript, création de dossiers/contacts ACT",
        },
      ],
    },
    {
      id: 2,
      name: "Workflow 2 — Génération des descriptions de postes",
      color: "#10B981",
      backendNotes: [
        "Intégrations requises: Teams/Meet/Autre, LLM, OneDrive/ACT ?, Email (Sendgrid)",
      ],
      subSteps: [
        {
          title:
            "Transcrire la rencontre et rédiger automatiquement la description de poste + envoi pour validation",
          hours: 20,
          complexity: "Moyenne",
          description:
            "Génération avec LLM, sauvegarde dans CRM ou document OneDrive/Drive, envoi courriel",
        },
      ],
    },
    {
      id: 3,
      name: "Workflow 3 — Diffusion des candidatures",
      color: "#F59E0B",
      backendNotes: [
        "Intégrations requises: OneDrive/ACT ?, LinkedIn/Indeed/WordPress, LLM, Facebook, Email",
        "Enjeux: Multiples APIs hétérogènes",
      ],
      subSteps: [
        {
          title:
            "Publication multi-plateformes, génération de contenus (texte/image) et envois partenaires",
          hours: 60,
          complexity: "Élevée",
          description:
            "Formatage par plateforme, appels API, génération de textes/visuels, emails aux partenaires",
        },
      ],
    },
    {
      id: 4,
      name: "Workflow 4 — Sélection et présélection",
      color: "#6366F1",
      backendNotes: [
        "Intégrations requises: ACT, Email, LLM",
        "Enjeux: Qualité des prompts et évaluation des qualifications",
      ],
      subSteps: [
        {
          title:
            "Tri des CV et gestion des statuts retenu/attente/rejeté; prise de références",
          hours: 30,
          complexity: "Moyenne",
          description:
            "Automatisation du tri, liaison des candidatures, définition du déclencheur du workflow",
        },
      ],
    },
    {
      id: 5,
      name: "Workflow 5 — Présentation des candidatures",
      color: "#F43F5E",
      backendNotes: ["Intégrations requises: ACT, Email, LLM"],
      subSteps: [
        {
          title:
            "Présentation des profils retenus avec CV et résumés; définition du trigger",
          hours: 25,
          complexity: "Moyenne",
          description:
            "Préparation et transmission automatisée des dossiers candidats au client",
        },
      ],
    },
    {
      id: 7,
      name: "Workflow 7 — Clôture et suivi post-mandat",
      color: "#14B8A6",
      backendNotes: ["Intégrations requises: Email, ACT, LLM"],
      subSteps: [
        {
          title:
            "Clôture du mandat, feuille de route facturation, suivis 30/60/90 jours, rétroaction",
          hours: 30,
          complexity: "Moyenne",
          description:
            "Cron sur date de clôture, actions programmées, demandes de feedback",
        },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Automatisation du recrutement", icon: "TrendingUp", color: "#0EA5E9" },
    { label: "Intégrations multi-API", icon: "Users", color: "#A855F7" },
    { label: "Réduction du temps de traitement", icon: "Trophy", color: "#10B981" },
  ],
};

export const ADDITIONAL_OPTIONS: Step[] = [
  {
    id: 100,
    name: "Portail des automatisations (à discuter)",
    color: "#8B5CF6",
    disableMaxMultiplier: true,
    backendNotes: [
      "Possibilité de pages avec liens pour déclencher les workflows et feedback",
      "Alternative à un dashboard custom; dépend du budget et du CRM",
    ],
    subSteps: [
      {
        title: "Définir l'approche (pages liens vs portail dédié)",
        hours: 0,
        complexity: "Faible",
        description: "À déterminer selon le budget et les contraintes CRM",
      },
    ],
  },
  {
    id: 101,
    name: "Workflow 6 — Finalisation du recrutement",
    color: "#EF4444",
    disableMaxMultiplier: true,
    backendNotes: [
      "Processus très humain; à confirmer si automatisable",
      "Intégrations possibles: Email, LLM",
    ],
    subSteps: [
      {
        title: "Informer les candidats non retenus (courriel automatisé)",
        hours: 0,
        complexity: "Faible",
        description: "À définir si on crée un workflow dédié",
      },
    ],
  },
];


export const PROJECT_SCHEDULE = [
  { name: "Mois 1", percent: 0.2 }, // Phase 1A - Authentification et tickets workflow
  { name: "Mois 2", percent: 0.25 }, // Phase 1B - Multi-utilisateurs et interface clients
  { name: "Mois 3", percent: 0.25 }, // Phase 2A - Dashboard et outils opérationnels
  { name: "Mois 4", percent: 0.2 }, // Phase 2B - Performance et rapports
  { name: "Mois 5", percent: 0.1 }, // Phase 3 - Formation et tests finaux
];

export const COST_PER_HOUR = 135;
export const HOURS_MAX_MULTIPLIER = 1.15;

// Variantes de calendrier (2, 3, 4 mois)
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

export const TIMELINE_DATA = [
  {
    month: "Mois 1",
    planning: 30,
    development: 0,
    testing: 0,
    deployment: 0,
  },
  {
    month: "Mois 2",
    planning: 60,
    development: 20,
    testing: 0,
    deployment: 0,
  },
  {
    month: "Mois 3",
    planning: 100,
    development: 50,
    testing: 10,
    deployment: 0,
  },
  {
    month: "Mois 4",
    planning: 100,
    development: 80,
    testing: 40,
    deployment: 10,
  },
  {
    month: "Mois 5",
    planning: 100,
    development: 100,
    testing: 100,
    deployment: 100,
  },
];

// Variantes des données de calendrier (lignes) pour 2, 3, 4 mois
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
