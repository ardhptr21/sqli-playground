import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "SQL Injection Playground",
  description: "Vulnerable SQL Injection playground.",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--geist-font",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--geist-mono-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased font-sans p-16`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
