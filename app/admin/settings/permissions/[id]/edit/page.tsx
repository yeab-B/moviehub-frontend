'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { permissions } from '../../../../../../data/permissions';

export default function EditPermissionPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    const permission = permissions.find((p) => p.id === id);
    if (permission) {
      setForm({
        title: permission.title,
        description: permission.description,
      });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated permission:', form);
    router.push('/settings/permissions');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit Permission</h1>

      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        placeholder="Title"
      />

      <input
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        placeholder="Description"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Update Permission
      </button>
    </form>
  );
}
