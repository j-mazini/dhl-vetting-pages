'use client';

import { LandingHeader } from '@/landing/components/LandingHeader';
import { EnhancedHeroSection } from '@/landing/components/EnhancedHeroSection';
import { ServiceTabs } from '@/landing/components/ServiceTabs';
import { FleetSpotlight } from '@/landing/components/FleetSpotlight';
import { ContactForm } from '@/landing/components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <LandingHeader />
      <EnhancedHeroSection />
      <ServiceTabs />
      <FleetSpotlight />
      <ContactForm />
    </main>
  );
}
