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
    <main className="bg-white rounded-lg p-4 shadow-lg transition-all">
      <h1>Hellodeck</h1>
      <ul className="space-y-2 mt-2">
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <form className="mt-4" onSubmit={handleSend}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type message..."
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Send
        </button>
      </form>
    </main>
  );
}
