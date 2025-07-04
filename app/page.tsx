import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to MovieHub</h1>
      <p>Your one-stop solution for all movie-related information.</p>
      <Image
        src="/images/movie-poster.jpg"
        alt="Movie Poster"
        width={500}
        height={750}
      />
    </main>
  );
}
