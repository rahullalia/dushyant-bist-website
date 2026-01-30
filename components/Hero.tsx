"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, ABOUT_TEXT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-teal-500/10 pointer-events-none" />

      <Container size="md">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden gradient-border glow">
              <Image
                src="/dushyant.jpeg"
                alt={CONTACT.name}
                width={192}
                height={192}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {CONTACT.name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl gradient-text font-medium">
              {CONTACT.title}
            </p>
          </motion.div>

          {/* About */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl"
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">View Services</a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
