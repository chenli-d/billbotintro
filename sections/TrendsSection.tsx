"use client";
import { motion } from "framer-motion";

export default function TrendsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">3. Emerging Trends</h2>

        <div className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm mb-6">
          <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">Technical Trend</h3>
          <p className="text-lg leading-relaxed">
            AI-powered financial insights combine{" "}
            <strong>ML/ONNX models</strong> with <strong>cross-platform frameworks</strong> and{" "}
            <strong>serverless backends</strong>, enabling scalable and continuously improving applications.
          </p>
        </div>

        <div className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
          <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">Non-Technical Trend</h3>
          <p className="text-lg leading-relaxed">
            Users expect financial wellness and trust — beyond expense logging. Privacy, transparency, and AI ethics now
            drive adoption in consumer finance tools.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
