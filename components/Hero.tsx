"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, ABOUT_TEXT, VALUE_PROPS } from "@/lib/constants";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-24">
      {/* Background Elements */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-32 -left-32 animate-pulse-soft" />
      <div className="orb orb-gold w-[400px] h-[400px] bottom-20 -right-32 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <Container size="md" className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden gradient-border glow-strong">
              <Image
                src="/dushyant.jpeg"
                alt={CONTACT.name}
                width={176}
                height={176}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="gradient-text">{CONTACT.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 text-lg md:text-xl text-[#d4a853]"
          >
            {CONTACT.title} · {CONTACT.subtitle}
          </motion.p>

          {/* About */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-xl"
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* Value Props */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {VALUE_PROPS.map((prop) => (
              <div key={prop} className="flex items-center gap-2 text-sm text-white/50">
                <Check className="w-4 h-4 text-[#d4a853]" />
                <span>{prop}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="shimmer" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">View Loan Options</a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
