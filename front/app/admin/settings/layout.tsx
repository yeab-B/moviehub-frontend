'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin/settings/permissions', label: 'Permissions' },
  { href: '/admin/settings/roles', label: 'Roles' },
  { href: '/admin/settings/security', label: 'Security' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-600 p-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex">
        {/* Inner Sidebar */}
        <aside className="w-48 bg-gray-700 text-white p-4 space-y-4">
          <h2 className="text-lg font-semibold">Settings</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded hover:bg-gray-600 ${
                  pathname.startsWith(item.href) ? 'bg-gray-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 text-gray-900 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
}
