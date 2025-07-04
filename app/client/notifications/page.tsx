"use client";

import { useRouter } from "next/navigation";

export default function NotificationsPage() {
  const router = useRouter();
  // Demo notifications
  const notifications = [
    {
      id: 1,
      message: "Your profile was updated successfully.",
      time: "2 min ago",
    },
    { id: 2, message: "New movie added to Trending.", time: "10 min ago" },
    { id: 3, message: "Password changed.", time: "1 hour ago" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-purple-900 to-purple-300 w-full h-full pt-20">
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">
          Notifications
        </h2>
        <ul className="space-y-4">
          {notifications.length === 0 ? (
            <li className="text-gray-500 text-center">No notifications.</li>
          ) : (
            notifications.map((n) => (
              <li
                key={n.id}
                className="bg-purple-100 rounded p-4 shadow flex flex-col"
              >
                <span className="text-gray-800">{n.message}</span>
                <span className="text-xs text-gray-500 mt-1 self-end">
                  {n.time}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
