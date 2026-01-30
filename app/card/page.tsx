"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Download, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";
import { downloadVCard } from "@/lib/vcard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function CardPage() {
  const handleSaveContact = () => {
    downloadVCard({
      firstName: CONTACT.firstName,
      lastName: CONTACT.lastName,
      phone: CONTACT.phone,
      title: CONTACT.title,
      instagram: CONTACT.instagram,
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg" />

      {/* Floating Orbs */}
      <div className="orb orb-blue w-[400px] h-[400px] -top-20 -left-20 animate-pulse-glow" />
      <div className="orb orb-teal w-[300px] h-[300px] bottom-20 -right-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="orb orb-purple w-[250px] h-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Noise */}
      <div className="noise" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Card */}
        <div className="glass-card rounded-3xl overflow-hidden glow-strong">
          {/* Header with animated gradient */}
          <div className="relative h-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-500 to-sky-500 bg-[length:200%_100%] animate-[gradient-rotate_4s_ease_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/50" />

            {/* Morphing blob decoration */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full animate-morph blur-xl" />
          </div>

          {/* Profile Section */}
          <div className="px-6 pb-8 -mt-14">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="relative w-28 h-28 mx-auto mb-5"
            >
              {/* Animated ring */}
              <div className="absolute -inset-2 rounded-full gradient-border-animated opacity-60" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl">
                <Image
                  src="/dushyant.jpeg"
                  alt={CONTACT.name}
                  width={112}
                  height={112}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-2xl font-bold gradient-text">{CONTACT.name}</h1>
              <p className="mt-1 text-white/50">{CONTACT.title}</p>

              {/* Location badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/40">
                <MapPin className="w-3 h-3" />
                New York State
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {/* Call */}
              <motion.a
                variants={item}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={formatPhoneLink(CONTACT.phone)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover rounded-2xl"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">Call</p>
                  <p className="text-sm text-white/40">{CONTACT.phone}</p>
                </div>
              </motion.a>

              {/* Text */}
              <motion.a
                variants={item}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover rounded-2xl"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">Text</p>
                  <p className="text-sm text-white/40">Send a message</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={item}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 glass-card-hover rounded-2xl"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">Instagram</p>
                  <p className="text-sm text-white/40">{CONTACT.instagramHandle}</p>
                </div>
              </motion.a>

              {/* Save Contact - Primary CTA */}
              <motion.button
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveContact}
                className="flex items-center gap-4 w-full p-4 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 shimmer"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">Save Contact</p>
                  <p className="text-sm text-white/70">Add to your phone</p>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-xs text-white/20 uppercase tracking-widest"
        >
          Licensed Mortgage Loan Officer
        </motion.p>
      </motion.div>
    </main>
  );
}
