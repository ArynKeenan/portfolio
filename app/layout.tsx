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

export const metadata = {
  title: 'Aryn Keenan | Embedded Software Engineer',
  description: 'Embedded Software Engineer & Founder of Eyretel Labs based in County Down, Northern Ireland.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Aryn Keenan | Embedded Software Engineer',
    description: 'Embedded Software Engineer & Founder of Eyretel Labs based in County Down, Northern Ireland.',
    url: 'https://arynkeenan.com',
    siteName: 'Aryn Keenan Portfolio',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryn Keenan Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryn Keenan — Embedded Software Engineer',
    description: 'Embedded Software Engineer & Full Stack Developer based in County Down, Northern Ireland.',
    images: ['/preview-image.png'],
  }
}

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
