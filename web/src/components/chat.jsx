"use client";

import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";

export default function ChatRoom() {
  const { isConnected, emit, on } = useSocket();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const off = on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return off;
  }, [on]);

  const sendMessage = () => {
    if (!text.trim()) return;
    emit("message", text);
    setText("");
  };

  return (
    <div>
      <p>Status: {isConnected ? "🟢 connected" : "🔴 disconnected"}</p>

      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} disabled={!isConnected}>
        Send
      </button>
    </div>
  );
}