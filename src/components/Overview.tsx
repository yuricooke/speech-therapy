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
  const cards = content.items.map(item => {
    // Get the image from pageContent hero or fallback to overview heroImage
    const slug = item.slug || "";
    const pageData = slug ? siteContent[language].pageContent?.[slug] : undefined;
    const image = pageData?.hero?.backgroundImage || item.heroImage || 'tati.jpg';

    return {
      title: item.title,
      description: item.description,
      slug: slug,
      image: image
    };
  });

  return (
    <>

      <section className={`section ${styles.overview}`}>
        <div className={`${styles.content} container`}>
          <div className="row">
            {cards.map((card) => (
              <div key={card.slug} className="col-md-6 col-lg-3">
                <Link href={`/pages/${card.slug}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <img
                        src={`/${card.image}`}
                        alt={card.title}
                      />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={`btn ${styles.readMoreBtn}`}>
                      {language === 'pt' ? 'Ler mais' : language === 'en' ? 'Read more' : 'Mehr lesen'}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </>
  );
} 