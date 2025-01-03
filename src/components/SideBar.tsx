"use client";
import Link from "next/link";
import { useState } from "react";

export default function SideBar({ onClose }: { onClose?: () => void }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogout() {
    // ...logout logic...
    document.cookie = "loggedIn=false; path=/;"
    setLoggedIn(false);
    onClose?.();
  }

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
        <li>
          <Link
            href="/"
            className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            onClick={onClose}
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link
            href={loggedIn ? "/chat/u-alice" : "/auth/signin"}
            className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            onClick={onClose}
          >
            👤 Chat
          </Link>
        </li>
        <li>
          <Link
            href={loggedIn ? "/chat/g-general" : "/auth/signin"}
            className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            onClick={onClose}
          >
            👥 Group
          </Link>
        </li>
      </ul>
      <div className="mt-auto space-y-2">
        {loggedIn ? (
          <>
            <Link
              href="/settings"
              className="hover-3d glow block p-3 rounded-lg bg-blue-500/50 hover:bg-blue-500/70 transition-all"
              onClick={onClose}
            >
              ⚙️ Settings
            </Link>
            <button
              onClick={handleLogout}
              className="hover-3d block p-3 rounded-lg bg-red-500/50 hover:bg-red-500/70 transition-all w-full text-left"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="hover-3d glow block p-3 rounded-lg bg-blue-500/50 hover:bg-blue-500/70 transition-all"
              onClick={onClose}
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="hover-3d block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              onClick={onClose}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}