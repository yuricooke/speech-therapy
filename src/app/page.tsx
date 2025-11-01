'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Products from '@/components/Products';
import About from '@/components/About';
import Partnerships from '@/components/Partnerships';
import Footer from '@/components/Footer';
import TechDetails from '@/components/TechDetails';
import GridOverlay from '@/components/GridOverlay';
// Removed unused imports

export default function Home() {
  // Initialize with 'en' on both server and client to prevent hydration mismatch
  const [language, setLanguage] = useState<Language>('en');
  
  // Load language from localStorage after hydration
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage && ['en', 'pt', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);

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

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <Overview language={language} />
        <Products language={language} />
        <About language={language} />
        <Partnerships language={language} />
        <Footer language={language} />
      </main>
      
      {/* Fixed Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: '1000'
      }}>
        {/* Grid Toggle Button */}
        <button
          onClick={toggleGrid}
          style={{
            background: isGridVisible ? 'var(--accent)' : 'var(--primary)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title={`${isGridVisible ? 'Hide' : 'Show'} Grid (Shift+G)`}
        >
          📐
        </button>

        {/* Tech Details Toggle Button */}
        <button
          onClick={() => setShowTechDetails(true)}
          style={{
            background: 'var(--primary)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'var(--primary-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'var(--primary)';
          }}
          title="Show Frontend Tech Details"
        >
          ⚙️
        </button>
      </div>

      {/* Tech Details Modal */}
      <TechDetails 
        isVisible={showTechDetails} 
        onClose={() => setShowTechDetails(false)} 
      />

      {/* Grid Overlay */}
      <GridOverlay isVisible={isGridVisible} onToggle={toggleGrid} />
    </>
  );
}
