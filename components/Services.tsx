"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { LOAN_TYPES } from "@/lib/constants";
import {
  Home,
  Shield,
  Star,
  Building2,
  FileCheck,
  TrendingUp,
  Store,
  Building,
  Hammer,
  Zap,
} from "lucide-react";

const icons = [Home, Shield, Star, Building2, FileCheck, TrendingUp, Store, Building, Hammer, Zap];

const bestFor = [
  "Most buyers with good credit",
  "First-time buyers, lower credit OK",
  "Veterans & active military",
  "Homes over conforming limits",
  "Self-employed, bank statements",
  "Investors, rental income based",
  "Live/work properties",
  "2-4 unit buildings",
  "Quick rehab projects",
  "Short-term financing needs",
];

// Stagger container for cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Header animation
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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="orb orb-gold w-[400px] h-[400px] -right-40 top-1/4 animate-pulse-soft" />
      <div className="orb orb-blue w-[300px] h-[300px] -left-32 bottom-1/4 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

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
            Loan Programs
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Find the Right Loan</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            From first-time buyers to seasoned investors, I offer flexible financing for every situation.
          </p>
        </motion.div>

        {/* Flex layout - centers incomplete rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {LOAN_TYPES.map((loan, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={loan.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className="glass-card p-6 md:p-8 group cursor-default w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-14 h-14 rounded-xl bg-[#0c2340]/30 border border-[#0c2340]/50 flex items-center justify-center mb-5 group-hover:border-[#b8860b]/40 group-hover:bg-[#b8860b]/10 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-[#b8860b]" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-bold text-white text-lg mb-2">{loan.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-3">
                    {loan.description}
                  </p>
                  <p className="text-xs text-[#b8860b]/70 mt-auto">
                    Best for: {bestFor[index]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-white/40 mb-4">
            Not sure which loan fits your situation?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-[#b8860b] hover:text-[#d4a62a] transition-colors font-medium"
          >
            Let&apos;s figure it out together
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-lg"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
