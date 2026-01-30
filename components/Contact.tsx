"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-purple w-[500px] h-[500px] -left-48 top-1/3 animate-pulse-glow" />
      <div className="orb orb-blue w-[300px] h-[300px] right-20 bottom-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <Container size="sm" className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-sky-400 bg-sky-400/10 border border-sky-400/20 mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Ready to Connect
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Let&apos;s Talk</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-md mx-auto">
            Ready to make a smart move? Reach out and let&apos;s find the right loan for you.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card rounded-3xl p-8 md:p-10 glow"
        >
          <div className="flex flex-col gap-4">
            {/* Call Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="w-full justify-center gap-3 shimmer" asChild>
                <a href={formatPhoneLink(CONTACT.phone)}>
                  <Phone className="w-5 h-5" />
                  Call {CONTACT.phone}
                </a>
              </Button>
            </motion.div>

            {/* Text Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="secondary" size="lg" className="w-full justify-center gap-3" asChild>
                <a href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}>
                  <MessageCircle className="w-5 h-5" />
                  Send a Text
                </a>
              </Button>
            </motion.div>

            {/* Instagram Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="lg" className="w-full justify-center gap-3" asChild>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  {CONTACT.instagramHandle}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Service Area */}
          <p className="text-center text-sm text-white/40">
            Serving all of <span className="text-white/60">New York State</span>
          </p>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-white/30 uppercase tracking-widest">
            Licensed Mortgage Loan Officer • NMLS
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
