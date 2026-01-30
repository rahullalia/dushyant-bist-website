"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Download, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";
import { downloadVCard } from "@/lib/vcard";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ContactCard() {
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
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* Background */}
      <div className="orb orb-blue w-[350px] h-[350px] -top-16 -left-16 animate-pulse-soft" />
      <div className="orb orb-gold w-[300px] h-[300px] bottom-16 -right-16 animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Card */}
        <div className="glass-card overflow-hidden glow-strong">
          {/* Header */}
          <div className="relative h-24 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]/40" />
          </div>

          {/* Content */}
          <div className="px-6 pb-8 -mt-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-24 h-24 mx-auto mb-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0c0c0c] gradient-border shadow-xl">
                <Image
                  src="/dushyant.jpeg"
                  alt={CONTACT.name}
                  width={96}
                  height={96}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center mb-6"
            >
              <h1 className="text-xl font-bold gradient-text">{CONTACT.name}</h1>
              <p className="mt-1 text-sm text-white/50">{CONTACT.title}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/40">
                <MapPin className="w-3 h-3" />
                {CONTACT.location}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-2.5"
            >
              {/* Call */}
              <motion.a
                variants={fadeUp}
                whileTap={{ scale: 0.98 }}
                href={formatPhoneLink(CONTACT.phone)}
                className="flex items-center gap-3 w-full p-3.5 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">Call</p>
                  <p className="text-xs text-white/40">{CONTACT.phone}</p>
                </div>
              </motion.a>

              {/* Text */}
              <motion.a
                variants={fadeUp}
                whileTap={{ scale: 0.98 }}
                href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                className="flex items-center gap-3 w-full p-3.5 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#6b9fd4]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">Text</p>
                  <p className="text-xs text-white/40">Send a message</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={fadeUp}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-3.5 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/15 border border-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">Instagram</p>
                  <p className="text-xs text-white/40">{CONTACT.instagramHandle}</p>
                </div>
              </motion.a>

              {/* Save Contact */}
              <motion.button
                variants={fadeUp}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveContact}
                className="flex items-center gap-3 w-full p-3.5 bg-gradient-to-r from-[#d4a853] to-[#e8c87a] rounded-2xl shadow-lg shadow-[#d4a853]/20 shimmer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Download className="w-4 h-4 text-[#0c0c0c]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm text-[#0c0c0c]">Save Contact</p>
                  <p className="text-xs text-[#0c0c0c]/60">Add to your phone</p>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-xs text-white/20 uppercase tracking-wider"
        >
          Licensed Mortgage Loan Officer
        </motion.p>
      </motion.div>
    </main>
  );
}
