// app/admin/layout.tsx
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-44 bg-gray-500 text-white p-4 space-y-8">

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded hover:bg-gray-800 ${
                pathname.startsWith(item.href) ? 'bg-gray-600' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 bg-gray-100 p-6 dark:bg-gray-800 text-gray-900 dark:text-white">
        {children}
      </main>
    </div>
  );
}
