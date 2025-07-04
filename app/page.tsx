import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <main>
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
      <div className="space-x-4 mt-8">
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/register")}
          className="px-6 py-3 bg-green-600 rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </main>
  );
}
