import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Dushyant Bist | NY Mortgage Loan Officer",
    template: "%s | Dushyant Bist",
  },
  description: "New York State Mortgage Loan Officer helping you make smart moves with residential, commercial, and hard money loans. Conventional, FHA, VA, Jumbo, Non-QM, DSCR, and more.",
  keywords: ["mortgage", "loan officer", "New York", "home loans", "FHA", "VA", "conventional", "DSCR", "hard money"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dushyant Bist",
    title: "Dushyant Bist | NY Mortgage Loan Officer",
    description: "New York State Mortgage Loan Officer helping you make smart moves with your money.",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
