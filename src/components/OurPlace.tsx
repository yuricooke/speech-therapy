'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { Language } from '@/types';
import styles from './OurPlace.module.scss';
import Link from 'next/link';

interface OurPlaceProps {
  language: Language;
}

export default function OurPlace({ language }: OurPlaceProps) {
  // Images from selecao folder
  const sliderImages = [
    { src: '/selecao/IMG_5152.jpeg', alt: 'Space Image 1' },
    { src: '/selecao/IMG_5169.jpeg', alt: 'Space Image 2' },
    { src: '/selecao/IMG_5172.jpeg', alt: 'Space Image 3' },
    { src: '/selecao/IMG_5178.jpeg', alt: 'Space Image 4' },
    { src: '/selecao/IMG_5181.jpeg', alt: 'Space Image 5' },
    { src: '/selecao/IMG_5216.jpeg', alt: 'Space Image 6' },
    { src: '/selecao/IMG_5247.jpeg', alt: 'Space Image 7' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  }, [
    WheelGesturesPlugin({ forceWheelAxis: 'x' })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Get translations for title and CTA
  const getTexts = () => {
    switch (language) {
      case 'pt':
        return {
          title: 'Nosso Espaço',
          cta: 'Veja mais',
        };
      case 'de':
        return {
          title: 'Unser Raum',
          cta: 'Mehr sehen',
        };
      default:
        return {
          title: 'Our Space',
          cta: 'See more',
        };
    }
  };

  const texts = getTexts();

  return (
    <section id="our-space" className={styles.ourPlace}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{texts.title}</h2>
        </div>

        {/* Image Slider */}
        <div className={styles.sliderContainer}>
          <div className={styles.sliderWrapper} ref={emblaRef}>
            <div className={styles.slider}>
              {sliderImages.map((image, index) => (
                <figure key={index} className={styles.slide}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.slideImage}
                  />
                </figure>
              ))}
              {/* Empty card for spacing at the end */}
              <div className={styles.slideEmpty}></div>
            </div>
          </div>
          <div className={styles.sliderControls}>
            <button
              className={styles.sliderButton}
              onClick={scrollPrev}
              aria-label="Previous slide"
              disabled={selectedIndex === 0}
            >
              ‹
            </button>
            <div className={styles.sliderDots}>
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === selectedIndex ? styles.active : ''}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              className={styles.sliderButton}
              onClick={scrollNext}
              aria-label="Next slide"
              disabled={selectedIndex === sliderImages.length - 1}
            >
              ›
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <Link href="/pages/space" className={styles.ctaButton}>
            {texts.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

