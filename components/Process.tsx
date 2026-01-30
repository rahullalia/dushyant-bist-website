"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/lib/constants";
import { Phone, FileCheck, Search, ClipboardList, Key } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  FileCheck,
  Search,
  ClipboardList,
  Key,
};

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="orb orb-blue w-[400px] h-[400px] -left-48 top-1/2 -translate-y-1/2 animate-pulse-soft" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/20 mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Simple Process, Big Results</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            From first call to closing day, I guide you through every step. No surprises, no stress.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e3a5f] via-[#d4a853] to-[#1e3a5f] origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon] || Phone;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#0c0c0c] border-2 border-[#1e3a5f] flex items-center justify-center mb-6 group hover:border-[#d4a853] transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#1e3a5f]/20 flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors">
                        <Icon className="w-7 h-7 text-[#d4a853]" />
                      </div>
                      {/* Step Number */}
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#d4a853] text-[#0c0c0c] text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#d4a853] to-[#1e3a5f]" />

            {/* Steps */}
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon] || Phone;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Icon Circle */}
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-[#d4a853] flex items-center justify-center">
                      <span className="text-[#0c0c0c] text-xs font-bold">{step.step}</span>
                    </div>

                    {/* Card */}
                    <div className="glass-card p-5 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#d4a853]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-white/50">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4a853] to-[#e8c87a] text-[#0c0c0c] font-semibold rounded-xl shadow-lg shadow-[#d4a853]/20 hover:shadow-[#d4a853]/30 transition-shadow shimmer"
          >
            Start Your Journey
            <span>→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
