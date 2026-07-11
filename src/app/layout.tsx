import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wastewiserai.com"),
  title: {
    default: "WasteWiser AI | Predictive Waste Intelligence",
    template: "%s | WasteWiser AI",
  },
  description:
    "Predictive waste intelligence for citizen reporting, risk scoring and smarter dispatch decisions in African cities.",
  keywords: [
    "WasteWiser AI",
    "waste management AI",
    "predictive waste intelligence",
    "Abuja waste reporting",
    "smart waste collection",
    "civic technology Nigeria",
  ],
  authors: [{ name: "Bethel Chinedu Clement" }],
  creator: "Bethel Chinedu Clement",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WasteWiser AI | Predictive Waste Intelligence",
    description:
      "Turn citizen waste reports into risk scores, priority zones and smarter dispatch decisions.",
    url: "https://wastewiserai.com",
    siteName: "WasteWiser AI",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WasteWiser AI | Predictive Waste Intelligence",
    description:
      "Citizen reporting, explainable risk scoring and smarter waste dispatch for African cities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
