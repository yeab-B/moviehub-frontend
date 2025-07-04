'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-white bg-gradient-to-b from-[#D6C7AF] to-[#AB8BFF] w-full h-full relative">
      
      {/* Top nav buttons */}
      <div className="w-full p-4 flex justify-end space-x-4 absolute top-0 right-0 z-10">
        <button
          onClick={() => router.push('/login')}
          className="px-4 py-2 bg-white text-[#AB8BFF] font-semibold rounded hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/register')}
          className="px-4 py-2 bg-[#AB8BFF] text-white font-semibold rounded hover:bg-purple-700"
        >
          Register
        </button>
      </div>

      {/* Main content */}
      <div className="mt-24 flex flex-col items-center">
        <Image
          src="/movie-poster.png"
          alt="Movie Poster"
          width={500}
          height={750}
        />
        <h1 className="font-bold text-2xl text-center mt-6">
          Find{" "}
          <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
            Movies
          </span>{" "}
          You’ll Love Without the Hassle
        </h1>
      </div>
    </main>
  );
}
