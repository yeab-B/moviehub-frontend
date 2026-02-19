'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";  // import useRouter
import MovieCard from "../../../components/movieCard/page"; // Adjust if needed
import { movies } from "../../../data/movies"; // ✅ Import from external file

export default function MoviesSection() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const router = useRouter();  // initialize router

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((m) => m.category === selectedGenre);

  const handleMoreOptions = () => {
    router.push('client/dashboard');  // adjust path if needed
  };

  return (
    <>
      {/* Genre Filter */}
      <div className="w-full px-6 sm:px-14 mt-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {[
            "All",
            "Sci-Fi",
            "Drama",
            "Romance",
            "Crime",
            "Superhero",
            "Animation",
          ].map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                selectedGenre === genre
                  ? "bg-white text-black shadow"
                  : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Scrolling Row */}
      <section className="w-full px-8 mt-16 overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-white ml-14">
          Trending Now
        </h2>
        <div className="relative">
          <div className="flex space-x-4 pb-4 w-max animate-scroll-x">
            {filteredMovies.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                className="min-w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md relative transition-transform duration-300 hover:scale-150 hover:z-20"
              >
                <Image
                  src={movie.coverImage}
                  alt={movie.title}
                  width={90}
                  height={50}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}

            {filteredMovies.slice(0, 10).map((movie) => (
              <div
                key={`loop-${movie.id}`}
                className="min-w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md relative opacity-60"
              >
                <Image
                  src={movie.coverImage}
                  alt={movie.title}
                  width={90}
                  height={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes scroll-x {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-x {
              animation: scroll-x 30s linear infinite;
              display: flex;
              width: max-content;
            }
          `}</style>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="w-full px-4 sm:px-8 mt-12 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-white ml-14">
          Popular Movies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* More Options Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleMoreOptions}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition"
          >
            More Options
          </button>
        </div>
      </section>
    </>
  );
}
