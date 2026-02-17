import React, { createContext, useMemo, useState } from "react";

export type FlagKey = "newDashboard" | "advancedReports" | "chatWidget" | "darkMode";

export type FlagState = Record<FlagKey, boolean>;

export type FlagContextValue = {
  flags: FlagState;
  setFlag: (key: FlagKey, value: boolean) => void;
  toggleFlag: (key: FlagKey) => void;
};

const DEFAULT_FLAGS: FlagState = {
  newDashboard: false,
  advancedReports: false,
  chatWidget: false,
  darkMode: false,
};

const FlagContext = createContext<FlagContextValue | null>(null);

export { FlagContext };

export function FlagProvider(props: { 
    children: React.ReactNode; 
    overrides?: Partial<FlagState> 
}) {
  const [flags, setFlags] = useState<FlagState>(() => ({
    ...DEFAULT_FLAGS,
    ...props.overrides,
  }));

  const setFlag = (key: FlagKey, value: boolean) => {
    setFlags((prev) => {
      if (prev[key] === value) return prev;
      return { ...prev, [key]: value };
    });
  };

  const toggleFlag = (key: FlagKey) => {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const value = useMemo<FlagContextValue>(() => {
    return { flags, setFlag, toggleFlag };
  }, [flags]);

  return <FlagContext.Provider value={value}>{props.children}</FlagContext.Provider>;
}

