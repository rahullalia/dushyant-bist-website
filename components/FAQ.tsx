"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Smooth accordion animation
const accordionVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] as const },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="orb orb-blue w-[300px] h-[300px] -right-24 top-1/3 animate-pulse-soft hidden md:block" />

      <Container size="md" className="relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/20 mb-6"
          >
            Questions & Answers
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Common Questions</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
            Get answers to the questions I hear most often. Still curious? Just reach out.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      backgroundColor: openIndex === index ? "rgba(184, 134, 11, 0.2)" : "rgba(12, 35, 64, 0.3)",
                      borderColor: openIndex === index ? "rgba(184, 134, 11, 0.4)" : "rgba(12, 35, 64, 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0"
                  >
                    <HelpCircle className="w-5 h-5 text-[#b8860b]" />
                  </motion.div>
                  <span className="font-semibold text-white">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#b8860b] shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 md:px-6 pb-5 md:pb-6 pt-0"
                    >
                      <div className="pl-14 text-white/60 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 mb-4">Have a question not listed here?</p>
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-[#b8860b] hover:text-[#d4a62a] transition-colors font-medium"
          >
            Let&apos;s talk about it
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
