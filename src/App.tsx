import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoFeatures } from './components/BentoFeatures';
import { AppScreenshotsGallery } from './components/AppScreenshotsGallery';
import { InteractiveTasbihPreview } from './components/InteractiveTasbihPreview';
import { AudioLiturgyDemo } from './components/AudioLiturgyDemo';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { DownloadCenterModal } from './components/DownloadCenterModal';
import { OfflineTechSpecModal } from './components/OfflineTechSpecModal';

export function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isTechSpecOpen, setIsTechSpecOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="min-h-screen bg-canvas-dark text-slate-100 font-sans selection:bg-merah-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenDownload={() => setIsDownloadOpen(true)}
        isPlayingAudio={isPlayingAudio}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenQrModal={() => setIsDownloadOpen(true)}
        />

        <BentoFeatures
          onOpenTechSpec={() => setIsTechSpecOpen(true)}
        />

        {/* Real Screenshots Showcase Gallery */}
        <AppScreenshotsGallery />

        <InteractiveTasbihPreview />

        <AudioLiturgyDemo
          onPlayStateChange={setIsPlayingAudio}
        />

        {/* About & Mentors Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Modals */}
      <DownloadCenterModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      <OfflineTechSpecModal
        isOpen={isTechSpecOpen}
        onClose={() => setIsTechSpecOpen(false)}
      />
    </div>
  );
}

export default App;
