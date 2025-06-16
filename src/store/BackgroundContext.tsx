'use client';
import { createContext, useContext, useState } from 'react';

type BackgroundContextType = {
  currentBackground: string | null;
  hasBackground: boolean;
  setBackground: (image: string) => void;
  clearBackground: () => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

export default function BackgroundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentBackground, setCurrentBackground] = useState<string | null>(
    null
  );

  const setBackground = (image: string) => {
    setCurrentBackground(image);
  };

  const clearBackground = () => {
    setCurrentBackground(null);
  };

  const hasBackground = !!currentBackground;

  return (
    <BackgroundContext.Provider
      value={{
        currentBackground,
        hasBackground,
        setBackground,
        clearBackground,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}
