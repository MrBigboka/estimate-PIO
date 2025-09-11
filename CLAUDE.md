# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** HR automation estimation tool built with **TypeScript** and **React 19**. The application provides interactive project estimation for HR workflow automation services, including cost calculations, timeline visualization, and project phases breakdown.

## Key Architecture

### Core Configuration (`src/config.ts`)
- **Single-source configuration** for the entire estimation system
- Defines project workflows as `Step[]` with complexity ratings and hour estimates
- Contains pricing constants (`COST_PER_HOUR = 135`, `HOURS_MAX_MULTIPLIER = 1.15`)
- Multiple timeline variants for different project durations (2m, 3m, 4m, 6m, 8m, 12m)
- All business logic and project data centralized here

### Component Architecture
- **Section-based layout**: `src/components/sections/` contains major UI sections
  - `overview.tsx` - Project summary and features
  - `phases.tsx` - Workflow steps breakdown
  - `costs.tsx` - Cost calculations and pricing
  - `timeline.tsx` - Project timeline visualization
  - `options.tsx` - Additional project options
- **UI Components**: Uses shadcn/ui with Radix UI primitives
- **Charts**: Recharts integration for timeline visualization

### State Management
- React hooks and local state management
- No external state management library
- Configuration-driven UI updates

## Development Commands

```bash
# Development server (with Turbopack)
npm run dev

# Production build (with Turbopack)  
npm run build

# Production server
npm run start

# Linting
npm run lint
```

## Tech Stack Details

- **Framework**: Next.js 15 with App Router
- **Bundler**: Turbopack (enabled in dev and build)
- **UI**: shadcn/ui components with Tailwind CSS v4
- **Charts**: Recharts for timeline visualization
- **Icons**: Lucide React
- **TypeScript**: Fully typed application

## Project-Specific Patterns

### Complexity System
- Three complexity levels: `"Faible"`, `"Moyenne"`, `"Élevée"` with scores 1, 3, 7
- Step complexity calculated as mean of sub-steps
- Used for hour estimation and cost multipliers

### Configuration Structure
- `OfferConfig` defines entire project structure
- `Step` objects contain sub-steps with detailed hour estimates
- Timeline data variants allow different project duration scenarios
- French language used throughout business configuration

### Styling Approach
- Tailwind CSS with custom design system
- Color-coded project phases
- Responsive design with mobile-first approach
- shadcn/ui component theming with CSS variables