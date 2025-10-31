'use client';

import { Language } from '@/types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down (after 100px)
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Show header when scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavText = () => {
    switch (language) {
      case 'pt':
        return {
          home: 'Início',
          about: 'Sobre',
          services: 'Terapia',
          partnerships: 'Aconselhamento',
          contact: 'Contato'
        };
      case 'de':
        return {
          home: 'Home',
          about: 'Über mich',
          services: 'Therapie',
          partnerships: 'Beratung',
          contact: 'Kontakt'
        };
      default:
        return {
          home: 'Home',
          about: 'About',
          services: 'Therapy',
          partnerships: 'Counselling',
          contact: 'Contact'
        };
    }
  };

  const navText = getNavText();

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoButton}>
              <img src="/balao-sombra.svg" alt="Logo" className={styles.logoImage} />
            </Link>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className={styles.navItem}
                >
                  {navText.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={styles.navItem}
                >
                  {navText.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className={styles.navItem}
                >
                  {navText.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partnerships')}
                  className={styles.navItem}
                >
                  {navText.partnerships}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('footer')}
                  className={styles.navItem}
                >
                  {navText.contact}
                </button>
              </li>
            </ul>
          </nav>

          {/* Language Selector */}
          <div className={styles.languageSelector}>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className={styles.languageSelect}
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="pt">PT</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
} 