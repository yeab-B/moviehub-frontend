'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className={`bg-gray-900 p-4 ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 bg-gray-700 p-2 rounded"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? 'Collapse' : 'Expand'}
        </button>
        <nav className="flex flex-col gap-4">
          <Link
            href="/dashboard/movies"
            className={pathname.startsWith('/dashboard/movies') ? 'font-bold' : ''}
          >
            Movies
          </Link>
          <Link
            href="/dashboard/settings"
            className={pathname === '/dashboard/settings' ? 'font-bold' : ''}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="flex justify-end items-center p-4 bg-gray-700 space-x-4">
          <button aria-label="Notifications" className="hover:text-yellow-300">🔔</button>
          <button aria-label="Profile" className="hover:text-yellow-300">👤</button>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 bg-gray-900">{children}</main>
      </div>
    </div>
  );
}
