"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Shield,
  Phone,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/utils";
import { cn } from "@/lib/utils";

const DAMAGE_TYPES = ["Hail", "Wind", "Water", "Fire", "Other"] as const;
const CLAIM_STATUSES = [
  "Just happened",
  "Claim filed",
  "Received offer",
  "Claim denied",
  "Other",
] as const;

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  damageType: string;
  hasFiled: string;
  status: string;
  description: string;
  contactTime: string;
}

const MINI_STATS = [
  { icon: TrendingUp, label: "100+ Claims" },
  { icon: DollarSign, label: "$35K–$60K Avg Increase" },
  { icon: Clock, label: "90-Day Resolution" },
];

export function ContactContent() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    damageType: "",
    hasFiled: "",
    status: "",
    description: "",
    contactTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "block w-full min-w-0 rounded-lg border border-cream-300 bg-white px-3 py-3 text-forest-900 text-sm placeholder:text-forest-700/30 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors";
  const selectClasses = cn(
    inputClasses,
    "appearance-none cursor-pointer"
  );
  const labelClasses = "block text-sm font-medium text-forest-800 mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-950 px-5 pt-28 pb-12 text-center sm:px-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-2xl">
          <Badge variant="gold" className="mb-5">
            <Shield className="h-3.5 w-3.5" />
            Free Consultation
          </Badge>
          <h1 className="font-display text-2xl font-bold leading-tight text-cream-50 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready To Get What You&apos;re Actually Owed?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream-200/60 sm:mt-5 sm:max-w-lg sm:text-base">
            Fill out the form below to schedule your FREE claim review. No
            obligations, no pressure — just expert guidance.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-cream-100 px-5 py-10 sm:px-8 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Form Column */}
            <div className="min-w-0 flex-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-cream-300/60 bg-white p-6 text-center shadow-lg sm:p-10"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-700/10">
                    <CheckCircle2 className="h-8 w-8 text-forest-700" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-forest-900">
                    Thank You!
                  </h2>
                  <p className="mt-2 text-forest-800/70">
                    We&apos;ve received your information. A member of our team
                    will contact you within 24 hours to schedule your free claim
                    review.
                  </p>
                </motion.div>
              ) : (
                <div className="md:rounded-2xl md:border md:border-cream-300/60 md:bg-white md:p-8 md:shadow-lg lg:p-10">
                  <h2 className="font-display text-xl font-bold text-forest-900 sm:text-2xl">
                    Schedule Your FREE Claim Review
                  </h2>
                  <p className="mt-1 text-sm text-forest-800/50">
                    Fields marked with * are required
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
                    <div className="space-y-5 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-5 md:space-y-0">
                      {/* Full Name */}
                      <div className="md:col-span-2">
                        <label htmlFor="fullName" className={labelClasses}>
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.fullName}
                          onChange={(e) =>
                            updateField("fullName", e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="(830) 214-2701"
                          value={form.phone}
                          onChange={(e) =>
                            updateField("phone", e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) =>
                            updateField("email", e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>

                      {/* Damage Type */}
                      <div className="relative">
                        <label htmlFor="damageType" className={labelClasses}>
                          Type of Damage *
                        </label>
                        <select
                          id="damageType"
                          required
                          value={form.damageType}
                          onChange={(e) =>
                            updateField("damageType", e.target.value)
                          }
                          className={selectClasses}
                        >
                          <option value="">Select damage type</option>
                          {DAMAGE_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 bottom-3.5 h-4 w-4 text-forest-700/40" />
                      </div>

                      {/* Has Filed */}
                      <div className="relative">
                        <label htmlFor="hasFiled" className={labelClasses}>
                          Have you filed a claim? *
                        </label>
                        <select
                          id="hasFiled"
                          required
                          value={form.hasFiled}
                          onChange={(e) =>
                            updateField("hasFiled", e.target.value)
                          }
                          className={selectClasses}
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 bottom-3.5 h-4 w-4 text-forest-700/40" />
                      </div>

                      {/* Current Status */}
                      <div className="relative">
                        <label htmlFor="status" className={labelClasses}>
                          Current Status *
                        </label>
                        <select
                          id="status"
                          required
                          value={form.status}
                          onChange={(e) =>
                            updateField("status", e.target.value)
                          }
                          className={selectClasses}
                        >
                          <option value="">Select status</option>
                          {CLAIM_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 bottom-3.5 h-4 w-4 text-forest-700/40" />
                      </div>

                      {/* Date of Loss */}
                      <div>
                        <label htmlFor="contactTime" className={labelClasses}>
                          Date of Loss
                        </label>
                        <input
                          type="date"
                          id="contactTime"
                          value={form.contactTime}
                          onChange={(e) =>
                            updateField("contactTime", e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label htmlFor="description" className={labelClasses}>
                          Brief Description of Damage
                        </label>
                        <textarea
                          id="description"
                          rows={3}
                          placeholder="Tell us briefly about the damage to your property..."
                          value={form.description}
                          onChange={(e) =>
                            updateField("description", e.target.value)
                          }
                          className={cn(inputClasses, "resize-none")}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-7 sm:mt-8">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Get My FREE Claim Review Now
                      </Button>
                    </div>

                    {/* Privacy */}
                    <p className="mt-3 text-xs leading-relaxed text-forest-700/40">
                      By submitting this form, you agree to be contacted by S2S
                      Claims regarding your claim. We respect your privacy and
                      will never share your information.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full shrink-0 lg:w-72 xl:w-80">
              <div className="space-y-4 lg:sticky lg:top-28">
                {/* Why Free */}
                <div className="rounded-2xl border border-cream-300/60 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-forest-900">
                    Why is this free?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/55">
                    This consultation is completely free and there&apos;s no
                    obligation to work with us. We&apos;ll give you honest
                    feedback about your claim — even if we can&apos;t help,
                    you&apos;ll walk away knowing more than you did before.
                  </p>
                </div>

                {/* Mini stats */}
                <div className="rounded-2xl border border-cream-300/60 bg-white p-5 shadow-sm">
                  <div className="flex flex-row items-center justify-around gap-3 lg:flex-col lg:items-start lg:justify-start lg:gap-4">
                    {MINI_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center gap-1.5 lg:flex-row lg:gap-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-900/5">
                          <stat.icon className="h-4 w-4 text-forest-700" />
                        </div>
                        <span className="text-center text-xs font-medium text-forest-800 lg:text-left lg:text-sm">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone alternative */}
                <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5">
                  <p className="text-sm font-medium text-forest-800">
                    Prefer to talk?
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-1.5 flex items-center gap-2 text-base font-bold text-forest-900 transition-colors hover:text-gold-600 lg:text-lg"
                  >
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
