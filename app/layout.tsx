import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InternTrack — AI-Powered Internship Application Platform",
  description:
    "Track your internship applications with AI-powered insights, real-time updates, and a premium dashboard. Built for ambitious students.",
  keywords: ["internship", "application tracking", "career", "jobs", "AI"],
  openGraph: {
    title: "InternTrack — AI-Powered Internship Application Platform",
    description:
      "Track your internship applications with AI-powered insights, real-time updates, and a premium dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
