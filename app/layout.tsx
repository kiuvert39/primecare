import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site, colors } from "@/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

// CSS custom properties sourced from data/colors.ts.
// To retheme the entire app, edit data/colors.ts only — no CSS changes needed.
const lightVars = [
  // Semantic tokens
  `--primary:${colors.primary.DEFAULT}`,
  `--primary-light:${colors.primary.light}`,
  `--primary-dark:${colors.primary.dark}`,
  `--secondary:${colors.secondary.DEFAULT}`,
  `--secondary-light:${colors.secondary.light}`,
  `--secondary-dark:${colors.secondary.dark}`,
  `--background:${colors.background.light}`,
  `--foreground:${colors.foreground.light}`,
  `--danger:${colors.danger}`,
  `--warning:${colors.warning}`,
  `--success:${colors.success}`,
  // Brand scale
  `--brand-50:${colors.brand[50]}`,
  `--brand-100:${colors.brand[100]}`,
  `--brand-200:${colors.brand[200]}`,
  `--brand-300:${colors.brand[300]}`,
  `--brand-400:${colors.brand[400]}`,
  `--brand-500:${colors.brand[500]}`,
  `--brand-600:${colors.brand[600]}`,
  `--brand-700:${colors.brand[700]}`,
  `--brand-800:${colors.brand[800]}`,
  `--brand-900:${colors.brand[900]}`,
  // Accent scale
  `--accent-50:${colors.accent[50]}`,
  `--accent-100:${colors.accent[100]}`,
  `--accent-200:${colors.accent[200]}`,
  `--accent-300:${colors.accent[300]}`,
  `--accent-400:${colors.accent[400]}`,
  `--accent-500:${colors.accent[500]}`,
  // Neutral scale
  `--neutral-50:${colors.neutral[50]}`,
  `--neutral-100:${colors.neutral[100]}`,
  `--neutral-200:${colors.neutral[200]}`,
  `--neutral-300:${colors.neutral[300]}`,
  `--neutral-400:${colors.neutral[400]}`,
  `--neutral-500:${colors.neutral[500]}`,
  `--neutral-600:${colors.neutral[600]}`,
  `--neutral-700:${colors.neutral[700]}`,
  `--neutral-800:${colors.neutral[800]}`,
  `--neutral-900:${colors.neutral[900]}`,
  `--neutral-950:${colors.neutral[950]}`,
].join(";");

const darkVars = [
  `--background:${colors.background.dark}`,
  `--foreground:${colors.foreground.dark}`,
].join(";");

const colorStyles = `:root{${lightVars}}@media(prefers-color-scheme:dark){:root{${darkVars}}}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorStyles }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
