import { Container } from "@/components/ui/Container";
import { Shield, MapPin, Phone, Mail } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/lib/utils";
import Link from "next/link";

const FOOTER_LINKS = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "FAQ", href: "/#faq" },
    { label: "Our Process", href: "/services#process" },
    { label: "Free Claim Review", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-forest-700/30 bg-forest-950 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 border border-gold-500/30">
                <Shield className="h-5 w-5 text-gold-400" />
              </div>
              <span className="text-lg font-bold text-cream-50 tracking-tight">
                S2S Claims
              </span>
            </Link>
            <p className="mt-3 text-sm text-cream-200/50">
              Licensed Public Adjusters
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/40">
              Fighting for Texas homeowners to get the full insurance settlement
              they deserve.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-sm text-cream-200/50 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-cream-200/50 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
            </div>

            {/* Texas badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-800/50 border border-forest-700/30 px-4 py-2">
              <MapPin className="h-3.5 w-3.5 text-gold-500" />
              <span className="text-xs font-medium text-cream-200/50">
                Serving Texas Homeowners
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-200/30">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-200/50 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-forest-700/20 pt-8">
          <p className="text-center text-xs text-cream-200/30">
            © {new Date().getFullYear()} S2S Claims. All rights reserved. Licensed
            Public Adjusters — Texas.
          </p>
        </div>
      </Container>
    </footer>
  );
}
