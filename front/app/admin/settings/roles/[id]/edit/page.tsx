'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {roles  } from '../../../../../../data/roles';

export default function EditRolesPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: '', permission: '' });

  useEffect(() => {
    const role = roles.find((p) => p.id === id);
    if (role) {
      setForm({
        title: role.title,
        permission: role.permission,
      });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated role:', form);
    router.push('/admin/settings/roles');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit Role</h1>

      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        placeholder="Title"
      />

      <input
        type="text"
        value={form.permission}
        onChange={(e) => setForm({ ...form, permission: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        placeholder="Permission"
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
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Update Role
      </button>
    </form>
  );
}
