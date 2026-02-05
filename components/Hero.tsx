"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, ABOUT_TEXT, VALUE_PROPS, STATS } from "@/lib/constants";
import { Check, Star } from "lucide-react";
import { useRef } from "react";

// Spring physics for natural motion
const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      delay,
    },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax scroll effect for orbs
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement
  const orbBlueY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbGoldY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orbBlueX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const orbGoldX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden">
      {/* Parallax Background Orbs */}
      <motion.div
        style={{ y: orbBlueY, x: orbBlueX }}
        className="orb orb-blue w-[600px] h-[600px] -top-40 -left-40 animate-pulse-soft hidden md:block"
      />
      <motion.div
        style={{ y: orbGoldY, x: orbGoldX }}
        className="orb orb-gold w-[500px] h-[500px] bottom-20 -right-40 animate-pulse-soft hidden md:block"
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={springTransition}
            className="relative mb-24"
          >
            {/* Floating Stats - Desktop */}
            <div className="hidden md:block">
              {/* Left stat */}
              <motion.div
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -left-32 top-1/2 -translate-y-1/2 glass-card px-4 py-3 text-center cursor-default"
              >
                <p className="text-2xl font-bold gradient-text">{STATS[0].value}</p>
                <p className="text-xs text-white/50">{STATS[0].label}</p>
              </motion.div>

              {/* Right stat */}
              <motion.div
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -right-32 top-1/2 -translate-y-1/2 glass-card px-4 py-3 text-center cursor-default"
              >
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-[#b8860b] fill-[#b8860b]" />
                  <p className="text-2xl font-bold gradient-text">{STATS[1].value}</p>
                </div>
                <p className="text-xs text-white/50">{STATS[1].label}</p>
              </motion.div>

              {/* Bottom stat */}
              <motion.div
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 glass-card px-4 py-2 text-center cursor-default"
              >
                <p className="text-sm font-semibold text-[#b8860b]">{STATS[2].value} Years Experience</p>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={springTransition}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden gradient-border glow-strong"
            >
              <Image
                src="/dushyant.jpeg"
                alt={CONTACT.name}
                width={224}
                height={224}
                priority
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
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
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, ...springTransition }}
                className="glass-card px-4 py-2 text-center"
              >
                <p className="text-lg font-bold gradient-text">{stat.value}</p>
                <p className="text-[10px] text-white/50">{stat.label}</p>
              </motion.div>
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
            className="mt-4 text-xl md:text-2xl text-[#b8860b]"
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
            {VALUE_PROPS.map((prop, index) => (
              <motion.div
                key={prop}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-sm md:text-base text-white/50"
              >
                <Check className="w-5 h-5 text-[#b8860b]" />
                <span>{prop}</span>
              </motion.div>
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
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-4" asChild>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Loan Options
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
