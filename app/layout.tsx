// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'CineView',
  description: 'Simple movie app with dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
