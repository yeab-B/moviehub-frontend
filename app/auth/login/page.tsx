'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Static dummy admin login
    const isAdmin = email === 'admin@gmail.com' && password === '2345';

    if (isAdmin) {
      alert('Welcome, Admin!');
      localStorage.setItem('role', 'admin'); // optional
      router.push('../../admin');
      return;
    }

    // Static dummy normal user login
    const isUser = email === 'user@gmail.com' && password === '123456';

    if (isUser) {
      alert('Login successful!');
      localStorage.setItem('role', 'user'); // optional
      router.push('../../client');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
        >
          Login
        </button>
        <p className="text-center text-sm mt-2">
          Don't have an account?{' '}
          <a href="/auth/registration" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
