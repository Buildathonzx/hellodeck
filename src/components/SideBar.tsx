
"use client";
import Link from "next/link";

export default function SideBar() {
  return (
    <nav className="bg-white shadow-lg p-4 w-64 min-h-screen">
      <h3 className="font-bold mb-4">Folders</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/chat/user123">User Chat</Link>
        </li>
        <li>
          <Link href="/chat/group123">Group Chat</Link>
        </li>
      </ul>
      <hr className="my-4" />
      <Link href="/settings" className="text-blue-600 underline">
        Settings
      </Link>
    </nav>
  );
}