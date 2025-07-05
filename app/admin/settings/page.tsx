// app/admin/settings/page.tsx
'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password changed to: ${password}`);
    // Normally, send POST or PUT to /api/update-password
  };

  return (
    <div className="max-w-lg space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

     
     

      {/* Change Password */}
      <form onSubmit={handlePasswordChange} className="space-y-4">
        <label className="block">
          <span className="text-gray-800 dark:text-gray-200">Change Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
