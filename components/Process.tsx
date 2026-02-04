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

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3 + index * 0.15,
    },
  }),
};

const iconBounce = {
  hidden: { scale: 0, rotate: -180 },
  visible: (index: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.5 + index * 0.15,
    },
  }),
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
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/20 mb-6"
          >
            How It Works
          </motion.span>
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
            {/* Animated Progress Line */}
            <svg
              className="absolute top-12 left-0 right-0 h-2 w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0c2340" />
                  <stop offset="50%" stopColor="#b8860b" />
                  <stop offset="100%" stopColor="#0c2340" />
                </linearGradient>
              </defs>
            </svg>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon] || Phone;
                return (
                  <motion.div
                    key={step.step}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={stepVariants}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <motion.div
                      custom={index}
                      variants={iconBounce}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative z-10 w-24 h-24 rounded-full bg-[#050505] border-2 border-[#0c2340] flex items-center justify-center mb-6 group hover:border-[#b8860b] transition-colors duration-300 cursor-default"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#0c2340]/20 flex items-center justify-center group-hover:bg-[#b8860b]/20 transition-colors">
                        <Icon className="w-7 h-7 text-[#b8860b]" />
                      </div>
                      {/* Step Number */}
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.6 + index * 0.15,
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#b8860b] text-[#050505] text-sm font-bold flex items-center justify-center"
                      >
                        {step.step}
                      </motion.span>
                    </motion.div>

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
            {/* Animated Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0c2340] via-[#b8860b] to-[#0c2340] origin-top"
            />

            {/* Steps */}
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon] || Phone;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="relative flex gap-6"
                  >
                    {/* Icon Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.4 + index * 0.12,
                      }}
                      className="absolute -left-8 w-6 h-6 rounded-full bg-[#b8860b] flex items-center justify-center"
                    >
                      <span className="text-[#050505] text-xs font-bold">{step.step}</span>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="glass-card p-5 flex-1"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="w-12 h-12 rounded-xl bg-[#0c2340]/30 border border-[#0c2340]/50 flex items-center justify-center shrink-0"
                        >
                          <Icon className="w-5 h-5 text-[#b8860b]" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-white/50">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b8860b] to-[#d4a62a] text-[#050505] font-semibold rounded-xl shadow-lg shadow-[#b8860b]/20 hover:shadow-[#b8860b]/30 transition-shadow shimmer"
          >
            Start Your Journey
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
