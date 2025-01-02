"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <section className="glass mx-2 lg:mx-4 rounded-2xl p-4 lg:p-6">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Settings</h2>
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <label className="block mb-2 text-white">Profile Picture</label>
          <input type="file" accept="image/*" className="text-white" />
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <label className="block mb-2 text-white">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/20 text-white"
          />
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="mr-2"
            />
            Dark Mode
          </label>
        </div>
      </div>
    </section>
  );
}