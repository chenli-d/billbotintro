"use client";
import { motion } from "framer-motion";

export default function StatusSprintsSection() {
  const cards = [
    {
      title: "Current Status — Sprint 1",
      bullets: [
        "✅ Defined AI-first scope & problem",
        "✅ Dataset prep & Donut fine-tune pipeline ready",
        "✅ Branding & initial layout complete",
      ],
    },
    {
      title: "Sprint 2 Deliverables",
      bullets: [
        "Train & deploy baseline Donut (PyTorch → ONNX → FastAPI)",
        "Benchmark accuracy & latency",
        "Integrate Supabase storage/sync",
        "Test with sample receipts",
      ],
    },
    {
      title: "Sprint 3 Deliverables",
      bullets: [
        "Model v2 with feedback loop (edge cases)",
        "Mobile + backend integration for live demo",
        "Cost/latency trade-off analysis",
        "Final presentation with working prototype",
      ],
    },
  ];

  const steps = [
    { label: "S1: Research & Setup", done: true },
    { label: "S2: Baseline Model", done: false },
    { label: "S3: Integration & Demo", done: false },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#4285F4] mb-8">6. Project Status & Future Sprints</h2>

        {/* Timeline */}
        <div className="relative mb-10">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#E5E7EB] rounded-full" />
          <ul className="space-y-6">
            {steps.map((s, i) => (
              <li key={i} className="relative pl-14">
                <span
                  className={`absolute left-0 top-1.5 h-8 w-8 rounded-full border-4 ${
                    s.done ? "bg-[#22C55E] border-white" : "bg-white border-[#E5E7EB]"
                  } shadow`}
                />
                <p className={`text-lg font-medium ${s.done ? "text-[#22C55E]" : "text-[#1F2937]"}`}>{s.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">{c.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {c.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
