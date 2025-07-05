import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#020730] to-[#a287e7]">
      <ClientHeader />
      <main className="flex-grow pt-20 px-4 sm:px-8">{children}</main>
      <ClientFooter />
    </div>
  );
}
