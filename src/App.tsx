import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoFeatures } from './components/BentoFeatures';
import { AppScreenshotsGallery } from './components/AppScreenshotsGallery';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { DownloadCenterModal } from './components/DownloadCenterModal';
import { ReleaseModal } from './components/ReleaseModal';

export function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isReleaseModalOpen, setIsReleaseModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary selection:text-white">
      {/* Navigation Bar with v1.2.0 Announcement */}
      <Navbar
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenReleaseModal={() => setIsReleaseModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenQrModal={() => setIsDownloadOpen(true)}
          onOpenReleaseModal={() => setIsReleaseModalOpen(true)}
        />

        <BentoFeatures
          onOpenReleaseModal={() => setIsReleaseModalOpen(true)}
        />

        {/* Real Screenshots Showcase Gallery */}
        <AppScreenshotsGallery />

        {/* About & Mentors Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Modals */}
      <ReleaseModal
        isOpen={isReleaseModalOpen}
        onClose={() => setIsReleaseModalOpen(false)}
      />

      <DownloadCenterModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}

export default App;
