'use client';

import { useRouter } from 'next/navigation';
import { permission } from 'process';
import { useState } from 'react';

export default function AddRolesPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', permission: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // System assigns rating later
    const roleWithDefaultPermission = { ...form, permission: 'read' }; // or null
    console.log('New role:', roleWithDefaultPermission);
    router.push('/admin/settings/roles');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Add New Role</h1>
      <input
        type="text"
        placeholder="Title"
        className="w-full px-4 py-2 border rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="w-full px-4 py-2 border rounded"
        value={form.permission}
        onChange={(e) => setForm({ ...form, permission: e.target.value })}
        required
      />
      <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Movie
      </button>
    </form>
  );
}
