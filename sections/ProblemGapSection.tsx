"use client";
import { motion } from "framer-motion";

export default function ProblemGapSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">2. Problem Statement & Gap Analysis</h2>

        <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">The Problem</h3>
        <p className="text-lg leading-relaxed mb-6">
          Expense tracking today is <strong>manual and time-consuming.</strong> OCR apps exist but most are generic or
          international. In Canada, there is <strong>no AI-first receipt app</strong> tailored for consumers.
        </p>

        <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">Gap Identified</h3>
        <p className="text-lg leading-relaxed mb-6">
          Lack of a locally focused, consumer-oriented AI receipt app that automatically extracts essential fields
          (date, vendor, amount) from Canadian-style receipts.
        </p>

        <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">How We Address the Gap</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Use an OCR-free vision-language model (Donut) that outputs structured JSON.</li>
          <li>Fine-tune for Canadian receipts with GST/HST/PST formats.</li>
          <li>Ensure accurate parsing of key fields (date, merchant, total, currency).</li>
          <li>Deliver a working AI prototype instead of a full finance app.</li>
        </ul>
      </motion.div>
    </section>
  );
}
