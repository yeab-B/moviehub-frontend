"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { profile } from "../../../data/profile"; 

interface ProfilePanelProps {
  onClose: () => void;
}

export default function ProfilePanel({ onClose }: ProfilePanelProps) {
  const { name, email, imageUrl } = profile;

  return (
    <div className="fixed top-20 right-6 w-80 bg-white rounded-lg shadow-lg p-6 z-[9999] border border-gray-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition"
        aria-label="Close profile"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Profile</h2>

      {/* Profile Image */}
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

        {/* Name & Email */}
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-center break-words">{email}</p>
      </div>
    </div>
  );
}
