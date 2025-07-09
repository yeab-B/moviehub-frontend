'use client';

import { useState, useEffect } from 'react';
import apiClient from '../lib/apiClient';

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('Test User');
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // On component mount, try to get current user info
  useEffect(() => {
    apiClient.get('/sanctum/csrf-cookie').then(() => {
      apiClient.get('/api/user')
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => {
          setUser(null);
        });
    });
  }, []);

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    apiClient.get('/sanctum/csrf-cookie')
      .then(() => {
        if (isRegistering) {
          return apiClient.post('/api/register', {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
          });
        } else {
          return apiClient.post('/api/login', {
            email,
            password,
          });
        }
      })
      .then((response) => {
        setUser(response.data.user);
        setError('');
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.message || 'Something went wrong.');
        } else {
          setError('Network error. Please try again.');
        }
      });
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      {!user && (
        <>
          <h2 className="text-xl font-semibold mb-4">{isRegistering ? 'Register' : 'Login'}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-600">{error}</p>}

            {isRegistering && (
              <label className="block">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-2 py-1"
                  required
                />
              </label>
            )}

            <label className="block">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-2 py-1"
                required
              />
            </label>

            <label className="block">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-2 py-1"
                required
              />
            </label>

            {isRegistering && (
              <label className="block">
                Confirm Password:
                <input
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-full border px-2 py-1"
                  required
                />
              </label>
            )}

            <button
              type="submit"
              className=" text-black px-4 py-2 w-full"
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>

            <button
              type="button"
              onClick={toggleMode}
              className="text-blue-600 underline mt-2 block text-center w-full"
            >
              {isRegistering
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </button>
          </form>
        </>
      )}

      {user && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Profile Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button
            onClick={() => {
              apiClient.post('/api/logout').then(() => {
                setUser(null);
              });
            }}
            className="mt-4 bg-red-600 text-white px-4 py-2"
          >
            Logout
          </button>
        </div>
        
      )}
    </div>
  );
}
