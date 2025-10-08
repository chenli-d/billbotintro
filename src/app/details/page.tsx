// src/app/details/page.tsx
import React from "react";

// 局部组件
import TopNav from "./_components/TopNav";
import Section from "./_components/Section";
import Footer from "./_components/Footer";

// 常量定义（lib 在项目根：上三级）
import type { SectionDef } from "../../../lib/constants/sections";
import { sections as sectionDefs } from "../../../lib/constants/sections";

// 8 个分区的实际内容组件（sections 在项目根：上三级）
import OverviewSection from "../../../sections/OverviewSection";
import ProblemGapSection from "../../../sections/ProblemGapSection";
import TrendsSection from "../../../sections/TrendsSection";
import BrandIdentitySection from "../../../sections/BrandIdentitySection";
import TeamSection from "../../../sections/TeamSection";
import StatusSprintsSection from "../../../sections/StatusSprintsSection";
import IdentityFocusSection from "../../../sections/IdentityFocusSection";
import DonutVsOCRSection from "../../../sections/DonutVsOCRSection";

const ORDER: SectionDef["id"][] = [
  "overview",
  "problem-gap",
  "trends",
  "brand",
  "team",
  "status-sprints",
  "identity",
  "donut-vs-ocr",
];

const CONTENT_BY_ID: Record<SectionDef["id"], React.ReactNode> = {
  "overview": <OverviewSection />,
  "problem-gap": <ProblemGapSection />,
  "trends": <TrendsSection />,
  "brand": <BrandIdentitySection />,
  "team": <TeamSection />,
  "status-sprints": <StatusSprintsSection />,
  "identity": <IdentityFocusSection />,
  "donut-vs-ocr": <DonutVsOCRSection />,
};

// src/app/details/page.tsx
export default function DetailsPage() {
  return (
    <main className="bg-white dark:bg-[#0D1117] text-gray-800 dark:text-gray-100">
      <TopNav />
      <div className="pt-0">
        {ORDER.map((id) => (
          <Section key={id} id={id}>
            {CONTENT_BY_ID[id]}
          </Section>
        ))}
      </div>
      <Footer />
    </main>
  );
}

