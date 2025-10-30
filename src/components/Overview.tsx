'use client';

import Link from 'next/link';
import { Language } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './Overview.module.scss';

interface OverviewProps {
  language: Language;
}

export default function Overview({ language }: OverviewProps) {
  const content = siteContent[language].overview;

  // Pegar dados dos cards baseado no idioma atual
  const cards = content.items.map(item => ({
    title: item.title,
    description: item.description,
    slug: item.slug || ""
  }));

  return (
    <section className={`section ${styles.overview}`}>
      <div className={`${styles.content} container`}>
        <div className="row">
          {cards.map((card, index) => (
            <div key={card.slug} className="col-md-6 col-lg-3">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <span>{index + 1}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <Link href={`/pages/${card.slug}`} className={`btn btn--primary ${styles.readMoreBtn}`}>
                    {language === 'pt' ? 'Ler mais' : language === 'en' ? 'Read more' : 'Mehr lesen'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 