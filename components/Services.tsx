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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="orb orb-gold w-[400px] h-[400px] -right-40 top-1/4 animate-pulse-soft" />
      <div className="orb orb-blue w-[300px] h-[300px] -left-32 bottom-1/4 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

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
            Loan Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Find the Right Loan</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            From first-time buyers to seasoned investors, I offer flexible financing for every situation.
          </p>
        </motion.div>

        {/* Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {LOAN_TYPES.map((loan, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={loan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 md:p-8 group cursor-default"
              >
                <div className="flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center mb-5 group-hover:border-[#d4a853]/40 group-hover:bg-[#d4a853]/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#d4a853]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-white text-lg mb-2">{loan.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-3">
                    {loan.description}
                  </p>
                  <p className="text-xs text-[#d4a853]/70 mt-auto">
                    Best for: {bestFor[index]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-white/40 mb-4">
            Not sure which loan fits your situation?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e8c87a] transition-colors font-medium"
          >
            Let&apos;s figure it out together
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
