
"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <section className="bg-white rounded-lg p-4 shadow-lg transition-all">
      <h2>Settings</h2>
      <div className="my-4">
        <label className="block mb-1">Profile Picture</label>
        <input type="file" accept="image/*" />
      </div>
      <div className="my-4">
        <label className="block mb-1">Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div className="my-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="ml-2">Dark Mode</span>
        </label>
      </div>
    </section>
  );
}