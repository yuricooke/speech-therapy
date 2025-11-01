'use client';

import { useState, useRef, useEffect } from 'react';
import { Language } from '@/types';
import styles from './Partnerships.module.scss';

interface PartnershipsProps {
  language: Language;
}

export default function Partnerships({ language }: PartnershipsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const partnerships = [
    { name: 'Hamburg Health Department', category: 'Official Recognition' },
    { name: 'International Speech Association', category: 'Professional Network' },
    { name: 'Multilingual Education Network', category: 'Educational Partner' },
    { name: 'German Speech Therapy Board', category: 'Certification Body' },
  ];

  const stopAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  const scrollToSlide = (index: number, userInteraction = false) => {
    if (userInteraction) {
      stopAutoplay();
    }
    
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      const scrollPosition = slideWidth * index;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : partnerships.length - 1;
    scrollToSlide(newIndex, true);
  };

  const handleNext = () => {
    const newIndex = currentIndex < partnerships.length - 1 ? currentIndex + 1 : 0;
    scrollToSlide(newIndex, true);
  };

  const handleScroll = () => {
    // Stop autoplay if user manually scrolls
    stopAutoplay();
    
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < partnerships.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleUserInteraction = () => {
    stopAutoplay();
  };

  // Autoplay effect
  useEffect(() => {
    if (isAutoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex < partnerships.length - 1 ? prevIndex + 1 : 0;
          if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            const scrollPosition = slideWidth * nextIndex;
            sliderRef.current.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
          return nextIndex;
        });
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isAutoplay, partnerships.length]);

  return (
    <section id="partnerships" className={`section ${styles.partnerships}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{language === 'en' ? 'Partnerships' :
            language === 'pt' ? 'Parcerias' :
              'Partnerschaften'}</h2>
          <p className={styles.subtitle}>{language === 'en' ? 'Collaborating with leading institutions to provide the best multilingual speech therapy services' :
            language === 'pt' ? 'Colaborando com instituições líderes para fornecer os melhores serviços de terapia de fala multilíngue' :
              'Zusammenarbeit mit führenden Institutionen zur Bereitstellung der besten Multilingual Speech Therapy Services'}</p>
        </div>

        <div className={styles.sliderWrapper} onClick={handleUserInteraction}>
          <button 
            className={styles.sliderButton} 
            onClick={handlePrev}
            aria-label="Previous partner"
          >
            ‹
          </button>
          
          <div 
            className={styles.slider} 
            ref={sliderRef} 
            onScroll={handleScroll}
            onMouseEnter={handleUserInteraction}
            onTouchStart={handleUserInteraction}
          >
            {partnerships.map((partner, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.partnerCard}>
                  <div className={styles.logoPlaceholder}>
                    <span>{partner.name.split(' ').map(word => word[0]).join('')}</span>
                  </div>
                  <div className={styles.partnerInfo}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerCategory}>{partner.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={styles.sliderButton} 
            onClick={handleNext}
            aria-label="Next partner"
          >
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {partnerships.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => scrollToSlide(index, true)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 