"use client";
import { motion } from "framer-motion";

export default function BrandIdentitySection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold text-[#4285F4] mb-6">4. Brand Identity</h2>

        <div className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
          <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">Tagline</h3>
          <p className="text-xl italic mb-6">“Receipts that read themselves.”</p>

          <h3 className="text-2xl font-semibold text-[#00B8A9] mb-3">Core Theme Colors</h3>
          <ul className="space-y-2">
            <li><span className="font-semibold text-[#4285F4]">Primary Blue</span> – Trust & Focus</li>
            <li><span className="font-semibold text-[#38BDF8]">Info Sky Blue</span> – Neutral Highlights</li>
            <li>Accent Teal (#00B8A9) – Innovation</li>
            <li>Success Green (#22C55E), Error Red (#EA4335), Warning Amber (#F59E0B)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#00B8A9] mt-6 mb-3">Fonts</h3>
          <ul className="list-disc list-inside">
            <li>Headers → Montserrat</li>
            <li>Body → Inter / Source Sans Pro</li>
            <li>Code → Fira Code</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
