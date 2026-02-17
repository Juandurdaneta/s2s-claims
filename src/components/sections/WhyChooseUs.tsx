"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Shield,
  DollarSign,
  Handshake,
  Clock,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}[] = [
  {
    icon: Trophy,
    title: "100+ Successful Claims",
    description:
      "We've seen almost every scenario and know how to navigate even the most complex claims.",
    stat: "100+",
    statLabel: "Claims Won",
  },
  {
    icon: Shield,
    title: "Former Insurance Insider",
    description:
      "Paden knows the playbook because he used to be part of the system — now he uses that knowledge for YOU.",
    stat: "15+",
    statLabel: "Years Experience",
  },
  {
    icon: DollarSign,
    title: "$35K–$60K Average Increase",
    description:
      "Our clients typically get 3–5X more than what the insurance company first offered.",
    stat: "3–5X",
    statLabel: "More Than Offered",
  },
  {
    icon: Handshake,
    title: "No Upfront Costs",
    description:
      "Zero risk to you. If we don't increase your settlement, you don't pay us.",
    stat: "$0",
    statLabel: "Unless We Win",
  },
  {
    icon: Clock,
    title: "90-Day Resolution",
    description:
      "We move quickly because we know you need this resolved so you can get your life back to normal.",
    stat: "90",
    statLabel: "Day Average",
  },
  {
    icon: MapPin,
    title: "Texas-Based & Focused",
    description:
      "We're not a national call center. When you call, you talk to someone who knows your case.",
    stat: "TX",
    statLabel: "Born & Based",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const Icon = feature.icon;
  // Alternate: first two are wide (span 2 cols on the first row), rest are normal
  // Actually let's do a bento-style: items 0 and 3 span 2 columns
  const isWide = index === 0 || index === 3;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`group relative ${isWide ? "md:col-span-2" : ""}`}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-forest-600/15 bg-gradient-to-br from-forest-800/50 to-forest-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/20 hover:shadow-[0_0_30px_rgba(197,165,90,0.06)] md:p-8">
        {/* Subtle corner accent */}
        <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-gold-500/[0.07] to-transparent" />

        <div className={`flex flex-col gap-5 ${isWide ? "md:flex-row md:items-center md:gap-8" : ""}`}>
          {/* Stat + icon block */}
          <div className={`flex items-start gap-4 ${isWide ? "md:min-w-[200px]" : ""}`}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 transition-colors duration-300 group-hover:border-gold-500/40 group-hover:bg-gold-500/15">
              <Icon className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <span className="font-display text-3xl font-bold tracking-tight text-cream-50 md:text-4xl">
                {feature.stat}
              </span>
              <span className="mt-0.5 block text-xs font-semibold uppercase tracking-widest text-gold-500/70">
                {feature.statLabel}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-cream-50">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-200/50">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-forest-950 py-24 md:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-forest-700/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-gold-500/5 to-transparent blur-3xl" />
        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold text-gold-400"
          >
            <Shield className="h-3.5 w-3.5" />
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl"
          >
            Why Texas Homeowners Choose{" "}
            <span className="text-gold-400">S2S Claims</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-cream-200/50 md:text-lg"
          >
            We combine insider knowledge, proven results, and zero-risk pricing
            so you can focus on rebuilding — not fighting.
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-4 md:gap-5"
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
