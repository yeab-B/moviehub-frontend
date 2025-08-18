'use client';

import { X } from 'lucide-react';
import { notifications } from '../../../data/notification'; // adjust path accordingly

interface NotificationPanelProps {
  onClose: () => void;
}

export default function NotificationPanel({ onClose }: NotificationPanelProps) {

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
