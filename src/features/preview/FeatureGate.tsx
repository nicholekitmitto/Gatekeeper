import type { FlagKey } from "../flags/FlagProvider";
import { useFlags } from "../flags/useFlags";

export function FeatureGate(props: {
  flag: FlagKey;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { flags } = useFlags();

  if (flags[props.flag]) {
    return <>{props.children}</>;
  }

  return <>{props.fallback ?? null}</>;
}