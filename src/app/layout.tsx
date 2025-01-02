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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 min-h-screen flex p-4`}
      >
        <SideBar />
        <div className="flex-1 ml-4">
          {children}
        </div>
      </body>
    </html>
  );
}
