'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddRolesPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const roleWithDefaultPermission = { ...form, permission: 'read' };
    console.log('New role:', roleWithDefaultPermission);
    router.push('/admin/settings/permissions');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Add New Permission</h1>

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
        placeholder="Description"
        className="w-full px-4 py-2 border rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />

      <div className="flex gap-4">
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
          Save Permission
        </button>
      </div>
    </form>
  );
}
