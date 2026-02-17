"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Phone, Clock, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";
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
const CONTACT_TIMES = ["Morning", "Afternoon", "Evening"] as const;

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
    "w-full rounded-xl border border-cream-300/60 bg-white px-4 py-3.5 text-forest-900 text-sm transition-all placeholder:text-forest-700/30 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none";
  const labelClasses = "block text-sm font-medium text-forest-800 mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-gold-500/8 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="gold" className="mb-6">
              <Shield className="h-3.5 w-3.5" />
              Free Consultation
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl md:text-6xl">
              Ready To Get What You&apos;re Actually Owed?
            </h1>
            <p className="mt-6 text-lg text-cream-200/60">
              Fill out the form below to schedule your FREE claim review. No
              obligations, no pressure — just expert guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <FadeIn>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-3xl border border-cream-300/60 bg-white p-10 text-center shadow-xl shadow-black/5"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-700/10">
                        <CheckCircle2 className="h-8 w-8 text-forest-700" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-forest-900">
                        Thank You!
                      </h2>
                      <p className="mt-2 text-forest-800/70">
                        We&apos;ve received your information. A member of our team
                        will contact you within 24 hours to schedule your free
                        claim review.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="rounded-3xl border border-cream-300/60 bg-white p-8 shadow-xl shadow-black/5 md:p-10"
                    >
                      <h2 className="font-display text-2xl font-bold text-forest-900">
                        Schedule Your FREE Claim Review
                      </h2>
                      <p className="mt-1 text-sm text-forest-800/60">
                        Fields marked with * are required
                      </p>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {/* Full Name */}
                        <div className="sm:col-span-2">
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
                            placeholder="(555) 123-4567"
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
                        <div>
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
                            className={cn(inputClasses, "appearance-none")}
                          >
                            <option value="">Select damage type</option>
                            {DAMAGE_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Has Filed */}
                        <div>
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
                            className={cn(inputClasses, "appearance-none")}
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {/* Current Status */}
                        <div>
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
                            className={cn(inputClasses, "appearance-none")}
                          >
                            <option value="">Select status</option>
                            {CLAIM_STATUSES.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Contact Time */}
                        <div>
                          <label
                            htmlFor="contactTime"
                            className={labelClasses}
                          >
                            Best Time to Contact
                          </label>
                          <select
                            id="contactTime"
                            value={form.contactTime}
                            onChange={(e) =>
                              updateField("contactTime", e.target.value)
                            }
                            className={cn(inputClasses, "appearance-none")}
                          >
                            <option value="">Select time</option>
                            {CONTACT_TIMES.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Description */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="description"
                            className={labelClasses}
                          >
                            Brief Description of Damage
                          </label>
                          <textarea
                            id="description"
                            rows={4}
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
                      <div className="mt-8">
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          Get My FREE Claim Review Now
                        </Button>
                      </div>

                      {/* Privacy */}
                      <p className="mt-4 text-xs text-forest-700/40">
                        By submitting this form, you agree to be contacted by
                        S2S Claims regarding your claim. We respect your privacy
                        and will never share your information.
                      </p>
                    </form>
                  )}
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.15}>
                  <div className="sticky top-28 space-y-6">
                    {/* Why Free */}
                    <div className="rounded-2xl border border-cream-300/60 bg-white p-6 shadow-lg shadow-black/5">
                      <h3 className="font-bold text-forest-900">
                        Why is this free?
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                        This consultation is completely free and there&apos;s no
                        obligation to work with us. We&apos;ll give you honest
                        feedback about your claim — even if we can&apos;t help,
                        you&apos;ll walk away knowing more than you did before.
                      </p>
                    </div>

                    {/* Mini stats */}
                    <div className="rounded-2xl border border-cream-300/60 bg-white p-6 shadow-lg shadow-black/5">
                      <div className="space-y-4">
                        {MINI_STATS.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex items-center gap-3"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest-900/5">
                              <stat.icon className="h-4 w-4 text-forest-700" />
                            </div>
                            <span className="text-sm font-medium text-forest-800">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phone alternative */}
                    <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6">
                      <p className="text-sm font-medium text-forest-800">
                        Prefer to talk?
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="mt-2 flex items-center gap-2 text-lg font-bold text-forest-900 hover:text-gold-600 transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
