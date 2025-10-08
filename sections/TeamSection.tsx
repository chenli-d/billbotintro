// sections/TeamSection.tsx
"use client";
import { motion } from "framer-motion";
import { MEMBERS, type Member } from "../data/members";

export default function TeamSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#4285F4] mb-10 text-center">
          5. Team Skills & Roles
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {MEMBERS.map((m: Member) => {
            const qrSrc = `/api/qr?url=${encodeURIComponent(m.linkedin)}`;
            return (
              <div
                key={m.linkedin}
                className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col justify-between gap-5"
              >
                {/* 顶部：姓名 + 职称 */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#00B8A9] mb-1">
                    {m.name}
                  </h3>
                  {m.title && (
                    <p className="text-sm text-gray-600">{m.title}</p>
                  )}
                </div>

                {/* （头像区域已隐藏）
                <div className="flex justify-center">
                  {m.avatar ? (
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      width={64}
                      height={64}
                      className="rounded-full border border-[#E5E7EB]"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200" />
                  )}
                </div>
                */}

                {/* 技能徽章 */}
                <div className="flex flex-wrap justify-center gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-xs font-medium text-[#1F2937] shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Focus 列表 */}
                <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
                  <p className="text-sm font-semibold text-[#4285F4] mb-2">
                    Focus
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    {m.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* LinkedIn 链接 + 动态 QR */}
                <div className="flex items-center justify-between mt-2">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4285F4] hover:underline"
                  >
                    View LinkedIn
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42l9.3-9.29H14V3Z"
                      />
                      <path
                        fill="currentColor"
                        d="M5 5h5V3H3v7h2V5Z"
                        opacity=".3"
                      />
                    </svg>
                  </a>

                  <img
                    src={qrSrc}
                    alt={`LinkedIn QR for ${m.name}`}
                    className="w-24 h-24 border border-[#E5E7EB] rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:opacity-95"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
