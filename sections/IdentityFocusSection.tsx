"use client";
import { motion } from "framer-motion";

export default function IdentityFocusSection() {
  const values = [
    {
      title: "Why We’re Committed",
      text:
        "Manual data entry wastes time. AI should handle the boring parts—like receipts—so people can focus on meaningful work.",
    },
    {
      title: "What Drives Us",
      text:
        "Curiosity about OCR-free document AI, passion for real-world deployment, and the desire to ship a learning system.",
    },
    {
      title: "Our Value Proposition",
      text:
        "An AI-first expense tracker where the true product is the self-improving receipt model, not the UI wrapper.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">7. Professional Identity Focus</h2>

        <p className="text-lg leading-relaxed mb-8">
          We build BillBot as an <span className="font-medium text-[#00B8A9]">AI-first</span> project—proving impact beyond academic benchmarks,
          and demonstrating a system that learns from real usage and improves over time.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#00B8A9] mb-2">{v.title}</h3>
              <p className="text-[15px] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        {/* Tagline Card */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
          <p className="text-center text-2xl italic text-[#1F2937]">
            “Receipts that read themselves.”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
