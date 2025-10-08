// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { PROJECT_NAME, SUBTITLE, TAGLINE, TEAM } from "../../lib/constants/brand";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-[#0D1117] dark:via-[#0D1117] dark:to-[#0B0F14]">
      {/* 背景装饰 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/20"
      />

      {/* 内容容器 */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-24 text-center sm:pt-10">
        {/* Logo */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-[#111827]">
          <Image
            src="/Logo.png"
            alt="BillBot"
            width={64}
            height={64}
            className="opacity-90 rounded-lg"
          />
        </div>

        {/* Title + Subtitle */}
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          {PROJECT_NAME}
        </h1>
        <p className="mt-2 text-lg text-gray-600 sm:text-xl dark:text-gray-300">
          {SUBTITLE}
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-gray-700 dark:text-gray-300">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            {TAGLINE}
          </span>
        </p>

        {/* 卖点三条 */}
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            "AI-First Intelligence — No OCR, No Limits, Just Understanding",
            "Designed for Canada — Accurate, Localized, and Bilingual Ready",
            "Scan Receipts Directly from Your Phone"
          ].map((t) => (
            <div
              key={t}
              className="rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-[#111827] dark:text-gray-300"
            >
              {t}
            </div>
          ))}
        </div>

        {/* CTA 区块 */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/details"
            className="inline-flex items-center justify-center rounded-lg bg-[#4285F4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] dark:focus:ring-offset-0"
          >
            Explore Details
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 团队区块 */}
        <section
          id="team"
          className="mx-auto mt-12 max-w-xl border-t border-gray-200 pt-8 dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Team Members
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {TEAM.map((m) => (
              <li
                key={m}
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-[#111827] dark:text-gray-300"
              >
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* 页脚 */}
        <p className="mt-14 text-xs text-gray-500 dark:text-gray-400">
          Sprint 1 Deliverable · Deployed on Vercel
        </p>
      </div>
    </main>
  );
}
