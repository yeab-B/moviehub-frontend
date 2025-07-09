'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { movies } from '../../../../../data/movies';

export default function EditMoviePage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: '', category: '', rating: '' });

  useEffect(() => {
    const movie = movies.find((m) => m.id === id);
    if (movie) setForm({ title: movie.title, category: movie.category, rating: String(movie.rating) });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated movie:', form);
    router.push('/admin/movies');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit Movie</h1>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="number"
        step="0.1"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
        className="w-full px-4 py-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Update Movie
      </button>
    </form>
  );
}
