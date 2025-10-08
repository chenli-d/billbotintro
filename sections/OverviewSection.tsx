"use client";
import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">1. Project Overview</h2>
        <p className="text-lg leading-relaxed mb-4">
          <strong>What if your receipts could read themselves?</strong>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Instead of manually entering every expense, our project builds an{" "}
          <span className="text-[#00B8A9] font-medium">AI-driven pipeline</span> that transforms raw receipts directly
          into structured financial data — <em>without OCR (Optical Character Recognition).</em>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Unlike typical budgeting apps, our focus is on an{" "}
          <span className="text-[#9333EA] font-medium">OCR-free model (Donut)</span> trained to parse receipts end-to-end.
        </p>

        <div className="mt-8 bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
          <h3 className="text-2xl font-semibold text-[#4285F4] mb-4">Our Vision</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Expense tracking becomes effortless.</li>
            <li>A single photo generates accurate, structured records.</li>
            <li>AI models improve iteratively through error feedback.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
