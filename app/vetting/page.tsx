'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function VettingPage() {
  useEffect(() => {
    redirect('/vetting/login');
  }, []);

  return null;
}
