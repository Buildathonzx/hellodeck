"use client";
import Link from "next/link";

export default function SideBar() {
  return (
    <nav className="glass text-white w-64 min-h-screen p-6 space-y-6">
      <h3 className="text-xl font-bold animate-float">Hellodeck</h3>
      <ul className="space-y-4">
        {[
          { href: "/", label: "🏠 Home" },
          { href: "/chat/user123", label: "👤 User Chat" },
          { href: "/chat/group123", label: "👥 Group Chat" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/settings"
        className="hover-3d glow block p-3 rounded-lg bg-blue-500/50 hover:bg-blue-500/70 transition-all mt-auto"
      >
        ⚙️ Settings
      </Link>
    </nav>
  );
}