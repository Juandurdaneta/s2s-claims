import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "S2S Claims | Licensed Public Adjusters — Texas",
    template: "%s | S2S Claims",
  },
  description:
    "Get your FULL insurance settlement without years of fighting. S2S Claims helps Texas homeowners get 3-5X more than initial offers. Free claim review — you only pay if we win.",
  keywords: [
    "public adjuster Texas",
    "insurance claim help Texas",
    "property damage claim",
    "insurance settlement help",
    "denied claim help",
    "lowball insurance offer",
    "hail damage claim",
    "storm damage claim Texas",
  ],
  openGraph: {
    title: "S2S Claims | Get Your FULL Insurance Settlement",
    description:
      "Licensed Texas public adjusters helping homeowners get 3-5X more than insurance company offers. Free claim review. You only pay if we win.",
    type: "website",
    locale: "en_US",
    siteName: "S2S Claims",
  },
  twitter: {
    card: "summary_large_image",
    title: "S2S Claims | Licensed Public Adjusters — Texas",
    description:
      "Get your FULL insurance settlement. Average increase: $35K-$60K. Free review. You only pay if we win.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
