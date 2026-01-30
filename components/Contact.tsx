"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background */}
      <div className="orb orb-blue w-[400px] h-[400px] -left-32 top-1/3 animate-pulse-soft" />

      <Container size="sm" className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/20 mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Ready to Talk?</span>
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-sm mx-auto">
            Whether you have questions or you're ready to apply, I'm here to help.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 glass-card p-6 md:p-8 glow"
        >
          <div className="flex flex-col gap-3">
            {/* Call */}
            <Button size="lg" className="w-full justify-center gap-3 shimmer" asChild>
              <a href={formatPhoneLink(CONTACT.phone)}>
                <Phone className="w-5 h-5" />
                Call {CONTACT.phone}
              </a>
            </Button>

            {/* Text */}
            <Button variant="secondary" size="lg" className="w-full justify-center gap-3" asChild>
              <a href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}>
                <MessageCircle className="w-5 h-5" />
                Send a Text
              </a>
            </Button>

            {/* Instagram */}
            <Button variant="outline" size="lg" className="w-full justify-center gap-3" asChild>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                {CONTACT.instagramHandle}
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

          {/* Footer */}
          <p className="text-center text-sm text-white/40">
            Serving all of <span className="text-white/60">{CONTACT.location}</span>
          </p>
        </motion.div>

        {/* Trust */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-xs text-white/30 uppercase tracking-wider"
        >
          Licensed Mortgage Loan Officer
        </motion.p>
      </Container>
    </section>
  );
}
