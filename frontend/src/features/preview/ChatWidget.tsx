import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { FeatureGate } from "./FeatureGate";
import "../../styles/ChatWidget.css";

function ChatPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="chat-panel">
      <div className="chat-panel-header">
        <span>Live Chat</span>
        <button className="chat-close" onClick={onClose} aria-label="Close chat">
          <X size={12} />
        </button>
      </div>
      <div className="chat-messages">
        <div className="chat-msg">Hello! How can we help you today?</div>
        <div className="chat-msg-time">Just now</div>
      </div>
      <div className="chat-input-area">
        <input className="chat-input" placeholder="Type a message..." readOnly />
        <button className="chat-send" aria-label="Send message">
          <Send size={10} />
        </button>
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <FeatureGate flag="chatWidget">
      <div className="chat-widget">
        {open && <ChatPanel onClose={() => setOpen(false)} />}
        <button
          className="chat-bubble"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open chat"
        >
          <MessageCircle size={18} />
        </button>
      </div>
    </FeatureGate>
  );
}
