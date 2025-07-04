import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/BG.png')",
      }}
    >
      <Image
        src="/movie-poster.png"
        alt="Movie Poster"
        width={500}
        height={750}
      />
      <p className="font-bold text-2xl text-center mt-6">
        Find{" "}
        <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
          Movies
        </span>{" "}
        You’ll Love Without the Hassle
      </p>
    </main>
  );
}
