import ClientLayout from '@/components/layout/client/ClientLayout'; // adjust path if needed

export const metadata = {
  title: 'MovieMania - Client',
  description: 'Browse your favorite movies.',
};

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
