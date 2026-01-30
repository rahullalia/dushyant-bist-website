"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Download, MapPin, Share2, Star, Copy, Check } from "lucide-react";
import { CONTACT, TAGLINE, STATS, CREDENTIALS } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";
import { downloadVCard } from "@/lib/vcard";
import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleSaveContact = () => {
    downloadVCard({
      firstName: CONTACT.firstName,
      lastName: CONTACT.lastName,
      phone: CONTACT.phone,
      title: CONTACT.title,
      instagram: CONTACT.instagram,
    });
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${CONTACT.name} - ${CONTACT.title}`,
          text: TAGLINE,
          url: url,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback to copy
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Background */}
      <div className="orb orb-blue w-[400px] h-[400px] -top-20 -left-20 animate-pulse-soft" />
      <div className="orb orb-gold w-[350px] h-[350px] bottom-20 -right-20 animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="glass-card overflow-hidden glow-strong">
          {/* Header - Larger with pattern */}
          <div className="relative h-32 md:h-40 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8a] to-[#1e3a5f]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]/60" />

            {/* Share Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleShare}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Share2 className="w-4 h-4 text-white/70" />
              )}
            </motion.button>
          </div>

          {/* Content */}
          <div className="px-6 md:px-8 pb-8 -mt-16">
            {/* Avatar - Larger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0c0c0c] gradient-border shadow-2xl">
                <Image
                  src="/dushyant.jpeg"
                  alt={CONTACT.name}
                  width={128}
                  height={128}
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
              className="text-center mb-5"
            >
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">{CONTACT.name}</h1>
              <p className="mt-1.5 text-sm md:text-base text-white/60">{CONTACT.title}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5" />
                {CONTACT.location}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-center text-sm text-white/40 mb-6 max-w-[280px] mx-auto"
            >
              {TAGLINE}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6 mb-6 pb-6 border-b border-white/10"
            >
              {STATS.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    {index === 1 && <Star className="w-3.5 h-3.5 text-[#d4a853] fill-[#d4a853]" />}
                    <p className="text-lg md:text-xl font-bold gradient-text">{stat.value}</p>
                  </div>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {/* Call */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={formatPhoneLink(CONTACT.phone)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Call</p>
                  <p className="text-sm text-white/40">{CONTACT.phone}</p>
                </div>
              </motion.a>

              {/* Text */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#6b9fd4]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Text</p>
                  <p className="text-sm text-white/40">Send a message</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-sm text-white/40">{CONTACT.instagramHandle}</p>
                </div>
              </motion.a>

              {/* Save Contact */}
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveContact}
                className="flex items-center gap-4 w-full p-4 bg-gradient-to-r from-[#d4a853] to-[#e8c87a] rounded-2xl shadow-lg shadow-[#d4a853]/25 shimmer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-[#0c0c0c]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-[#0c0c0c]">Save Contact</p>
                  <p className="text-sm text-[#0c0c0c]/60">Add to your phone</p>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Footer with Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center space-y-1"
        >
          <p className="text-xs text-white/30">
            NMLS# {CREDENTIALS.nmls} · Equal Housing Lender
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-wider">
            Licensed Mortgage Loan Officer · New York State
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
