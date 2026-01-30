"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { CREDENTIALS } from "@/lib/constants";
import { Shield, Award, Home, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: `NMLS# ${CREDENTIALS.nmls}`,
  },
  {
    icon: Award,
    label: `${CREDENTIALS.yearsExperience} Years Experience`,
  },
  {
    icon: Home,
    label: "Equal Housing Lender",
  },
  {
    icon: Clock,
    label: "Available 7 Days",
  },
];

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-12 border-t border-white/5">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-white/40"
              >
                <Icon className="w-4 h-4 text-[#d4a853]/60" />
                <span className="text-sm">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
