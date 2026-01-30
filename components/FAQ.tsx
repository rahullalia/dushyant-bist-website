"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="orb orb-blue w-[300px] h-[300px] -right-24 top-1/3 animate-pulse-soft" />

      <Container size="md" className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/20 mb-6">
            Questions & Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Common Questions</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
            Get answers to the questions I hear most often. Still curious? Just reach out.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 border border-[#1e3a5f]/50 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <span className="font-semibold text-white">{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4a853] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                      <div className="pl-14 text-white/60 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 mb-4">Have a question not listed here?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e8c87a] transition-colors font-medium"
          >
            Let&apos;s talk about it
            <span>→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
