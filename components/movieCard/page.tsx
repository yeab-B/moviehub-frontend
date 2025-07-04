// components/MovieCard.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MovieCard({ movie }: { movie: any }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
      >
        <Image
          src={movie.coverImage}
          alt={movie.title}
          width={180}
          height={270}
          className="w-full h-[270px] object-cover"
        />
        <div className="p-2">
          <h3 className="font-bold text-lg">{movie.title}</h3>
          <p className="text-sm text-gray-700">{movie.category} • {movie.year}</p>
          <p className="text-sm text-yellow-500">⭐ {movie.rating}</p>
        </div>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg text-black"
          >
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{movie.category} • {movie.year} • ⭐ {movie.rating}</p>
            <Image
              src={movie.coverImage}
              alt={movie.title}
              width={400}
              height={600}
              className="w-full h-auto rounded mb-4"
            />
            <p className="mb-4">{movie.description}</p>
            <a
              href={movie.videoUrl}
              target="_blank"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Watch Trailer
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="ml-4 inline-block text-sm text-gray-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
