"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Loan Programs</h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Whether you&apos;re buying your first home, investing in property, or need fast funding—I&apos;ve got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {LOAN_TYPES.map((loan, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={loan.name}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-sky-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="font-semibold text-white">{loan.name}</h3>
                  <p className="mt-2 text-sm text-white/50 line-clamp-2">{loan.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
