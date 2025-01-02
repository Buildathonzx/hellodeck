"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const router = useRouter();
  const params = useParams();
  const [chatType, setChatType] = useState<"user" | "group">("user");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Determine chat type from ID prefix
    const id = params.id as string;
    if (id.startsWith("g-")) {
      setChatType("group");
      setMessages(["Welcome to the group!", "Hello everyone!"]);
    } else {
      setChatType("user");
      setMessages(["Hi there!", "How's your day?"]);
    }
  }, [params.id]);

  const [newMsg, setNewMsg] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (newMsg) {
      setMessages([...messages, newMsg]);
      setNewMsg("");
    }
  }

  return (
    <section className="glass mx-2 lg:mx-4 rounded-2xl p-4 lg:p-6 space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
        >
          ←
        </button>
        <h2 className="text-xl lg:text-2xl font-bold text-white">
          {chatType === "group" ? "Group Chat" : "Private Chat"}
        </h2>
      </div>

      <div className="space-y-4 max-h-[70vh] lg:max-h-[60vh] overflow-y-auto p-2 lg:p-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-bubble ${idx % 2 === 0 ? "sent" : "received"}`}
          >
            {msg}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="mt-4 flex flex-col lg:flex-row gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type message..."
          className="flex-1 p-3 lg:p-4 rounded-full bg-white/10 text-white 
            placeholder:text-white/50 focus:outline-none focus:ring-2 
            focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          className="hover-3d glow px-4 py-3 lg:px-6 lg:py-4 rounded-full 
            bg-blue-500 text-white font-medium w-full lg:w-auto"
        >
          Send
        </button>
      </form>
    </section>
  );
}
