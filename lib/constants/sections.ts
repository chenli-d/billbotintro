// src/lib/constants/sections.ts

export type SectionDef = {
  id:
    | "overview"
    | "problem-gap"
    | "trends"
    | "brand"
    | "team"
    | "status-sprints"
    | "identity"
    | "donut-vs-ocr";
  title: string;
  short?: string; // 导航简写可选
  description?: string; // 可用于占位简介
};

export const sections: SectionDef[] = [
  {
    id: "overview",
    title: "Project Overview",
    short: "Overview",
  },
  {
    id: "problem-gap",
    title: "Problem Statement & Gap Analysis",
    short: "Problem & Gap",
  },
  {
    id: "trends",
    title: "Emerging Trends",
    short: "Trends",
  },
  {
    id: "brand",
    title: "Brand Identity",
    short: "Brand",
  },
  {
    id: "team",
    title: "Team Skills & Roles",
    short: "Team",
  },
  {
    id: "status-sprints",
    title: "Project Status & Future Sprints",
    short: "Status & Sprints",
  },
  {
    id: "identity",
    title: "Professional Identity Focus",
    short: "Identity",
  },
  {
    id: "donut-vs-ocr",
    title: "Donut vs Traditional OCR",
    short: "Donut vs OCR",
  },
];
