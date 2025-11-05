'use client';

import { Language } from '@/types';
import Link from 'next/link';
import styles from './Footer.module.scss';

interface FooterProps {
  language: Language;
}

export default function Footer({ }: FooterProps) {
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
            <p>&copy; {new Date().getFullYear()} Tatiana Cooke Munkes Speech Therapy. All rights reserved.</p>
          </div>
          <div className={styles.credentials}>
            <p>Recognized by the Health Department of Hamburg, Germany</p>
          </div>
        </div>
        </div>

      </div>
    </footer>
  );
} 