"use client";

import { Language } from "@/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const getNavText = () => {
    switch (language) {
      case "pt":
        return {
          home: "Início",
          therapies: "Terapias & More",
          space: "Nosso Espaço",
          aboutMe: "Sobre Mim",
          contact: "Contato",
        };
      case "de":
        return {
          home: "Home",
          therapies: "Therapies & More",
          space: "Unser Raum",
          aboutMe: "Über Mich",
          contact: "Kontakt",
        };
      default:
        return {
          home: "Home",
          therapies: "Therapies & More",
          space: "Our Space",
          aboutMe: "About Me",
          contact: "Contact",
        };
    }
  };

  const navText = getNavText();

  return (
    <header
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoButton}>
              <img
                src="/balao-sombra.svg"
                alt="Logo"
                className={styles.logoImage}
              />
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile only) */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className={styles.navItem}
                >
                  {navText.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={styles.navItem}
                >
                  {navText.therapies}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className={styles.navItem}
                >
                  {navText.space}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("partnerships")}
                  className={styles.navItem}
                >
                  {navText.aboutMe}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("footer")}
                  className={styles.navItem}
                >
                  {navText.contact}
                </button>
              </li>
            </ul>
          </nav>

          {/* Language Selector */}
          <div className={styles.languageSelector}>
            <span className="material-symbols-outlined">language</span>
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

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  <li>
                    <button
                      onClick={() => scrollToSection("hero")}
                      className={styles.mobileNavItem}
                    >
                      {navText.home}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className={styles.mobileNavItem}
                    >
                      {navText.therapies}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("products")}
                      className={styles.mobileNavItem}
                    >
                      {navText.space}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("partnerships")}
                      className={styles.mobileNavItem}
                    >
                      {navText.aboutMe}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("footer")}
                      className={styles.mobileNavItem}
                    >
                      {navText.contact}
                    </button>
                  </li>
                </ul>
              </nav>
              {/* Language Selector in Mobile Menu */}
              <div className={styles.mobileLanguageSelector}>
                <span className="material-symbols-outlined">language</span>
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
          )}
        </div>
      </div>
    </header>
  );
}
