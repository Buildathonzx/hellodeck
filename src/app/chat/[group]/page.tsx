"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GroupChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState(["Welcome to the group!", "Hello everyone!"]);
  const [newMsg, setNewMsg] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (newMsg) {
      setMessages([...messages, newMsg]);
      setNewMsg("");
    }
  }

  return (
    <section className="bg-white rounded-lg p-4 shadow-lg transition-all">
      <button onClick={() => router.back()} className="text-blue-600 underline mb-2">
        Back
      </button>
      <h2>Group Chat</h2>
      <ul className="space-y-2 mt-2">
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <form className="mt-4" onSubmit={handleSend}>
        {/* ...existing code for input/button styling... */}
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          /* ...existing code... */
        />
        <button type="submit" /* ...existing code... */>
          Send
        </button>
      </form>
    </section>
  );
}
