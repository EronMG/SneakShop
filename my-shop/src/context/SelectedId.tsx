// NetworkContext.tsx
import React, { useState, createContext, ReactNode } from "react";

interface NetworkContextType {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
}

export const NetworkContext = createContext<NetworkContextType | undefined>(
  undefined
);

interface NetworkProviderProps {
  children: ReactNode;
}

export const NetworkProvider: React.FC<NetworkProviderProps> = ({
  children,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  return (
    <NetworkContext.Provider
      value={{ selectedId, setSelectedId, selectedName, setSelectedName }}
    >
      {children}
    </NetworkContext.Provider>
  );
};
