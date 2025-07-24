// app/admin/movies/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { permissions } from '../../../../../data/permissions'; // assume this is your source

export default function PermissionListPage() {
  const [permissionList, setPermissionList] = useState(permissions);

  const handleDelete = (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this permission?');
    if (confirmed) {
      setPermissionList((prev) => prev.filter((perm) => perm.id !== id));
      // You would also send DELETE request to API here
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
          <tr className="bg-gray-800 text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {permissionList.map((permission) => (
            <tr key={permission.id} className="border-t">
              <td className="p-3">{permission.title}</td>
              <td className="p-3">{permission.description}</td>
              <td className="p-3 space-x-2">
                <Link
                  href={`/settings/permissions/${permission.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(permission.id)}
                  className="text-red-600 hover:underline"
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
