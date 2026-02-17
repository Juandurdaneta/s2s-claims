"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Testimonial coming soon — real client results from a homeowner who received their full settlement.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
    amount: "$47,500",
    label: "Settlement Recovered",
  },
  {
    quote:
      "Testimonial coming soon — real client results from a homeowner who had their denied claim reopened.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
    amount: "$62,000",
    label: "Denied Claim Won",
  },
  {
    quote:
      "Testimonial coming soon — real client results from a homeowner who received 4X their initial offer.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
    amount: "$38,200",
    label: "4X Initial Offer",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, rotateY: -5 },
        visible: {
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-forest-800/10 bg-white shadow-[0_1px_3px_rgba(10,26,18,0.06),0_8px_24px_rgba(10,26,18,0.04)] transition-shadow duration-300 group-hover:shadow-[0_4px_12px_rgba(10,26,18,0.08),0_16px_40px_rgba(10,26,18,0.08)]">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

        <div className="p-7">
          {/* Settlement amount badge */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-forest-950 md:text-3xl">
                {testimonial.amount}
              </span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-gold-600">
                {testimonial.label}
              </span>
            </div>
            <Quote className="h-8 w-8 text-gold-400/40 transition-colors duration-300 group-hover:text-gold-500/60" />
          </div>

          {/* Stars */}
          <div className="mb-4 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, j) => (
              <Star
                key={j}
                className="h-4 w-4 fill-gold-500 text-gold-500"
              />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-[0.95rem] leading-relaxed text-forest-800/70">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-forest-800/10 to-transparent" />

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-800 text-sm font-bold text-cream-50">
              {testimonial.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-forest-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-forest-700/60">
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cream-50 py-24 md:py-32 lg:py-40"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large decorative quote mark */}
        <div className="absolute -left-10 top-16 font-display text-[20rem] font-bold leading-none text-forest-900/[0.02] md:text-[28rem]">
          &ldquo;
        </div>
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(10,26,18,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gold gradient accent */}
        <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-gold-300/20 to-gold-500/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold text-gold-600">
              <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
              5-Star Rated Service
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl md:text-5xl"
          >
            Real Results From Texas Homeowners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-forest-800/60 md:text-lg"
          >
            Our clients consistently receive settlements 3-5X higher than their
            initial insurance offers.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-7"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </motion.div>
      </Container>

      {/* Top transition: dark to cream */}
      <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-forest-950/5 to-transparent" />
      {/* Bottom transition: cream to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest-950/5 to-transparent" />
    </section>
  );
}
