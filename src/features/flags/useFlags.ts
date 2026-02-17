import { useContext } from "react";
import { FlagContext } from "./FlagProvider";
import type { FlagContextValue } from "./FlagProvider";

export function useFlags(): FlagContextValue {
  const ctx = useContext(FlagContext);
  if (!ctx) {
    throw new Error("useFlags must be used within a FlagProvider");
  }
  return ctx;
}