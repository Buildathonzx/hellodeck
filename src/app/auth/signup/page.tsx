
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    // ...call POST /api/auth/signup with credentials...
    router.push("/auth/signin");
  }

  return (
    <section className="glass mx-auto max-w-sm p-6 space-y-4 rounded-2xl">
      <h2 className="text-white text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </section>
  );
}