"use client";
import { motion } from "framer-motion";

export default function DonutVsOCRSection() {
  const rows = [
    {
      left: { title: "Pipeline", body: "Two-stage: OCR → rules/model for extraction" },
      right: { title: "Pipeline", body: "Single-stage: Image → structured JSON" },
    },
    {
      left: { title: "Risk", body: "Error propagation (e.g., $8.00 → $B.00)" },
      right: { title: "Risk", body: "End-to-end robustness; fewer failure points" },
    },
    {
      left: { title: "Maintenance", body: "Manage OCR + KIE; complex debugging/latency" },
      right: { title: "Maintenance", body: "Simpler architecture; lower latency" },
    },
    {
      left: { title: "Adaptation", body: "Generic OCR; hard to adapt to domain" },
      right: { title: "Adaptation", body: "Learns directly from Canadian receipts (GST/HST/PST)" },
    },
    {
      left: { title: "Differentiation", body: "Crowded OCR-based market" },
      right: { title: "Differentiation", body: "Modern, research-aligned document AI (Donut)" },
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">
          Appendix — Why OCR-Free (Donut) Instead of Traditional OCR
        </h2>

        <p className="text-lg leading-relaxed mb-8">
          OCR-first systems split reading and understanding into separate steps, increasing errors and complexity.
          Donut directly maps receipts to JSON (<span className="font-medium">date, merchant, total</span>), offering a cleaner,
          faster, and more adaptable approach.
        </p>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Traditional OCR */}
          <div className="bg-[#FDECEC] rounded-2xl p-6 border border-[#F9C9C9] shadow-sm">
            <h3 className="text-2xl font-semibold text-[#EA4335] mb-3">Traditional OCR Pipeline</h3>
            <ul className="space-y-3">
              {rows.map((r, i) => (
                <li key={i}>
                  <p className="font-medium">{r.left.title}</p>
                  <p className="text-[15px]">{r.left.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Donut */}
          <div className="bg-[#ECF7FF] rounded-2xl p-6 border border-[#CFE8FF] shadow-sm">
            <h3 className="text-2xl font-semibold text-[#4285F4] mb-3">OCR-Free (Donut)</h3>
            <ul className="space-y-3">
              {rows.map((r, i) => (
                <li key={i}>
                  <p className="font-medium">{r.right.title}</p>
                  <p className="text-[15px]">{r.right.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-8 bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
          <h4 className="text-xl font-semibold text-[#00B8A9] mb-2">In Summary</h4>
          <p className="leading-relaxed">
            Choosing Donut showcases BillBot’s innovation: an AI-first expense tracker that understands receipts,
            learns from feedback, and adapts to Canadian formats—without the fragility of OCR.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
