import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bonsai Digital | Digital Craftsmanship",
    template: "%s | Bonsai Digital",
  },
  description:
    "We cultivate your digital presence with care and precision. Custom web development, design, and digital solutions crafted in Japan for businesses worldwide.",
  keywords: [
    "web development",
    "digital agency",
    "Japan",
    "React",
    "Next.js",
    "UI/UX design",
    "web design",
    "custom websites",
    "bonsai",
    "digital solutions",
  ],
  authors: [{ name: "Bonsai Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bonsai Digital",
    title: "Bonsai Digital | Digital Craftsmanship from Japan",
    description:
      "We cultivate your digital presence with care and precision. Custom solutions crafted for businesses worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsai Digital | Digital Craftsmanship from Japan",
    description:
      "We cultivate your digital presence with care and precision.",
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
      <body className={`${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
