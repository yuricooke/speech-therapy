'use client';

import { Language } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './Footer.module.scss';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const contact = siteContent[language].contact;

  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>{contact.title}</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <strong>Address:</strong>
                <p>{contact.address}</p>
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <p>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    {contact.phone}
                  </a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <p>
                  <a href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Therapy Services</a></li>
              <li><a href="#counseling">Counseling</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li><a href="/swallowing-feeding">Swallowing & Feeding</a></li>
              <li><a href="/language">Language</a></li>
              <li><a href="/speech">Speech</a></li>
              <li><a href="/orofacial">Orofacial</a></li>
              <li><a href="/stuttering">Stuttering</a></li>
              <li><a href="/auditory-processing">Auditory Processing</a></li>
            </ul>
          </div>

          <div className={styles.social}>
            <h3>Connect</h3>
            <div className={styles.languages}>
              <h4>Languages</h4>
              <div className={styles.languageLinks}>
                <a href="/en" className={language === 'en' ? styles.active : ''}>English</a>
                <a href="/pt" className={language === 'pt' ? styles.active : ''}>Português</a>
                <a href="/de" className={language === 'de' ? styles.active : ''}>Deutsch</a>
              </div>
            </div>
          </div>
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
    </footer>
  );
} 