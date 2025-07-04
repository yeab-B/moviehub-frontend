'use client';

import { useRouter } from 'next/navigation';
import { Bell, User, Clapperboard } from 'lucide-react'; // Lucide icons

export default function ClientHeader() {
  const router = useRouter();

  return (
    <header className="w-full fixed top-0 z-50 px-6 py-4 bg-transparent flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Clapperboard className="w-6 h-6 text-white" />
        <h1 className="text-white font-bold text-xl">MovieMania</h1>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => router.push('client/notifications')}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          onClick={() => router.push('/client/profile')}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
          title="Profile"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
