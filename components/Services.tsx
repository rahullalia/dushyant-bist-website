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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-20 md:py-28">
      {/* Background */}
      <div className="orb orb-gold w-[350px] h-[350px] -right-32 top-1/4 animate-pulse-soft" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/20 mb-4">
            Loan Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Find the Right Loan</span>
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
            From first-time buyers to seasoned investors, I offer flexible financing for every situation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {LOAN_TYPES.map((loan, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={loan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 group cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center mb-4 group-hover:border-[#d4a853]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#d4a853]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-white text-sm">{loan.name}</h3>
                  <p className="mt-1.5 text-xs text-white/40 leading-relaxed">
                    {loan.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-sm text-white/40"
        >
          Not sure which loan fits?{" "}
          <a href="#contact" className="text-[#d4a853] hover:underline">
            Let's figure it out together
          </a>
        </motion.p>
      </Container>
    </section>
  );
}
