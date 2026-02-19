'use client';

import React, { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-4
        text-sm font-semibold
        bg-purple-600
        text-white
        rounded-2xl
        hover:bg-purple-700
        hover:shadow-xl
        hover:scale-105
        active:scale-100
        transition-all duration-300 ease-in-out
        shadow-md
        ${className}
      `}
    >
      {children}
    </button>
  );
}
