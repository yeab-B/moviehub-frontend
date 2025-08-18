'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHome() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/settings/permissions');
  }, [router]);

  return null; 
}
