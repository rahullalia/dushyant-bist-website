"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, ABOUT_TEXT, VALUE_PROPS, STATS } from "@/lib/constants";
import { Check, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const floatIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32">
      {/* Background Elements */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-40 -left-40 animate-pulse-soft" />
      <div className="orb orb-gold w-[500px] h-[500px] bottom-20 -right-40 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-10"
          >
            {/* Floating Stats - Desktop */}
            <div className="hidden md:block">
              {/* Left stat */}
              <motion.div
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={floatIn}
                className="absolute -left-32 top-1/2 -translate-y-1/2 glass-card px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold gradient-text">{STATS[0].value}</p>
                <p className="text-xs text-white/50">{STATS[0].label}</p>
              </motion.div>

              {/* Right stat */}
              <motion.div
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={floatIn}
                className="absolute -right-32 top-1/2 -translate-y-1/2 glass-card px-4 py-3 text-center"
              >
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
                  <p className="text-2xl font-bold gradient-text">{STATS[1].value}</p>
                </div>
                <p className="text-xs text-white/50">{STATS[1].label}</p>
              </motion.div>

              {/* Bottom stat */}
              <motion.div
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={floatIn}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 text-center"
              >
                <p className="text-sm font-semibold text-[#d4a853]">{STATS[2].value} Years Experience</p>
              </motion.div>
            </div>

            {/* Profile Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden gradient-border glow-strong">
              <Image
                src="/dushyant.jpeg"
                alt={CONTACT.name}
                width={224}
                height={224}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mobile Stats Row */}
          <motion.div
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex md:hidden gap-4 mb-6"
          >
            {STATS.map((stat, index) => (
              <div key={stat.label} className="glass-card px-4 py-2 text-center">
                <p className="text-lg font-bold gradient-text">{stat.value}</p>
                <p className="text-[10px] text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">{CONTACT.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 text-xl md:text-2xl text-[#d4a853]"
          >
            {CONTACT.title} · {CONTACT.subtitle}
          </motion.p>

          {/* About */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* Value Props */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {VALUE_PROPS.map((prop) => (
              <div key={prop} className="flex items-center gap-2 text-sm md:text-base text-white/50">
                <Check className="w-5 h-5 text-[#d4a853]" />
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
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="shimmer text-base px-8 py-4" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-4" asChild>
              <a href="#services">View Loan Options</a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
