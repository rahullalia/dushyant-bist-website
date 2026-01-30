"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Loans", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Reviews", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <nav className="max-w-6xl mx-auto glass-card px-4 md:px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="font-bold text-lg gradient-text">
                {CONTACT.name.split(" ")[0]}
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href={`tel:+1${CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">{CONTACT.phone}</span>
                </a>
                <Button size="sm" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#0c0c0c] border-l border-white/10 p-6"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <a
                    href={`tel:+1${CONTACT.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full py-3 text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {CONTACT.phone}
                  </a>
                  <Button className="w-full" asChild>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
