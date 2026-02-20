"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "How much do you charge?",
    answer:
      "We work on commission, typically 10% of the settlement we secure for you. You pay nothing upfront, and you only pay if we get you more money than the insurance company offered. If we don't increase your settlement, you owe us nothing.",
  },
  {
    question: "Is it too late if I already received an offer?",
    answer:
      'Not at all! As long as you haven\'t signed a final release, we can usually help. Many of our best results come from reopening "settled" claims that homeowners initially accepted.',
  },
  {
    question: "Will hiring you make the insurance company deny my claim?",
    answer:
      "No. Hiring a public adjuster is your legal right and happens every day. Insurance companies actually take claims more seriously when there's professional representation because they know they can't use confusion tactics.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most claims are settled within 90 days once we get involved, which is often faster than if you continued fighting alone.",
  },
  {
    question: "What if my claim was denied?",
    answer:
      "We've successfully reopened and won many denied claims. Denials are often based on incomplete documentation or misinterpretation of policy language — both things we know how to fix.",
  },
  {
    question: "Can I cancel my contract?",
    answer:
      "In Texas, you have a 3-day right of rescission, allowing you to cancel your contract without any penalties. After that period, you must allow us to take your claim as far as we can, which may include appraisal or transferring to an attorney who also works on contingency.",
  },
  {
    question: "Do you handle auto claims?",
    answer:
      "No we do not, but we will point you in the right direction to a company who does.",
  },
  {
    question: "Do I have to be in Texas?",
    answer:
      "While we're based in Texas and most of our clients are here, we're expanding nationwide. Contact us to see if we can help in your state.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={cn(
        "group rounded-xl border transition-all duration-300",
        isOpen
          ? "border-gold-500/30 bg-white shadow-[0_2px_12px_rgba(10,26,18,0.06),0_0_20px_rgba(197,165,90,0.06)]"
          : "border-forest-800/8 bg-white/60 hover:border-forest-800/15 hover:bg-white"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:rounded-xl md:px-6 md:py-5"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300",
            isOpen
              ? "bg-gold-500 text-forest-950"
              : "bg-forest-900/8 text-forest-800/50 group-hover:bg-forest-900/12"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={cn(
            "flex-1 text-[0.95rem] font-semibold transition-colors duration-200 md:text-base",
            isOpen ? "text-gold-600" : "text-forest-900 group-hover:text-forest-950"
          )}
        >
          {item.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "shrink-0 rounded-full p-1 transition-colors duration-300",
            isOpen ? "bg-gold-500/15 text-gold-600" : "text-forest-800/30"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[4.25rem] md:px-6 md:pb-6 md:pl-[4.75rem]">
              <p className="text-[0.9rem] leading-relaxed text-forest-800/60 md:text-[0.95rem]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cream-50 py-24 md:py-32 lg:py-40"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-gold-300/15 to-transparent blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-forest-400/5 to-transparent blur-3xl" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(10,26,18,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Header + CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-gold-600"
              >
                Got Questions?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-3 font-display text-3xl font-bold leading-tight text-forest-950 sm:text-4xl lg:text-[2.75rem]"
              >
                Frequently Asked Questions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base leading-relaxed text-forest-800/60"
              >
                Everything you need to know about working with a licensed public
                adjuster in Texas.
              </motion.p>

              {/* CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 rounded-2xl border border-forest-800/10 bg-white p-6 shadow-[0_2px_8px_rgba(10,26,18,0.06)]"
              >
                <p className="text-sm font-semibold text-forest-900">
                  Still have questions?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-forest-800/60">
                  Our team is here to help. Get a free consultation — no
                  pressure, no obligation.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <CTAButton />
                  <a
                    href="tel:5551234567"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-800/15 px-5 py-2.5 text-sm font-medium text-forest-800/70 transition-colors hover:border-forest-800/30 hover:text-forest-900"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    (555) 123-4567
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column: FAQ accordion */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.2 },
              },
            }}
            className="flex flex-col gap-3 lg:col-span-8"
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
