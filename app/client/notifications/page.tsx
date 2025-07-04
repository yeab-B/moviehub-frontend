'use client';

import { X } from 'lucide-react';

interface NotificationPanelProps {
  onClose: () => void;
}

export default function NotificationPanel({ onClose }: NotificationPanelProps) {
  const notifications = [
    { id: 1, message: 'Your profile was updated successfully.', time: '2 min ago' },
    { id: 2, message: 'New movie added to Trending.', time: '10 min ago' },
    { id: 3, message: 'Password changed.', time: '1 hour ago' },
  ];

  return (
    <div className="fixed top-20 right-6 w-80 bg-white rounded-lg shadow-lg p-6 z-[9999] border border-gray-300">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition"
        aria-label="Close Notifications"
      >
        <X className="w-5 h-5" />
      </button>

      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Notifications</h2>
      <ul className="space-y-3 max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <li className="text-gray-500 text-center">No notifications.</li>
        ) : (
          notifications.map((n) => (
            <li
              key={n.id}
              className="bg-purple-100 rounded p-3 shadow-sm text-sm"
            >
              <p className="text-gray-800">{n.message}</p>
              <p className="text-xs text-gray-500 text-right mt-1">{n.time}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
