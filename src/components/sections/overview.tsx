"use client";

import {
  Brain,
  Users,
  Trophy,
  Clock,
  DollarSign,
  Code,
  TrendingUp,
  ArrowRight,
  Layout,
  Puzzle,
  ShieldCheck,
  Ruler,
  ShoppingCart,
} from "lucide-react";
import type { OverviewFeature } from "@/config";
import { formatCurrency } from "@/utils";

type OverviewSectionProps = {
  totalHoursMin: number;
  totalHoursMax: number;
  totalCostMin: number;
  totalCostMax: number;
  stepsCount: number;
  features: OverviewFeature[];
  conceptSummary: {
    name: string;
    description: string;
  };
};

export default function OverviewSection({
  totalHoursMin,
  totalHoursMax,
  totalCostMin,
  totalCostMax,
  stepsCount,
  features,
  conceptSummary,
}: OverviewSectionProps) {
  const ICONS: Record<
    OverviewFeature["icon"],
    React.ComponentType<{ className?: string }>
  > = {
    Brain,
    Users,
    Trophy,
    TrendingUp,
    ArrowRight,
    Layout,
    Puzzle,
    ShieldCheck,
    Ruler,
    ShoppingCart,
  };
  return (
    <div className="space-y-8 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-2">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Aperçu du projet</h2>
          <p className="text-gray-600">{conceptSummary.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary flex items-center gap-2">
                  <Clock className="md:hidden h-4 w-4 text-primary" />
                  <span>Total d&apos;heures</span>
                </p>
                {totalHoursMin === totalHoursMax ? (
                  <p className="text-2xl font-bold text-primary">
                    {totalHoursMin}h
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-primary">
                    {totalHoursMin}h - {totalHoursMax}h
                  </p>
                )}
              </div>
              <Clock className="hidden md:block h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                  <DollarSign className="md:hidden h-4 w-4 text-green-600" />
                  <span>Coût total</span>
                </p>
                {totalCostMin === totalCostMax ? (
                  <p className="text-2xl font-bold text-green-900">
                    ${formatCurrency(totalCostMin)}
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-green-900">
                    ${formatCurrency(totalCostMin)} - $
                    {formatCurrency(totalCostMax)}
                  </p>
                )}
              </div>
              <DollarSign className="hidden md:block h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 flex items-center gap-2">
                  <Code className="md:hidden h-4 w-4 text-purple-600" />
                  <span>Étapes du projet</span>
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {stepsCount}
                </p>
              </div>
              <Code className="hidden md:block h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-fit bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Fonctionnalités de l&apos;application
          </h3>
          <div className="space-y-4">
            {features.map((f, idx) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={idx} className="flex items-center space-x-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${f.color}20`, color: f.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Pile technologique
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#96bf48] pl-4">
              <p className="text-sm text-gray-500">Plateforme</p>
              <p className="font-medium text-gray-900">Shopify (Thème Prestige)</p>
              <p className="text-sm text-gray-600">
                E-commerce haut de gamme avec infrastructure complète
              </p>
            </div>
            <div className="border-l-4 border-[#9333EA] pl-4">
              <p className="text-sm text-gray-500">Fidélité & Portail client</p>
              <p className="font-medium text-gray-900">Growave</p>
              <p className="text-sm text-gray-600">
                Points de fidélité, wishlist et espace membre VIP
              </p>
            </div>
            <div className="border-l-4 border-[#10B981] pl-4">
              <p className="text-sm text-gray-500">Mesures intelligentes</p>
              <p className="font-medium text-gray-900">Kiwi Sizing</p>
              <p className="text-sm text-gray-600">
                Tables de tailles dynamiques et recommandations
              </p>
            </div>
            <div className="border-l-4 border-[#EF4444] pl-4">
              <p className="text-sm text-gray-500">Retours automatisés</p>
              <p className="font-medium text-gray-900">Loop Returns</p>
              <p className="text-sm text-gray-600">
                Portail de retours client automatisé
              </p>
            </div>
            <div className="border-l-4 border-[#EC4899] pl-4">
              <p className="text-sm text-gray-500">Email Marketing</p>
              <p className="font-medium text-gray-900">Klaviyo</p>
              <p className="text-sm text-gray-600">
                Automatisations email et séquences personnalisées
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
