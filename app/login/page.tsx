'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // For now, simulate login success
    router.push('/dashboard');
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <input type="email" placeholder="Email" required className="p-3 rounded text-black" />
        <input type="password" placeholder="Password" required className="p-3 rounded text-black" />
        <button type="submit" className="p-3 bg-blue-600 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </main>
  );
}
