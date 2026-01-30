"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, ABOUT_TEXT } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg" />

      {/* Floating Orbs with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="orb orb-blue w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow"
      />
      <motion.div
        style={{ y: y2, animationDelay: "2s" }}
        className="orb orb-teal w-[500px] h-[500px] top-1/2 -right-40 animate-pulse-glow"
      />
      <motion.div
        style={{ y: y3, animationDelay: "4s" }}
        className="orb orb-purple w-[400px] h-[400px] bottom-20 left-1/4 animate-pulse-glow"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Noise Texture */}
      <div className="noise" />

      <Container size="md" className="relative z-10">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center text-center py-20"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative mb-10"
          >
            {/* Animated Ring */}
            <div className="absolute -inset-4 rounded-full gradient-border-animated opacity-50" />
            <div className="absolute -inset-8 rounded-full border border-white/5 animate-pulse" />

            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden gradient-border glow-strong">
              <Image
                src="/dushyant.jpeg"
                alt={CONTACT.name}
                width={208}
                height={208}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">{CONTACT.name}</span>
          </motion.h1>

          {/* Title with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 relative"
          >
            <p className="text-xl md:text-2xl text-white/60 font-medium">
              {CONTACT.title}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
            />
          </motion.div>

          {/* About */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl text-balance"
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="shimmer" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">View Services</a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/30"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
