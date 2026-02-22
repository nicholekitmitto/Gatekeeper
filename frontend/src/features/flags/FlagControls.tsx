import { useFlags } from "./useFlags";

export default function FlagControls() {
  const { flags, toggleFlag } = useFlags();

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label>
        <input
          type="checkbox"
          checked={flags.newDashboard}
          onChange={() => toggleFlag("newDashboard")}
        />
        New Dashboard
      </label>
      <label>
        <input
          type="checkbox"
          checked={flags.chatWidget}
          onChange={() => toggleFlag("chatWidget")}
        />
        Chat Widget
      </label>
    </div>
  );
}