"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  // Demo data, replace with real user data as needed
  const [show, setShow] = useState(true);
  const name = "John Doe";
  const email = "john@example.com";
  const imageUrl = "/movie-poster.png";

  if (!show) return null;

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 cursor-pointer"
        aria-hidden="true"
      />

      {/* Centered card */}
      <div className="fixed top-1/2 left-1/2 z-50 w-80 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-2xl p-6">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          aria-label="Close profile card"
        >
          &#x2715;
        </button>

        {/* Profile content */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
            <Image
              src={imageUrl}
              alt={`${name} profile`}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600 text-center break-words">{email}</p>
        </div>
      </div>
    </>
  );
}
