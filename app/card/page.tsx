"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Download } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";
import { downloadVCard } from "@/lib/vcard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
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
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-teal-500/10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden glow">
          {/* Header with gradient */}
          <div className="h-24 bg-gradient-to-r from-sky-500 to-teal-500" />

          {/* Profile Section */}
          <div className="px-6 pb-8 -mt-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-24 h-24 mx-auto mb-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-xl">
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
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-2xl font-bold">{CONTACT.name}</h1>
              <p className="mt-1 text-white/60">{CONTACT.title}</p>
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
                href={formatPhoneLink(CONTACT.phone)}
                className="flex items-center gap-4 w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Call</p>
                  <p className="text-sm text-white/50">{CONTACT.phone}</p>
                </div>
              </motion.a>

              {/* Text */}
              <motion.a
                variants={item}
                href={formatSmsLink(CONTACT.phone, CONTACT.smsMessage)}
                className="flex items-center gap-4 w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Text</p>
                  <p className="text-sm text-white/50">Send a message</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={item}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-white/50">{CONTACT.instagramHandle}</p>
                </div>
              </motion.a>

              {/* Save Contact */}
              <motion.button
                variants={item}
                onClick={handleSaveContact}
                className="flex items-center gap-4 w-full p-4 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium">Save Contact</p>
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
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-sm text-white/30"
        >
          Serving all of New York State
        </motion.p>
      </motion.div>
    </main>
  );
}
