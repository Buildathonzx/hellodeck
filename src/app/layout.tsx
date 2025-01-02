"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "../components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hellodeck",
  description: "End to end enrypted messaging and communication application powered by Cairo/Calimero SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 min-h-screen`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/20 rounded-lg backdrop-blur-sm"
        >
          ☰
        </button>
        
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className={`
            fixed lg:static inset-0 z-40
            transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:transform-none transition-transform duration-300 ease-in-out
          `}>
            <SideBar onClose={() => setIsMobileMenuOpen(false)} />
          </div>
          
          <div className="flex-1 lg:ml-4 p-4 pt-16 lg:pt-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
