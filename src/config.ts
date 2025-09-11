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

// Offre unique pour l'estimation du projet Sentinelle - CherySec Solutions
export const OFFER: OfferConfig = {
  id: "sentinelle-soc",
  name: "Sentinelle",
  conceptSummary: {
    name: "Sentinelle – CherySec Solutions",
    description:
      "SOC-as-a-Service cloud-native pour PME/MSP/entreprises, combinant ingestion de logs, règles Sigma/YARA, triage IA (RAG/LLM) et SOAR lite pour détecter, prioriser et répondre rapidement aux incidents",
  },
  steps: [
    {
      id: 0,
      name: "Phase 0 — Setup Environnement & CI/CD",
      color: "#6B7280",
      backendNotes: [
        "Technologies: GitHub Actions, Docker Compose, Vercel, VM déploiement, Sentry, Grafana",
        "Infrastructure: FastAPI + Postgres + Redis + Elasticsearch en développement",
        "Déploiement: Staging/Production avec monitoring pipeline",
      ],
      subSteps: [
        {
          title: "Setup repo + conventions + GitHub Actions",
          hours: 4,
          complexity: "Moyenne",
          description: "Configuration repository avec conventions de code et CI/CD",
        },
        {
          title: "Docker Compose (FastAPI + Postgres + Redis + ES) pour dev",
          hours: 6,
          complexity: "Moyenne",
          description: "Environnement de développement containerisé complet",
        },
        {
          title: "Provision VM cloud + configuration de base (TLS, firewall, monitoring)",
          hours: 6,
          complexity: "Moyenne",
          description: "Création VM, Docker, sécurisation TLS/firewall, préparation hébergement",
        },
        {
          title: "Déploiement staging/prod (Vercel front + VM back)",
          hours: 6,
          complexity: "Moyenne",
          description: "Pipeline de déploiement automatisé staging et production",
        },
        {
          title: "Config monitoring pipeline ingestion (Sentry/Grafana hooks)",
          hours: 4,
          complexity: "Moyenne",
          description: "Configuration monitoring et observabilité des pipelines",
        },
      ],
    },
    {
      id: 1,
      name: "Phase 1 — Ingestion & Indexation (Logs)",
      color: "#2563EB",
      backendNotes: [
        "Technologies: Sysmon, Winlogbeat/rsyslog/Filebeat, Logstash, FastAPI, Elasticsearch, PostgreSQL, Redis",
        "Pipelines Beats → Logstash (grok/ecs) → Elasticsearch (templates, ILM 30j)",
        "Sécurité: TLS, tokens d'ingestion, RBAC minimal par organisation",
      ],
      subSteps: [
        {
          title: "Agents Windows (Sysmon + Winlogbeat)",
          hours: 8,
          complexity: "Élevée",
          description: "Configuration agents Windows pour ingestion logs",
        },
        {
          title: "Agents Linux (rsyslog/Filebeat)",
          hours: 6,
          complexity: "Moyenne",
          description: "Configuration agents Linux pour ingestion logs",
        },
        {
          title: "Logstash pipelines (parsing ECS)",
          hours: 8,
          complexity: "Élevée",
          description: "Pipelines de parsing et normalisation ECS",
        },
        {
          title: "Index templates + ILM (retention)",
          hours: 6,
          complexity: "Moyenne",
          description: "Templates Elasticsearch et gestion du cycle de vie",
        },
        {
          title: "API Ingest FastAPI (auth tenant + rate-limit Redis)",
          hours: 6,
          complexity: "Élevée",
          description: "API d'ingestion avec authentification et rate limiting",
        },
      ],
    },
    {
      id: 2,
      name: "Phase 2 — Backend Core & Corrélation minimale",
      color: "#10B981",
      backendNotes: [
        "Technologies: FastAPI, PostgreSQL (SQL + JSONB), Elasticsearch, Redis",
        "Schémas: events, alerts, incidents, assets, tenants, users, roles",
        "Corrélation v0: règles simples + seuil d'événements (no ML)",
      ],
      subSteps: [
        {
          title: "Schémas + migrations (Prisma/SQL)",
          hours: 6,
          complexity: "Moyenne",
          description: "Modèles de données et migrations PostgreSQL",
        },
        {
          title: "Normalisation champs + dédup",
          hours: 6,
          complexity: "Moyenne",
          description: "Normalisation des événements et déduplication",
        },
        {
          title: "Corrélation v0 (règles basiques)",
          hours: 8,
          complexity: "Élevée",
          description: "Moteur de corrélation simple avec règles de base",
        },
        {
          title: "RBAC/tenants (org_id, scopes)",
          hours: 4,
          complexity: "Moyenne",
          description: "Système de rôles et isolation multi-tenant",
        },
        {
          title: "Tests API + doc OpenAPI",
          hours: 4,
          complexity: "Faible",
          description: "Tests unitaires et documentation OpenAPI",
        },
      ],
    },
    {
      id: 3,
      name: "Phase 3 — Dashboard & Case Management (v0)",
      color: "#9333EA",
      backendNotes: [
        "Technologies: Next.js/React, Tailwind, shadcn/ui, Recharts",
        "Filtres par sévérité, tenant, source, période",
        "Audit trail basique (qui fait quoi, quand)",
      ],
      subSteps: [
        {
          title: "Shell app + Auth (SSO plus tard)",
          hours: 4,
          complexity: "Faible",
          description: "Structure de base de l'application avec authentification",
        },
        {
          title: "Vues Alertes/Incidents + filtres",
          hours: 6,
          complexity: "Moyenne",
          description: "Interfaces principales avec système de filtrage",
        },
        {
          title: "Recherche logs (ES)",
          hours: 4,
          complexity: "Moyenne",
          description: "Recherche dans les logs via Elasticsearch",
        },
        {
          title: "MITRE heatmap (mapping v0)",
          hours: 3,
          complexity: "Faible",
          description: "Visualisation MITRE ATT&CK basique",
        },
        {
          title: "Case Management (assign/notes/status)",
          hours: 3,
          complexity: "Moyenne",
          description: "Gestion des cas avec assignation et commentaires",
        },
      ],
    },
    {
      id: 4,
      name: "Phase 4 — Triage IA (RAG/LLM) v0",
      color: "#F59E0B",
      backendNotes: [
        "Technologies: OpenAI/Claude, Weaviate/Pinecone ou pgvector, RAG",
        "Résumé d'alertes, score de risque, suggestions (playbooks)",
        "Pane latéral IA dans l'UI",
      ],
      subSteps: [
        {
          title: "Data prep (Sigma, MITRE, playbooks)",
          hours: 4,
          complexity: "Moyenne",
          description: "Préparation des données pour le RAG",
        },
        {
          title: "Prompts engineering",
          hours: 4,
          complexity: "Élevée",
          description: "Développement des prompts pour triage IA",
        },
        {
          title: "Vector store setup",
          hours: 4,
          complexity: "Élevée",
          description: "Configuration du store vectoriel pour RAG",
        },
        {
          title: "UI pane IA",
          hours: 4,
          complexity: "Moyenne",
          description: "Interface utilisateur pour le triage IA",
        },
        {
          title: "Evaluation & tuning",
          hours: 2,
          complexity: "Faible",
          description: "Tests et ajustements du modèle IA",
        },
      ],
    },
    {
      id: 5,
      name: "Phase 5 — SOAR Lite (actions guidées)",
      color: "#EF4444",
      backendNotes: [
        "Technologies: n8n, webhooks FastAPI, intégrations Cloudflare/Jira/ServiceNow",
        "Actions semi-automatisées: block IP, fermeture port, ticketing",
        "Templates d'emails",
      ],
      subSteps: [
        {
          title: "Connecteur Cloudflare (MVP)",
          hours: 12,
          complexity: "Élevée",
          description: "Intégration API Cloudflare pour blocage IP avec authentification sécurisée",
        },
        {
          title: "Framework SOAR & UI actions",
          hours: 6,
          complexity: "Moyenne",
          description: "Interface pour déclencher les actions SOAR",
        },
        {
          title: "Audit trail & gouvernance",
          hours: 4,
          complexity: "Moyenne",
          description: "Traçabilité des actions executées",
        },
        {
          title: "Tests d'intégration & sandbox",
          hours: 4,
          complexity: "Faible",
          description: "Tests des workflows SOAR",
        },
      ],
    },
    {
      id: 6,
      name: "Phase 6 — Pilot, QA & Feedback",
      color: "#0EA5E9",
      backendNotes: [
        "Technologies: Sentry, Grafana/Prometheus, Upptime",
        "Onboarding 1-2 pilotes, SLA basique, playbooks d'exploitation",
      ],
      subSteps: [
        {
          title: "Runbook d'exploitation",
          hours: 4,
          complexity: "Moyenne",
          description: "Documentation opérationnelle et procédures",
        },
        {
          title: "Observabilité (Sentry, Grafana)",
          hours: 4,
          complexity: "Moyenne",
          description: "Monitoring et alerting système",
        },
        {
          title: "Pilot clients & itérations",
          hours: 4,
          complexity: "Faible",
          description: "Onboarding pilotes et ajustements",
        },
      ],
    },
  ],
  overviewFeatures: [
    { label: "Détection en temps réel + triage IA en 4 semaines (MVP)", icon: "TrendingUp", color: "#2563EB" },
    { label: "MSP-ready : multi-tenant & RBAC dès la v1", icon: "Users", color: "#9333EA" },
    { label: "SOAR lite : actions guidées sécurisées", icon: "Brain", color: "#10B981" },
    { label: "Chemin clair vers compliance (SOC2/ISO)", icon: "Trophy", color: "#EF4444" },
  ],
};

export const ADDITIONAL_OPTIONS: Step[] = [
  {
    id: 100,
    name: "SSO (Azure AD/Google)",
    color: "#8B5CF6",
    disableMaxMultiplier: true,
    backendNotes: [
      "OAuth/OIDC, SCIM light",
    ],
    subSteps: [
      {
        title: "OAuth/OIDC + SCIM light",
        hours: 14,
        complexity: "Élevée",
        description: "Single Sign-On avec provisioning utilisateurs",
      },
    ],
  },
  {
    id: 101,
    name: "Rapports Compliance",
    color: "#EF4444",
    disableMaxMultiplier: true,
    backendNotes: [
      "SOC2/ISO27001 PDF planifiés",
    ],
    subSteps: [
      {
        title: "Templates SOC2/ISO27001",
        hours: 16,
        complexity: "Moyenne",
        description: "Rapports de conformité automatisés",
      },
    ],
  },
  {
    id: 102,
    name: "EDR Intégration",
    color: "#10B981",
    disableMaxMultiplier: true,
    backendNotes: [
      "SentinelOne/CrowdStrike (read-only)",
    ],
    subSteps: [
      {
        title: "SentinelOne/CrowdStrike read-only",
        hours: 20,
        complexity: "Élevée",
        description: "Intégration EDR en lecture seule",
      },
    ],
  },
  {
    id: 103,
    name: "Mobile Alerts",
    color: "#F59E0B",
    disableMaxMultiplier: true,
    backendNotes: [
      "App légère iOS/Android",
    ],
    subSteps: [
      {
        title: "App iOS/Android légère",
        hours: 32,
        complexity: "Élevée",
        description: "Application mobile pour alertes critiques",
      },
    ],
  },
];

export const PROJECT_SCHEDULE = [
  { name: "Semaine 1-2", percent: 0.65 }, // Phase 1-2 - MVP Core
  { name: "Semaine 3-4", percent: 0.35 }, // Phase 3 - Dashboard
  // Extensions (mois 2)
  { name: "Extensions", percent: 0.35 }, // Phase 4-6 - IA & SOAR
];

export const COST_PER_HOUR = 138;
export const HOURS_MAX_MULTIPLIER = 1.15;

// Variantes de calendrier (2, 3, 4, 6, 8, 12 mois)
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
    { name: "Mois 1", percent: 0.25 },
    { name: "Mois 2", percent: 0.25 },
    { name: "Mois 3", percent: 0.15 },
    { name: "Mois 4", percent: 0.15 },
    { name: "Mois 5", percent: 0.10 },
    { name: "Mois 6", percent: 0.10 },
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
  {
    month: "Mois 6",
    planning: 100,
    development: 100,
    testing: 100,
    deployment: 100,
  },
];

// Variantes des données de calendrier (lignes) pour 2, 3, 4, 6, 8, 12 mois
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