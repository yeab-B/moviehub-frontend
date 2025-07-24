'use client';

import Link from 'next/link';
import { useState } from 'react';
import { permissions } from '../../../../data/permissions';

export default function PermissionListPage() {
  const [permissionList, setPermissionList] = useState(permissions);

  const handleDelete = (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this permission?');
    if (confirmed) {
      setPermissionList((prev) => prev.filter((perm) => perm.id !== id));
      // TODO: call API to delete from backend if needed
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Permission Management</h1>
        <Link
          href="/settings/permissions/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Permission
        </Link>
      </div>

      <table className="w-full table-auto border-collapse bg-gray-600 shadow-sm rounded">
        <thead>
          <tr className="bg-gray-800 text-left text-white">
            <th className="p-3">Title</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissionList.map((permission) => (
            <tr key={permission.id} className="border-t border-gray-300">
              <td className="p-3 text-white">{permission.title}</td>
              <td className="p-3 text-white">{permission.description}</td>
              <td className="p-3 space-x-2">
                <Link
                  href={`/settings/permissions/${permission.id}/edit`}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(permission.id)}
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
