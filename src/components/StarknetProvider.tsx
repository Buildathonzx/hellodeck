"use client";
import { createContext, useContext, ReactNode } from 'react';
import { starknet } from '../lib/starknet';

const StarknetContext = createContext<any>(null);

export function StarknetProvider({ children }: { children: ReactNode }) {
  return (
    <StarknetContext.Provider value={starknet}>
      {children}
    </StarknetContext.Provider>
  );
}

export const useStarknet = () => useContext(StarknetContext);
