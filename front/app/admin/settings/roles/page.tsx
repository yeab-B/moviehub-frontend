'use client';

import Link from 'next/link';
import { useState } from 'react';
import { roles } from '../../../../data/roles';

export default function RoleListPage() {
  const [roleList, setRoleList] = useState(roles);

  const handleDelete = (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this role?');
    if (confirmed) {
      setRoleList((prev) => prev.filter((role) => role.id !== id));
      // TODO: call API to delete from backend if needed
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Role Management</h1>
        <Link
          href="/admin/settings/roles/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Role
        </Link>
      </div>

      <table className="w-full table-auto border-collapse bg-gray-600 shadow-sm rounded">
        <thead>
          <tr className="bg-gray-800 text-left text-white">
            <th className="p-3">Title</th>
            <th className="p-3">Permission</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.id} className="border-t border-gray-300">
              <td className="p-3 text-white">{role.title}</td>
              <td className="p-3 text-white">{role.permission}</td>
              <td className="p-3 space-x-2">
                <Link
                  href={`/admin/settings/roles/${role.id}/edit`}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(role.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
