'use client';

import Image from "next/image";
import { useState } from "react";

export default function ClientHomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  return (
    <>
      {/* Search Bar */}
      <div className="w-full px-6 mt-6 sm:mt-12 flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 rounded-md bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Banner */}
      <div className="mt-12 flex flex-col items-center">
        <Image src="/movie-poster.png" alt="Movie Poster" width={400} height={550} />
       <h1 className="font-bold text-6xl text-center mt-6 text-white">
  Find{" "}
  <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
    Movies
  </span>{" "}
  You’ll Love <br />Without the Hassle
</h1>

      </div>

      {/* Genre Filter */}
      <div className="w-full px-6 sm:px-14 mt-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance'].map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                selectedGenre === genre
                  ? 'bg-white text-black shadow'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Movies */}
      <section className="w-full px-8 mt-16">
        <h2 className="text-3xl font-bold mb-4 text-white ml-14">Trending Now</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/movie-poster.png"
                alt={`Movie ${index + 1}`}
                width={200}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Popular Movies */}
      <section className="w-full px-4 sm:px-8 mt-12 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-white ml-14">Popular Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/movie-poster.png"
                alt={`Popular Movie ${index + 1}`}
                width={180}
                height={270}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
