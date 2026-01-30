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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dushyant-rahul-lalia.vercel.app"),
  title: {
    default: "Dushyant Bist | Mortgage Loan Officer in New York",
    template: "%s | Dushyant Bist",
  },
  description: "Looking for a mortgage in New York? I help buyers, investors, and homeowners find the right loan. Conventional, FHA, VA, Jumbo, DSCR, and more. Let's talk.",
  keywords: [
    "mortgage loan officer New York",
    "home loans NY",
    "FHA loans New York",
    "VA loans NY",
    "investment property loans",
    "DSCR loans",
    "first time home buyer NY",
  ],
  authors: [{ name: "Dushyant Bist" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dushyant-rahul-lalia.vercel.app",
    siteName: "Dushyant Bist",
    title: "Dushyant Bist | Mortgage Loan Officer in New York",
    description: "Looking for a mortgage in New York? I help buyers, investors, and homeowners find the right loan.",
    images: [{ url: "/dushyant.jpeg", width: 400, height: 400, alt: "Dushyant Bist" }],
  },
  twitter: {
    card: "summary",
    title: "Dushyant Bist | Mortgage Loan Officer",
    description: "Your trusted partner for home loans in New York.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dushyant-rahul-lalia.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0c0c0c" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0c0c0c] text-[#f5f5f5] min-h-screen`}
      >
        {/* Ambient Background */}
        <div className="ambient-bg" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dushyant Bist",
              jobTitle: "Mortgage Loan Officer",
              description: "Mortgage Loan Officer serving New York State",
              url: "https://dushyant-rahul-lalia.vercel.app",
              telephone: "+19172004124",
              address: {
                "@type": "PostalAddress",
                addressRegion: "NY",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "State",
                name: "New York",
              },
              sameAs: ["https://www.instagram.com/poweredbydbest/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
