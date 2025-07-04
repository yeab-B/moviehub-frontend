'use client';

import Image from "next/image";
import { useState } from "react";
import MoviesSection from "./movies/page";



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

  <MoviesSection/>

    </>
  );
}
