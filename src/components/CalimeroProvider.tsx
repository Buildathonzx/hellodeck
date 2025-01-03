"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { calimero } from "../lib/calimero";

const CalimeroContext = createContext<any>(null);

export function CalimeroProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await calimero.isSignedIn();
      setIsInitialized(true);
    }
    init();
  }, []);

  if (!isInitialized) {
    return <div>Initializing Calimero...</div>;
  }

  return (
    <CalimeroContext.Provider value={calimero}>
      {children}
    </CalimeroContext.Provider>
  );
}

export const useCalimero = () => useContext(CalimeroContext);
