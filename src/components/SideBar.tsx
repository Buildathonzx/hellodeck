"use client";
import Link from "next/link";

export default function SideBar({ onClose }: { onClose?: () => void }) {
  return (
    <nav className="glass text-white w-full lg:w-64 h-full p-6 space-y-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold animate-float">Hellodeck</h3>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-white/20 rounded"
        >
          ✕
        </button>
      </div>
      <ul className="space-y-4">
        {[
          { href: "/", label: "🏠 Home" },
          { href: "/chat/u-alice", label: "👤 Chat with Alice" },
          { href: "/chat/g-general", label: "👥 General Group" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              onClick={onClose}
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