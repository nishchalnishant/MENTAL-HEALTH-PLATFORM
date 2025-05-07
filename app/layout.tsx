import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | MindFlix',
    default: 'MindFlix - Your Mental Wellness Platform',
  },
  description: 'A personalized mental health content platform offering tailored resources for everyone.',
  keywords: ['mental health', 'wellness', 'mindfulness', 'therapy', 'self-care', 'mental wellness'],
  authors: [{ name: 'MindFlix Team' }],
  openGraph: {
    title: 'MindFlix - Your Mental Wellness Platform',
    description: 'A personalized mental health content platform offering tailored resources for everyone.',
    url: 'https://mindflix.com',
    siteName: 'MindFlix',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#E50914',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
