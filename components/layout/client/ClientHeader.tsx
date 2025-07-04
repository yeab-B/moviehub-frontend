'use client';

import { useRouter } from 'next/navigation';

export default function ClientHeader() {
  const router = useRouter();

  return (
    <header className="w-full fixed top-0 z-50 px-6 py-4 bg-transparent flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">🎬 MovieMania</h1>
      <div className="flex gap-3">
        <button onClick={() => router.push('/notifications')} className="bg-white text-black p-2 rounded-full">
          🔔
        </button>
        <button onClick={() => router.push('/profile')} className="bg-white text-black p-2 rounded-full">
          👤
        </button>
      </div>
    </header>
  );
}
