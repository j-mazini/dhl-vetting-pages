import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vetting - DHL Vetting Tracker',
  description: 'Driver vetting and portal.',
};

export default function VettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
