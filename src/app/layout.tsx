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
    icon: "/favicon.ico", // /public/favicon.ico
    shortcut: "/favicon-16x16.png", // /public/favicon-16x16.png
    apple: "/apple-touch-icon.png", // /public/apple-touch-icon.png
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />

        {children}
      </body>
    </html>
  );
}
