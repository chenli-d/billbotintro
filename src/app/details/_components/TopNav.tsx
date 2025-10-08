"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import type { SectionDef } from "../../../../lib/constants/sections";
import { sections } from "../../../../lib/constants/sections";
import { PROJECT_NAME, SUBTITLE } from "../../../../lib/constants/brand";

export default function TopNav() {
  const [active, setActive] = useState<string>("overview");
  const [open, setOpen] = useState(false);

  const sectionIds: string[] = useMemo(() => sections.map((s: SectionDef) => s.id), []);

  // 使用 IntersectionObserver 高亮当前 section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: [0.25, 0.5, 0.75],
    };

    const handler = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActive(id);
        }
      }
    };

    const io = new IntersectionObserver(handler, opts);
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [sectionIds]);

  const handleAnchorClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0D1117]/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-gray-200/70 dark:border-gray-700/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* 左：品牌 / 副标题 / Sprint 徽章 */}
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="group flex items-baseline gap-2 shrink-0">
              <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {PROJECT_NAME}
              </span>
              {/* <span className="hidden md:inline text-sm text-gray-500 dark:text-gray-400 truncate">
                {SUBTITLE}
              </span> */}
            </Link>
            <span className="hidden sm:inline-flex items-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900 px-2.5 py-0.5 text-xs font-medium">
              Sprint 1 Deliverable
            </span>
          </div>

          {/* 右：桌面导航 */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            {sections.map((s: SectionDef) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={handleAnchorClick}
                className={[
                  "transition-colors",
                  "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400",
                  active === s.id ? "text-blue-600 dark:text-blue-400 font-semibold" : "",
                ].join(" ")}
              >
                {s.short ?? s.title}
              </a>
            ))}
            <Link
              href="/"
              className="ml-1 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              title="Back to Home"
            >
              Home
            </Link>
          </nav>

          {/* 移动端汉堡 */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-[#0D1117]/90">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid grid-cols-2 gap-2 text-sm">
            {sections.map((s: SectionDef) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={handleAnchorClick}
                className={[
                  "rounded-md px-3 py-2 border transition-colors",
                  active === s.id
                    ? "border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 bg-blue-50/60 dark:bg-blue-950/30"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600",
                ].join(" ")}
              >
                {s.short ?? s.title}
              </a>
            ))}
            <Link
              href="/"
              onClick={handleAnchorClick}
              className="rounded-md px-3 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600"
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
