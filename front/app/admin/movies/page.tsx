// app/admin/movies/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { movies } from '../../../data/movies'; // assume this is your source

export default function MovieListPage() {
  const [movieList, setMovieList] = useState(movies);

  const handleDelete = (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this movie?');
    if (confirmed) {
      setMovieList((prev) => prev.filter((movie) => movie.id !== id));
      // You would also send DELETE request to API here
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Movie Management</h1>
        <Link
          href="/admin/movies/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Movie
        </Link>
      </div>

      <table className="w-full table-auto border-collapse bg-gray-600 shadow-sm rounded">
        <thead>
          <tr className="bg-gray-800 text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => (
            <tr key={movie.id} className="border-t">
              <td className="p-3">{movie.title}</td>
              <td className="p-3">{movie.category}</td>
              <td className="p-3">{movie.rating}</td>
              <td className="p-3 space-x-2">
                <Link
                  href={`/admin/movies/${movie.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
