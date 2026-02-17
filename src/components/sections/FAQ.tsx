"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronDown } from "lucide-react";
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
      "Not at all! As long as you haven't signed a final release, we can usually help. Many of our best results come from reopening \"settled\" claims that homeowners initially accepted.",
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
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-forest-600/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-gold-500"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-lg font-semibold transition-colors",
            isOpen ? "text-gold-400" : "text-cream-100"
          )}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-cream-200/40" />
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
            <p className="pb-5 text-cream-200/60 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-forest-950 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-forest-600/20 bg-forest-800/30 px-6">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
