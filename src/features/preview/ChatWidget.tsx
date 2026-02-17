import { FeatureGate } from "./FeatureGate";

export function ChatWidget() {
    return (
        <FeatureGate flag="chatWidget">
            <div style={{ marginTop: 12 }}>Live Chat Widget</div>
        </FeatureGate>
    )
}