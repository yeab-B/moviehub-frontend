'use client';

import { useRouter } from 'next/navigation';
import { Bell, User, Clapperboard } from 'lucide-react'; // Lucide icons
import { useState } from 'react';
import NotificationPanel from '@/app/client/notifications/page';
import ProfilePage from '@/app/client/profile/page';

export default function ClientHeader() {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50 px-6 py-4 bg-transparent flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Clapperboard className="w-6 h-6 text-white" />
        <h1 className="text-white font-bold text-xl">MovieMania</h1>
      </div>
      <div className="flex gap-3">
         <button
            onClick={() => setShowNotifications(true)}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
        <button
          onClick={() => setShowProfile(true)}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
          title="Profile"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
      {showNotifications && (
        <NotificationPanel onClose={() => setShowNotifications(false)} />
      )}
      {showProfile&&(
        <ProfilePage onClose={() => setShowProfile(false)} />
      )}
    </header>
  );
}
