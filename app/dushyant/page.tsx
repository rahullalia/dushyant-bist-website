"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Download, MapPin, Share2, Star, Check, Mail, Globe, ArrowRight } from "lucide-react";
import { CONTACT, TAGLINE, STATS, CREDENTIALS } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";
import { downloadVCard } from "@/lib/vcard";
import { useState } from "react";

// Spring physics for smoother interactions
const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
    }
  },
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
      email: CONTACT.email,
      website: CONTACT.website,
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
      } catch {
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springTransition}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="glass-card overflow-hidden glow-strong">
          {/* Header - Larger with pattern */}
          <div className="relative h-32 md:h-40 bg-gradient-to-br from-[#0c2340] via-[#1a3a5c] to-[#0c2340]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/60" />

            {/* Share Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, ...springTransition }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
              variants={scaleIn}
              initial="hidden"
              animate="show"
              className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#050505] gradient-border shadow-2xl">
                <Image
                  src="/dushyant.jpeg"
                  alt={CONTACT.name}
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full object-cover object-[center_0%] scale-[1.2] origin-top"
                />
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...springTransition }}
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
              transition={{ delay: 0.3 }}
              className="text-center text-sm text-white/40 mb-6 max-w-[280px] mx-auto"
            >
              {TAGLINE}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...springTransition }}
              className="flex justify-center gap-6 mb-6 pb-6 border-b border-white/10"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, ...springTransition }}
                >
                  <div className="flex items-center justify-center gap-1">
                    {index === 1 && <Star className="w-3.5 h-3.5 text-[#b8860b] fill-[#b8860b]" />}
                    <p className="text-lg md:text-xl font-bold gradient-text">{stat.value}</p>
                  </div>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
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
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={formatPhoneLink(CONTACT.phone)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">Call</p>
                  <p className="text-sm text-white/40">{CONTACT.phone}</p>
                </div>
              </motion.a>

              {/* Text */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                className="flex items-center gap-4 w-full p-4 glass-card-hover min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c2340]/30 border border-[#0c2340]/50 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#6b9fd4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">Text</p>
                  <p className="text-sm text-white/40">Send a message</p>
                </div>
              </motion.a>

              {/* Email - NEW */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 w-full p-4 glass-card-hover min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-white/40 truncate">{CONTACT.email}</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 glass-card-hover min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-sm text-white/40">{CONTACT.instagramHandle}</p>
                </div>
              </motion.a>

              {/* Website - NEW */}
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 glass-card-hover min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c2340]/30 border border-[#b8860b]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#b8860b]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-sm text-white/40">View loan options</p>
                </div>
              </motion.a>

              {/* Save Contact - Primary CTA */}
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSaveContact}
                className="flex items-center gap-4 w-full p-4 bg-gradient-to-r from-[#b8860b] to-[#d4a62a] rounded-2xl shadow-lg shadow-[#b8860b]/25 shimmer min-h-[72px]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5 text-[#050505]" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="font-bold text-[#050505]">Save Contact</p>
                  <p className="text-sm text-[#050505]/60">Add to your phone</p>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Footer with Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-center space-y-2"
        >
          <p className="text-xs text-white/30">
            NMLS# {CREDENTIALS.nmls} · Equal Housing Lender
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-wider">
            Licensed Mortgage Loan Officer · New York State
          </p>

          {/* View Full Website Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 text-xs text-[#b8860b] hover:text-[#d4a62a] transition-colors group"
            >
              <span>View Full Website</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
