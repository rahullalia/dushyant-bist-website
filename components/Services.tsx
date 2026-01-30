"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-teal w-[400px] h-[400px] -right-48 top-1/4 animate-pulse-glow" />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-sky-400 bg-sky-400/10 border border-sky-400/20 mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Loan Programs</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
            From your first home to investment properties—flexible financing solutions for every situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {LOAN_TYPES.map((loan, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={loan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <SpotlightCard className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full glass-card rounded-2xl p-6 group cursor-default transition-all duration-300 hover:border-sky-500/30"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 border border-white/5 flex items-center justify-center group-hover:border-sky-500/20 transition-all duration-300">
                          <Icon className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-semibold text-white group-hover:text-sky-100 transition-colors">
                        {loan.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/40 line-clamp-2 group-hover:text-white/50 transition-colors">
                        {loan.description}
                      </p>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40">
            Not sure which loan is right for you?{" "}
            <a href="#contact" className="text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-4">
              Let&apos;s talk
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
