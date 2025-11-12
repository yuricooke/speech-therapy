'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSubPage from '@/components/HeroSubPage';
import Breadcrumb from '@/components/Breadcrumb';
import TechDetails from '@/components/TechDetails';
import GridOverlay from '@/components/GridOverlay';
import { siteContent } from '@/utils/content';
import { Language } from '@/types';
import styles from './page.module.scss';

interface ClientPageProps {
  slug: string;
}

export default function ClientPage({ slug }: ClientPageProps) {
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  // Initialize with 'en' on both server and client to prevent hydration mismatch
  const [language, setLanguage] = useState<Language>('en');
  
  // Load language from localStorage after hydration
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage && ['en', 'pt', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  const toggleGrid = () => {
    setIsGridVisible(!isGridVisible);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  // Check if the slug exists for the current language
  const pageData = siteContent[language].pageContent[slug];
  
  if (!pageData) {
    return <div>Page not found</div>;
  }

  // Create customContent for the HeroSubPage
  const customContent = {
    tagline: pageData.hero.tagline,
    title: pageData.hero.title,
    description: pageData.hero.description,
    backgroundImage: pageData.hero.backgroundImage,
    imagePosition: pageData.hero.imagePosition, // Pass imagePosition if defined
    content: pageData.content
  };

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <Breadcrumb 
        language={language}
        items={[
          { label: pageData.hero.title }
        ]}
      />

      <HeroSubPage 
        language={language}
        customContent={customContent}
      />

      <Footer language={language} />

      {/* Control Buttons */}
      {/* 
      <div className={styles.controlButtons}>
        <button
          onClick={() => setShowTechDetails(true)}
          className={styles.controlButton}
          title="Technical Details"
        >
          ⚙️
        </button>
        <button
          onClick={toggleGrid}
          className={`${styles.controlButton} ${isGridVisible ? styles.active : ''}`}
          title={`${isGridVisible ? 'Hide' : 'Show'} Grid (Shift+G)`}
        >
          📐
        </button>
      </div>

      <TechDetails 
        isVisible={showTechDetails} 
        onClose={() => setShowTechDetails(false)} 
      />
        */}

      <GridOverlay isVisible={isGridVisible} onToggle={toggleGrid} />
    </>
  );
} 