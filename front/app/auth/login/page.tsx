'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '../../../data/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert(`Welcome, ${matchedUser.role}!`);
      localStorage.setItem('role', matchedUser.role);

      if (matchedUser.role === 'admin') {
        router.push('../../admin');
      } else if (matchedUser.role === 'user') {
        router.push('../../client');
      } else {
        router.push('/');
      }
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
          <a href="/auth/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
