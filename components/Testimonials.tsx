"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="orb orb-gold w-[350px] h-[350px] -right-32 top-1/4 animate-pulse-soft" />
      <div className="orb orb-blue w-[250px] h-[250px] -left-24 bottom-1/4 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

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
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What People Are Saying</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Real feedback from real clients. Your success story could be next.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-6 md:p-8 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#d4a853]/20 group-hover:text-[#d4a853]/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-white/40">{testimonial.location}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-sm text-[#d4a853]/70">{testimonial.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center items-center gap-6 text-white/40"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
              ))}
            </div>
            <span className="text-sm">4.9 average rating</span>
          </div>
          <span className="hidden md:block">|</span>
          <span className="text-sm hidden md:block">50+ verified reviews</span>
        </motion.div>
      </Container>
    </section>
  );
}
