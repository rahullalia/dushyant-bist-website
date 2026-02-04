"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, MessageCircle, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, CREDENTIALS } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: 0.1,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="orb orb-blue w-[500px] h-[500px] -left-40 top-1/4 animate-pulse-soft" />
      <div className="orb orb-gold w-[400px] h-[400px] -right-32 bottom-1/4 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/20 mb-6"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Ready to Get Started?</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Whether you have questions or you&apos;re ready to apply, I&apos;m here to help.
            Reach out and let&apos;s make your home ownership dreams a reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="space-y-6"
          >
            {/* Quick Info Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              <motion.div variants={staggerItem} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-[#0c2340]/30 border border-[#0c2340]/50 flex items-center justify-center"
                  >
                    <MapPin className="w-5 h-5 text-[#b8860b]" />
                  </motion.div>
                  <span className="font-semibold text-white">Service Area</span>
                </div>
                <p className="text-white/50 text-sm">
                  All of {CONTACT.location}
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-[#0c2340]/30 border border-[#0c2340]/50 flex items-center justify-center"
                  >
                    <Clock className="w-5 h-5 text-[#b8860b]" />
                  </motion.div>
                  <span className="font-semibold text-white">Availability</span>
                </div>
                <p className="text-white/50 text-sm">
                  7 days a week
                </p>
              </motion.div>
            </motion.div>

            {/* Why Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="font-bold text-white text-lg mb-4">What to Expect</h3>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {[
                  "Free consultation, no obligation",
                  "Quick response, usually same day",
                  "Honest advice tailored to your situation",
                  "Clear explanation of your options",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <ArrowRight className="w-4 h-4 text-[#b8860b] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="glass-card p-6 md:p-8 glow-strong"
          >
            <h3 className="font-bold text-white text-xl mb-6 text-center">
              Choose Your Preferred Way
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              {/* Call */}
              <motion.div variants={staggerItem}>
                <Button size="lg" className="w-full justify-center gap-3 py-5 text-base shimmer" asChild>
                  <motion.a
                    href={formatPhoneLink(CONTACT.phone)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Call {CONTACT.phone}
                  </motion.a>
                </Button>
              </motion.div>

              {/* Text */}
              <motion.div variants={staggerItem}>
                <Button variant="secondary" size="lg" className="w-full justify-center gap-3 py-5 text-base" asChild>
                  <motion.a
                    href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send a Text Message
                  </motion.a>
                </Button>
              </motion.div>

              {/* Email - NEW */}
              <motion.div variants={staggerItem}>
                <Button variant="secondary" size="lg" className="w-full justify-center gap-3 py-5 text-base" asChild>
                  <motion.a
                    href={`mailto:${CONTACT.email}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    Send an Email
                  </motion.a>
                </Button>
              </motion.div>

              {/* Instagram */}
              <motion.div variants={staggerItem}>
                <Button variant="outline" size="lg" className="w-full justify-center gap-3 py-5 text-base" asChild>
                  <motion.a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Instagram className="w-5 h-5" />
                    {CONTACT.instagramHandle}
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="my-6 h-px bg-gradient-to-r from-transparent via-[#b8860b]/20 to-transparent"
            />

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-center space-y-1"
            >
              <p className="text-sm text-white/40">
                NMLS# {CREDENTIALS.nmls}
              </p>
              <p className="text-xs text-white/30">
                Licensed Mortgage Loan Officer · {CONTACT.location}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
