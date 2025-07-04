"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ClientPages() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-white bg-gradient-to-b from-[#020730] to-[#a287e7] w-full h-full relative">
      {/* Top nav buttons */}
      <div className="w-full p-4 flex justify-end space-x-4 absolute top-0 right-0 z-10">
        {/* Notification Button */}
        <button
          onClick={() => router.push("/notifications")}
          className="p-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
          title="Notifications"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 24c1.326 0 2.402-1.075 2.402-2.402h-4.804C9.598 22.925 10.674 24 12 24zM18.291 17.362V11.51c0-3.126-2.071-5.76-5.062-6.508V4.086c0-.733-.598-1.33-1.33-1.33s-1.33.597-1.33 1.33v.916c-2.991.748-5.062 3.382-5.062 6.508v5.852L4 19.055v.528h16v-.528l-1.709-1.693z" />
          </svg>
        </button>

        {/* Profile Button */}
        <button
          onClick={() => router.push("/profile")}
          className="p-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
          title="Profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.88-2.18 4.88-4.88S14.7 2.24 12 2.24 7.12 4.42 7.12 7.12 9.3 12 12 12zm0 2.16c-2.63 0-7.88 1.32-7.88 3.96v1.2c0 .66.54 1.2 1.2 1.2h13.36c.66 0 1.2-.54 1.2-1.2v-1.2c0-2.64-5.25-3.96-7.88-3.96z" />
          </svg>
        </button>
      </div>
      {/* Search Bar */}
      <div className="w-full px-6 mt-14 sm:mt-28 md:mt-32 flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 rounded-md bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Main content */}
      <div className="mt-24 flex flex-col items-center">
        <Image
          src="/movie-poster.png"
          alt="Movie Poster"
          width={400}
          height={550}
        />
        <h1 className="font-bold text-6xl text-center mt-6">
          Find{" "}
          <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
            Movies
          </span>{" "}
          You’ll Love <br />
          Without the Hassle
        </h1>
      </div>

      {/* Trending Movies Section */}
      <section className="w-full px-8 mt-16">
        <h2 className="text-2xl font-bold mb-4 text-white">Trending Now</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 animate-scroll-x">
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
            {/* Duplicate for infinite loop effect */}
            {[...Array(10)].map((_, index) => (
              <div
                key={`loop-${index}`}
                className="min-w-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md opacity-60"
              >
                <Image
                  src="/movie-poster.png"
                  alt={`Movie loop ${index + 1}`}
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
          {/* Custom CSS for animation */}
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

      {/* Popular Movies Grid */}
      <section className="w-full px-4 sm:px-8 mt-12 mb-20">
        <h2 className="text-2xl font-bold mb-4 text-white">Popular Movies</h2>
        <div className="pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
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
