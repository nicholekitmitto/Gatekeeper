import { ChatWidget } from "./ChatWidget";
import { FakeDashboard } from "./FakeDashboard";
import { Card } from "../../components/Card";
import { FlagProvider } from "../flags/FlagProvider";

export default function Preview() {
  return (
    <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
      <FlagProvider>
        <Card title="Current UI (flags off)">
          <FakeDashboard />
          <ChatWidget />
        </Card>
      </FlagProvider>
      <Card title="New UI (flags on)">
        <FakeDashboard />
        <ChatWidget />
      </Card>
    </div>
  );
}
