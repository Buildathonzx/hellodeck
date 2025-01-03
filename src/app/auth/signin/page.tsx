"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    // ...call POST /api/auth/signin with credentials...
    document.cookie = "loggedIn=true; path=/;"; // simplistic example
    router.push("/");
  }

  return (
    <section className="glass mx-auto max-w-sm p-6 space-y-4 rounded-2xl">
      <h2 className="text-white text-2xl font-bold">Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
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
          Sign In
        </button>
      </form>
      <button
        onClick={() => alert("GitHub sign in placeholder")}
        className="bg-white/10 w-full text-white p-2 rounded mt-2"
      >
        Sign In with GitHub
      </button>
      <button
        onClick={() => alert("Connect wallet placeholder")}
        className="bg-white/10 w-full text-white p-2 rounded mt-2"
      >
        Connect Wallet
      </button>
    </section>
  );
}