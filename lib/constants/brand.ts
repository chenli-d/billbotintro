// src/lib/constants/brand.ts

export const PROJECT_NAME = "BillBot";
export const SUBTITLE = "AI-First Receipt Recognition";
export const TAGLINE = "Receipts that read themselves.";

export const TEAM = [
  "An-Ni Huang",
  "Chen Li",
  "Si Di",
  "Himanshi Punj",
] as const;

export type ColorToken = {
  name: string;
  hex: `#${string}`;
  usage?: string;
};

export const COLORS = {
  core: {
    primaryBlue: { name: "Primary Blue", hex: "#4285F4", usage: "Trust / Focus; CTAs; nav highlight" } as ColorToken,
    infoSkyBlue: { name: "Info Sky Blue", hex: "#38BDF8", usage: "Informational text, accents, neutral highlights" } as ColorToken,
    lightBackground: { name: "Light Background", hex: "#F5F5F7", usage: "Base background" } as ColorToken,
    border: { name: "Border/Divider", hex: "#E5E7EB", usage: "Dividers, card borders" } as ColorToken,
    mutedText: { name: "Muted Text", hex: "#6B7280", usage: "Secondary text" } as ColorToken,
    darkText: { name: "Dark Text", hex: "#1F2937", usage: "Primary text / headings" } as ColorToken,
  },
  darkMode: {
    background: { name: "Background", hex: "#0D1117", usage: "Dark mode base background" } as ColorToken,
    surface: { name: "Surface (Card)", hex: "#111827", usage: "Cards / containers" } as ColorToken,
    border: { name: "Border", hex: "#374151", usage: "Dividers in dark mode" } as ColorToken,
  },
  supporting: {
    accentTeal: { name: "Accent Teal", hex: "#00B8A9", usage: "Innovation / freshness; tags" } as ColorToken,
    successGreen: { name: "Success Green", hex: "#22C55E", usage: "Positive state / confirmations" } as ColorToken,
    errorRed: { name: "Error Red", hex: "#EA4335", usage: "Expense highlights / alerts / errors" } as ColorToken,
    warningAmber: { name: "Warning Amber", hex: "#F59E0B", usage: "Caution / budget thresholds" } as ColorToken,
    categoryPurple: { name: "Category Purple", hex: "#9333EA", usage: "Entertainment / creativity" } as ColorToken,
  },
} as const;

export const FONTS = {
  current: {
    body: "Space Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  planned: {
    headers: "Montserrat, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
    body: "Inter, 'Source Sans Pro', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
    code: "Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  note:
    "Current font uses Space Mono. Montserrat (headers), Inter/Source Sans Pro (body), and Fira Code (code) will be integrated in Sprint 2.",
} as const;

// 小帮手：把颜色拍平成列表（用于渲染）
export const ALL_BRAND_COLORS: ColorToken[] = [
  COLORS.core.primaryBlue,
  COLORS.core.infoSkyBlue,
  COLORS.core.lightBackground,
  COLORS.core.border,
  COLORS.core.mutedText,
  COLORS.core.darkText,
  COLORS.darkMode.background,
  COLORS.darkMode.surface,
  COLORS.darkMode.border,
  COLORS.supporting.accentTeal,
  COLORS.supporting.successGreen,
  COLORS.supporting.errorRed,
  COLORS.supporting.warningAmber,
  COLORS.supporting.categoryPurple,
];
