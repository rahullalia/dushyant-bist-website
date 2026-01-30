"use client";

import { motion } from "framer-motion";
import { Phone, Instagram, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { formatPhoneLink, formatSmsLink } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Talk</h2>
          <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
            Ready to make a smart move? Reach out and let&apos;s find the right loan for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 max-w-md mx-auto"
        >
          {/* Call Button */}
          <Button size="lg" className="w-full justify-center gap-3" asChild>
            <a href={formatPhoneLink(CONTACT.phone)}>
              <Phone className="w-5 h-5" />
              Call {CONTACT.phone}
            </a>
          </Button>

          {/* Text Button */}
          <Button variant="secondary" size="lg" className="w-full justify-center gap-3" asChild>
            <a href={formatSmsLink(CONTACT.phone)}>
              <MessageCircle className="w-5 h-5" />
              Send a Text
            </a>
          </Button>

          {/* Instagram Button */}
          <Button variant="outline" size="lg" className="w-full justify-center gap-3" asChild>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              {CONTACT.instagramHandle}
            </a>
          </Button>
        </motion.div>

        {/* Service Area */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-white/40"
        >
          Serving all of New York State
        </motion.p>
      </Container>
    </section>
  );
}
