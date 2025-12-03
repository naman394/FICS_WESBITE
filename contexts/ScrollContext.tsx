'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  bgColor: { r: number; g: number; b: number };
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [bgColor, setBgColor] = useState({ r: 0, g: 0, b: 0 });

  useEffect(() => {
    // Keep background always black
    setBgColor({ r: 0, g: 0, b: 0 });
  }, []);

  return (
    <ScrollContext.Provider value={{ bgColor }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}

