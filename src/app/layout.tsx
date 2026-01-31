import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kai Solutions | Web Development & Digital Solutions",
    template: "%s | Kai Solutions",
  },
  description:
    "We build modern websites and digital solutions that help your business grow. Custom web development, UI/UX design, and digital transformation.",
  keywords: [
    "web development",
    "digital agency",
    "React",
    "Next.js",
    "UI/UX design",
    "web design",
    "custom websites",
  ],
  authors: [{ name: "Kai Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kai Solutions",
    title: "Kai Solutions | Web Development & Digital Solutions",
    description:
      "We build modern websites and digital solutions that help your business grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Solutions | Web Development & Digital Solutions",
    description:
      "We build modern websites and digital solutions that help your business grow.",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
