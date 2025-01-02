"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState(["Hello from Hellodeck!", "What's up?"]);
  const [newMessage, setNewMessage] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  }

  return (
    <main className="glass mx-4 rounded-2xl p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white animate-float">Messages</h1>
      <div className="space-y-4 max-h-[60vh] overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-bubble ${idx % 2 === 0 ? 'sent' : 'received'}`}
          >
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="mt-4 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-4 rounded-full bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          className="hover-3d glow px-6 py-4 rounded-full bg-blue-500 text-white font-medium"
        >
          Send
        </button>
      </form>
    </main>
  );
}
