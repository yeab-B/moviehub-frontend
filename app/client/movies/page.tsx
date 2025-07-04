"use client";

import { useState } from "react";
import Image from "next/image";
import MovieCard from "../../../components/movieCard/page"; // Adjust if needed

const movies = [
  {
    id: "1",
    title: "Inception",
    description: "A thief steals corporate secrets through dream-sharing.",
    coverImage: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    category: "Sci-Fi",
    year: 2010,
    rating: 8.8,
  },
  {
    id: "5",
    title: "The Matrix",
    description: "A hacker learns about the true nature of his reality.",
    coverImage: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    category: "Sci-Fi",
    year: 1999,
    rating: 8.7,
  },
  {
    id: "7",
    title: "Avengers: Endgame",
    description: "The Avengers assemble to undo Thanos’s actions.",
    coverImage:
      "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    category: "Superhero",
    year: 2019,
    rating: 8.4,
  },
  {
    id: "8",
    title: "Titanic",
    description:
      "A love story unfolds during the tragic sinking of the RMS Titanic.",
    coverImage:
      "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    category: "Romance",
    year: 1997,
    rating: 7.9,
  },
  {
    id: "9",
    title: "Pulp Fiction",
    description: "Interwoven stories of crime and redemption in Los Angeles.",
    coverImage:
      "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    category: "Crime",
    year: 1994,
    rating: 8.9,
  },
  {
    id: "12",
    title: "Fight Club",
    description: "A depressed man forms an underground fight club.",
    coverImage:
      "https://m.media-amazon.com/images/I/81D+KJkO4SL._AC_SL1500_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
    category: "Drama",
    year: 1999,
    rating: 8.8,
  },
  {
    id: "13",
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his son.",
    coverImage: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=sY1S34973zA",
    category: "Crime",
    year: 1972,
    rating: 9.2,
  },
  {
    id: "14",
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over years, finding redemption.",
    coverImage: "https://m.media-amazon.com/images/I/51NiGlapXlL.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    category: "Drama",
    year: 1994,
    rating: 9.3,
  },
  {
    id: "15",
    title: "Toy Story",
    description: "A cowboy doll is threatened by a new spaceman toy.",
    coverImage:
      "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_SY679_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=KYz2wyBy3kc",
    category: "Animation",
    year: 1995,
    rating: 8.3,
  },
];

export default function MoviesSection() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((m) => m.category === selectedGenre);

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
                  height={200}
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
      </section>
    </>
  );
}
