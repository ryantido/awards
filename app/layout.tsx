import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/sections/NavBar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awards — Immersive Multiversal Experience",
  description:
    "Awards is an immersive, interactive multiversal experience built with Next.js, GSAP, and modern design — where gaming, storytelling, and innovation converge.",
  keywords: [
    "Awards",
    "Next.js",
    "GSAP",
    "web animation",
    "interactive design",
    "multiverse",
    "React",
    "3D effects",
    "gaming experience",
  ],
  authors: [{ name: "Your Name or Team" }],
  openGraph: {
    title: "Awards — Immersive Multiversal Experience",
    description:
      "Explore the next generation of storytelling and gaming through Awards, an interactive multiversal world.",
    url: "https://yourdomain.com",
    siteName: "Awards",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Awards Project Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards — Immersive Multiversal Experience",
    description:
      "Discover Awards — a dynamic multiversal world blending technology, design, and storytelling.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {Array.from({ length: 4 }).map((_, i) => (
          <link
            key={i}
            rel="preload"
            as="video"
            href={`/videos/hero-${i + 1}.mp4`}
            type="video/mp4"
          />
        ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Awards",
              url: "https://yourdomain.com",
              description:
                "Awards is an immersive multiversal experience uniting design, storytelling, and gaming through web technology.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yourdomain.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} antialiased scroll-smooth bg-black text-blue-50`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
