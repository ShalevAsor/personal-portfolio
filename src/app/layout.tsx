import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shalev Asor | Frontend Developer",
  description:
    "Portfolio of Shalev Asor - Frontend Developer and Algorithm Enthusiast",
  icons: {
    icon: [
      { rel: "icon", url: "./favicon.ico" },
      {
        rel: "icon",
        url: "./favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "./favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      { url: "./apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "./android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "./android-chrome-512x512.png",
      },
    ],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />

        {children}
      </body>
    </html>
  );
}
