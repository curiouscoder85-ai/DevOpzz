'use client';

import dynamic from 'next/dynamic';
import DeveloperSection from '@/components/developer-section';
import ArtistSection from '@/components/artist-section';
import ContactSection from '@/components/contact-section';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ThreeBackground = dynamic(() => import('@/components/three-background'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <ThreeBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <DeveloperSection />
            <ArtistSection />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
