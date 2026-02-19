// app/admin/dashboard/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Overview Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          { title: 'Total Movies', count: 15 },
          { title: 'Registered Users', count: 92 },
          { title: 'Trending Today', count: 4 },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-4xl font-bold text-indigo-600">{stat.count}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
