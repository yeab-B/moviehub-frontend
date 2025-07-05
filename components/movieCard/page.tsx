'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function MovieCard({ movie }: { movie: any }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Movie Card */}
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
          <p className="text-sm text-gray-700">
            {movie.category} • {movie.year}
          </p>
          <p className="text-sm text-yellow-500">⭐ {movie.rating}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg relative text-black"
          >
            {/* Close Icon */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Movie Info */}
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm text-gray-700 mb-2">
              {movie.category} • {movie.year} • ⭐ {movie.rating}
            </p>
            <Image
              src={movie.coverImage}
              alt={movie.title}
              width={400}
              height={600}
              className="w-full h-auto rounded mb-4"
            />
            <p className="mb-6">{movie.description}</p>

            {/* Trailer Link */}
            <a
              href={movie.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-md font-medium shadow hover:from-purple-600 hover:to-purple-800 transition"
            >
              🎬 Watch Trailer
            </a>

            {/* Close Link */}
            <button
              onClick={() => setShowModal(false)}
              className="ml-4 text-sm text-purple-700 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
