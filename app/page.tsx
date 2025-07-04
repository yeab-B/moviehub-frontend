'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import NavButton from '../components/ui/Button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-white bg-gradient-to-b from-[#020730] to-[#a287e7] w-full h-full relative">
      
      {/* Top nav buttons */}
      <div className="w-full p-4 flex justify-end space-x-4 absolute top-0 right-0 z-10">
        <NavButton onClick={() => router.push('/auth/login')}>Login</NavButton>
        <NavButton onClick={() => router.push('/auth/register')} className="bg-green-600 hover:bg-green-700">
          Register
        </NavButton>
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

      {/* Trending Movies Section */}
      <section className="w-full px-8 mt-16">
        <h2 className="text-2xl font-bold mb-4 text-white">Trending Now</h2>
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
      <section className="w-full px-4 sm:px-8 mt-12 mb-20">
  <h2 className="text-2xl font-bold mb-4 text-white">Popular Movies</h2>

  {/* MOBILE: flex scroll | DESKTOP: grid */}
  <div className="overflow-x-auto pb-4 scrollbar-hide">
    <div className="flex space-x-4 w-max lg:grid lg:grid-cols-4 lg:gap-6 lg:space-x-0 lg:w-full">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="min-w-[180px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md"
        >
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
  </div>
</section>

    </main>
  );
}
