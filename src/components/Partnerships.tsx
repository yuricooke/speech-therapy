'use client';

import { Language } from '@/types';
import styles from './Partnerships.module.scss';

interface PartnershipsProps {
  language: Language;
}

export default function Partnerships({ }: PartnershipsProps) {
  const partnerships = [
    { name: 'Hamburg Health Department', category: 'Official Recognition' },
    { name: 'International Speech Association', category: 'Professional Network' },
    { name: 'Multilingual Education Network', category: 'Educational Partner' },
    { name: 'German Speech Therapy Board', category: 'Certification Body' },
  ];

  return (
    <section id="partnerships" className={`section ${styles.partnerships}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Partnerships</h2>
          <p className={styles.subtitle}>
            Collaborating with leading institutions to provide the best multilingual speech therapy services
          </p>
        </div>

        <div className={`grid grid--4 ${styles.partnershipsGrid}`}>
          {partnerships.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <div className={styles.logoPlaceholder}>
                <span>{partner.name.split(' ').map(word => word[0]).join('')}</span>
              </div>
              <h3 className={styles.partnerName}>{partner.name}</h3>
              <p className={styles.partnerCategory}>{partner.category}</p>
            </div>
          ))}
        </div>

        <div className={styles.certifications}>
          <h3>Professional Qualifications</h3>
          <div className={styles.certList}>
            <div className={styles.certItem}>
              <strong>25+ years</strong> experience in multilingual therapy
            </div>
            <div className={styles.certItem}>
              <strong>Recognized</strong> by Hamburg Health Department
            </div>
            <div className={styles.certItem}>
              <strong>Fluent</strong> in German, Portuguese, and English
            </div>
            <div className={styles.certItem}>
              <strong>International</strong> experience across 5 countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 