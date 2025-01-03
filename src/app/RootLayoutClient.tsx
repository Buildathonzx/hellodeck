"use client";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { CalimeroProvider } from "../components/CalimeroProvider";
import { StarknetProvider } from "../components/StarknetProvider";
import SideBar from "../components/SideBar";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <SessionProvider>
      <CalimeroProvider>
        <StarknetProvider>
          <>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/20 rounded-lg backdrop-blur-sm"
            >
              ☰
            </button>

            <div className="flex flex-col lg:flex-row min-h-screen">
              <div
                className={`
                  fixed lg:static inset-0 z-40 transform
                  ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                  lg:transform-none transition-transform duration-300 ease-in-out
                `}
              >
                <SideBar onClose={() => setIsMobileMenuOpen(false)} />
              </div>

              <div className="flex-1 lg:ml-4 p-4 pt-16 lg:pt-4">{children}</div>
            </div>
          </>
        </StarknetProvider>
      </CalimeroProvider>
    </SessionProvider>
  );
}