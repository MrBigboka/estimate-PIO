"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, DollarSign, Code, Target, ListPlus, UsersRound } from "lucide-react";
import PrettyInsideOutLogo from "@/components/sentinelle-logo";
import {
  COST_PER_HOUR,
  HOURS_MAX_MULTIPLIER,
  OFFER,
  TIMELINE_DATA,
  PROJECT_SCHEDULE,
  SIGN_LINK,
  ADDITIONAL_OPTIONS,
} from "@/config";
import { getStepComplexity, getStepHoursMin, formatCurrency } from "@/utils";
import OverviewSection from "@/components/sections/overview";
import PhasesSection from "@/components/sections/phases";
import OptionsSection from "@/components/sections/options";
import CostsSection from "@/components/sections/costs";
import TimelineSection from "@/components/sections/timeline";
import { SignButton } from "@/components/sign-button";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function EstimateShowcase() {
  const [activeSection, setActiveSection] = useState("overview");
  // Single offer configuration
  const [selectedOffer] = useState("hr-automations");
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>(
    {}
  );
  const [expandedOptions, setExpandedOptions] = useState<
    Record<number, boolean>
  >({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const [thumbStyle, setThumbStyle] = useState<{
    left: number;
    width: number;
    visible: boolean;
  }>({ left: 0, width: 0, visible: false });

  const selectedOfferConfig = OFFER;
  const selectedFeatures = selectedOfferConfig.overviewFeatures;
  const selectedConceptSummary = selectedOfferConfig.conceptSummary;

  const toggleStep = (id: number) => {
    setExpandedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleOption = (id: number) => {
    setExpandedOptions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Animate thumb under active tab
  useEffect(() => {
    const updateThumb = () => {
      const container = tabsContainerRef.current;
      if (!container) return;
      const tabEl = container.querySelector(
        `[data-section-id="${activeSection}"]`
      ) as HTMLElement | null;
      if (!tabEl) return;
      const left = tabEl.offsetLeft - container.scrollLeft;
      const width = tabEl.offsetWidth;
      setThumbStyle({ left, width, visible: true });
    };

    updateThumb();
    window.addEventListener("resize", updateThumb);
    const container = tabsContainerRef.current;
    container?.addEventListener("scroll", updateThumb, { passive: true });
    return () => {
      window.removeEventListener("resize", updateThumb);
      container?.removeEventListener("scroll", updateThumb);
    };
  }, [activeSection]);

  const selectedSteps = selectedOfferConfig.steps;

  const computedSteps = selectedSteps.map((s) => {
    const hoursMin = getStepHoursMin(s);
    const hoursMax = s.disableMaxMultiplier
      ? hoursMin
      : Math.round(hoursMin * HOURS_MAX_MULTIPLIER);
    const costMin = hoursMin * COST_PER_HOUR;
    const costMax = s.disableMaxMultiplier ? costMin : hoursMax * COST_PER_HOUR;
    return {
      ...s,
      hoursMin,
      hoursMax,
      costMin,
      costMax,
      complexity: getStepComplexity(s),
    };
  });

  const computedOptions = ADDITIONAL_OPTIONS.map((s) => {
    const hoursMin = getStepHoursMin(s);
    const hoursMax = Math.round(hoursMin * HOURS_MAX_MULTIPLIER);
    const costMin = hoursMin * COST_PER_HOUR;
    const costMax = hoursMax * COST_PER_HOUR;
    return {
      ...s,
      hoursMin,
      hoursMax,
      costMin,
      costMax,
      complexity: getStepComplexity(s),
    };
  });

  const totalCostMin = computedSteps.reduce((sum, s) => sum + s.costMin, 0);
  const totalCostMax = computedSteps.reduce((sum, s) => sum + s.costMax, 0);
  const totalHoursMin = computedSteps.reduce((sum, s) => sum + s.hoursMin, 0);
  const totalHoursMax = computedSteps.reduce((sum, s) => sum + s.hoursMax, 0);
  // const totalWeeks = steps.reduce((sum, s) => sum + s.weeks, 0);

  // Monthly cost distribution based on PROJECT_SCHEDULE config
  let runningMin = 0;
  let runningMax = 0;
  const monthlyCostData = PROJECT_SCHEDULE.map((m) => {
    const min = Math.round(totalCostMin * m.percent);
    const max = Math.round(totalCostMax * m.percent);
    runningMin += min;
    runningMax += max;
    return {
      month: m.name,
      min,
      max,
      cumMin: runningMin,
      cumMax: runningMax,
    };
  });

  // Steps allocation per month based on HOURS_PER_MONTH capacity
  const stepsQueue = computedSteps.map((s) => ({
    id: s.id,
    remaining: s.hoursMin,
  }));
  const monthStepAllocations: { month: string; stepIds: number[] }[] =
    PROJECT_SCHEDULE.map((m) => ({ month: m.name, stepIds: [] }));
  let stepIdx = 0;
  for (let mIdx = 0; mIdx < monthStepAllocations.length; mIdx++) {
    let capacity = Math.max(
      0,
      Math.round(totalHoursMin * (PROJECT_SCHEDULE[mIdx]?.percent ?? 0))
    );
    while (capacity > 0 && stepIdx < stepsQueue.length) {
      const cur = stepsQueue[stepIdx];
      if (cur.remaining <= 0) {
        stepIdx++;
        continue;
      }
      if (!monthStepAllocations[mIdx].stepIds.includes(cur.id)) {
        monthStepAllocations[mIdx].stepIds.push(cur.id);
      }
      const consume = Math.min(capacity, cur.remaining);
      capacity -= consume;
      cur.remaining -= consume;
      if (cur.remaining === 0) {
        stepIdx++;
      }
    }
  }

  const idToStep = new Map(computedSteps.map((s) => [s.id, s] as const));
  const monthSteps = monthStepAllocations.map((m) => ({
    month: m.month,
    steps: m.stepIds.map((id) => {
      const s = idToStep.get(id)!;
      return { id, name: s.name, color: s.color };
    }),
  }));

  // Complexity derived directly from steps

  const sections = useMemo(
    () => [
      { id: "overview", name: "Aperçu du projet", icon: Target },
      { id: "phases", name: "Étapes du projet", icon: Code },
      { id: "options", name: "Options additionnelles", icon: ListPlus },
      { id: "timeline", name: "Calendrier", icon: Clock },
      { id: "costs", name: "Analyse des coûts", icon: DollarSign },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary-light/10">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-6">
            <div className="flex items-start md:items-center space-x-3">
              <PrettyInsideOutLogo />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  {selectedConceptSummary.name}
                </h1>
                <p className="hidden md:block text-gray-600 text-sm md:text-base">
                  Estimation de développement et plan de projet
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-end md:text-right md:items-center">
              <div>
                <div className="text-start text-sm text-gray-500">
                  Coût total estimé
                </div>
                <div className="flex items-center gap-2">
                  {totalCostMin === totalCostMax ? (
                    <p className="text-2xl font-bold text-primary text-right w-full">
                      ${formatCurrency(totalCostMin)}
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-primary">
                      ${formatCurrency(totalCostMin)} - $
                      {formatCurrency(totalCostMax)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div
              ref={tabsContainerRef}
              className="flex space-x-8 overflow-x-auto"
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    data-section-id={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-2 py-5 px-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{section.name}</span>
                  </button>
                );
              })}
            </div>
            {thumbStyle.visible && (
              <div
                className="pointer-events-none absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out"
                style={{ left: thumbStyle.left, width: thumbStyle.width }}
              />
            )}
            {/* <div className="hidden md:block space-x-2">
              <SignButton link={SIGN_LINK} />
            </div> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-40">
        {activeSection === "overview" && (
          <OverviewSection
            totalHoursMin={totalHoursMin}
            totalHoursMax={totalHoursMax}
            totalCostMin={totalCostMin}
            totalCostMax={totalCostMax}
            stepsCount={selectedSteps.length}
            features={selectedFeatures}
            conceptSummary={selectedConceptSummary}
          />
        )}

        {activeSection === "phases" && (
          <PhasesSection
            computedSteps={computedSteps}
            expandedSteps={expandedSteps}
            toggleStep={toggleStep}
          />
        )}

        {activeSection === "options" && (
          <OptionsSection
            computedOptions={computedOptions}
            expandedOptions={expandedOptions}
            toggleOption={toggleOption}
          />
        )}

        {activeSection === "costs" && (
          <CostsSection computedSteps={computedSteps} />
        )}

        {activeSection === "timeline" && (
          <TimelineSection
            totalCostMin={totalCostMin}
            totalCostMax={totalCostMax}
            totalHoursMin={totalHoursMin}
            computedSteps={computedSteps.map((s) => ({ id: s.id, name: s.name, color: s.color, hoursMin: s.hoursMin }))}
          />
        )}

        <div className="fixed bottom-6 right-6 z-50 w-full">
          <div className="max-w-7xl mx-auto px-4 flex justify-end">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur rounded-full shadow-lg border border-gray-200 px-4 py-2">
              <SignButton className="h-10 px-5 rounded-full" link={SIGN_LINK} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
