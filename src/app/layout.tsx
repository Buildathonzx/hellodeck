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
          bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex`}
      >
        <SideBar />
        <div className="flex-1">
          <header className="animate-pulse mb-4 p-4 text-white font-bold">
            <h2>Hellodeck</h2>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
