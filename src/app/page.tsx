"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [featuredServers] = useState([
    { id: "1", name: "hellodeck", description: "Official Hellodeck Community" },
    { id: "2", name: "developers", description: "Developer Discussion" },
    { id: "3", name: "bugs", description: "Bug Reports & Issues" },
  ]);

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Hero Section */}
      <section className="glass rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-4 animate-float">
          Welcome to Hellodeck
        </h1>
        <p className="text-white/80">
          Join our growing community of developers and users
        </p>
      </section>

      {/* Featured Servers */}
      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Featured Servers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServers.map((server) => (
            <Link
              key={server.id}
              href={`/s/${server.name}`}
              className="hover-3d block p-4 rounded-xl bg-white/10 
                hover:bg-white/20 transition-all"
            >
              <h3 className="text-lg font-semibold text-white">
                #{server.name}
              </h3>
              <p className="text-white/70 text-sm">{server.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Server Search */}
      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Find Servers</h2>
        <div className="relative">
          <input
            type="search"
            placeholder="Search servers..."
            className="w-full p-4 rounded-xl bg-white/10 text-white 
              placeholder:text-white/50 focus:outline-none focus:ring-2 
              focus:ring-blue-500 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2
            hover:bg-white/10 p-2 rounded-lg transition-all">
            🔍
          </button>
        </div>
      </section>
    </main>
  );
}
