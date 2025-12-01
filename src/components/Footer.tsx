'use client';

import { Language } from '@/types';
import Link from 'next/link';
import styles from './Footer.module.scss';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    en: {
      copyright: "All rights reserved.",
      credentials: "Recognized by the Health Department of Hamburg, Germany",
    },
    pt: {
      copyright: "Todos os direitos reservados.",
      credentials: "Reconhecido pelo Departamento de Saúde de Hamburgo, Alemanha",
    },
    de: {
      copyright: "Alle Rechte vorbehalten.",
      credentials: "Anerkannt vom Gesundheitsamt Hamburg, Deutschland",
    },
    es: {
      copyright: "Todos los derechos reservados.",
      credentials: "Reconocido por el Departamento de Salud de Hamburgo, Alemania",
    },
  };

  const t = translations[language];

  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>

        <div className={styles.logoContainer}>
          <Link href="/" className={styles.balaoContainer}>
            <div className={styles.balao}>
              <img src="/logo-footer.svg" alt="Logo" />
            </div>
            
          </Link>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Tatiana Cooke Munkes Speech Therapy. {t.copyright}</p>
          </div>
          <div className={styles.credentials}>
            <p>{t.credentials}</p>
          </div>
        </div>
        </div>

      </div>
    </footer>
  );
} 