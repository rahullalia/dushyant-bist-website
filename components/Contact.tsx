"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT, CREDENTIALS } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";

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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/20 mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Ready to Get Started?</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Whether you have questions or you're ready to apply, I'm here to help.
            Reach out and let's make your home ownership dreams a reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <span className="font-semibold text-white">Service Area</span>
                </div>
                <p className="text-white/50 text-sm">
                  All of {CONTACT.location}
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <span className="font-semibold text-white">Availability</span>
                </div>
                <p className="text-white/50 text-sm">
                  7 days a week
                </p>
              </div>
            </div>

            {/* Why Contact */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-white text-lg mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "Free consultation, no obligation",
                  "Quick response, usually same day",
                  "Honest advice tailored to your situation",
                  "Clear explanation of your options",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/60">
                    <ArrowRight className="w-4 h-4 text-[#d4a853] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 md:p-8 glow-strong"
          >
            <h3 className="font-bold text-white text-xl mb-6 text-center">
              Choose Your Preferred Way
            </h3>

            <div className="flex flex-col gap-4">
              {/* Call */}
              <Button size="lg" className="w-full justify-center gap-3 py-5 text-base shimmer" asChild>
                <a href={formatPhoneLink(CONTACT.phone)}>
                  <Phone className="w-5 h-5" />
                  Call {CONTACT.phone}
                </a>
              </Button>

              {/* Text */}
              <Button variant="secondary" size="lg" className="w-full justify-center gap-3 py-5 text-base" asChild>
                <a href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}>
                  <MessageCircle className="w-5 h-5" />
                  Send a Text Message
                </a>
              </Button>

              {/* Instagram */}
              <Button variant="outline" size="lg" className="w-full justify-center gap-3 py-5 text-base" asChild>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  {CONTACT.instagramHandle}
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

            {/* Credentials */}
            <div className="text-center space-y-1">
              <p className="text-sm text-white/40">
                NMLS# {CREDENTIALS.nmls}
              </p>
              <p className="text-xs text-white/30">
                Licensed Mortgage Loan Officer · {CONTACT.location}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
