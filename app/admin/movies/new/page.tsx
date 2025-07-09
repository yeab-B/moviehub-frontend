// app/admin/movies/new/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddMoviePage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', category: '', rating: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You'd send a POST request here
    console.log('New movie:', form);
    router.push('/admin/movies');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Add New Movie</h1>
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
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <input
        type="number"
        step="0.1"
        placeholder="Rating"
        className="w-full px-4 py-2 border rounded"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Movie
      </button>
    </form>
  );
}
