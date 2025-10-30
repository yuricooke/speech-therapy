'use client';

import { Language } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './HeroSubPage.module.scss';

interface HeroSubPageProps {
  language: Language;
  customContent?: {
    tagline: string;
    title: string;
    description: string;
    backgroundImage?: string;
    content?: string;
  };
}

export default function HeroSubPage({ language, customContent }: HeroSubPageProps) {
  const defaultContent = siteContent[language].hero;
  const content = customContent ? {
    ...defaultContent,
    ...customContent
  } : defaultContent;

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.image}>
          <figure>
            <picture>
              {customContent?.backgroundImage ? (
                <img
                  src={`/${customContent.backgroundImage}`}
                  alt="Child in learning environment"
                  role="presentation"
                />
              ) : (
                <div className={styles.placeholder}>
                  <div className={styles.placeholderContent}>
                    <span>Hero Image Placeholder</span>
                    <small>{customContent?.title || 'Hero Title'}</small>
                  </div>
                </div>
              )}
            </picture>
          </figure>
        </div>

        <div className={`${styles.content} col-12 offset-xl-1 col-xl-9`}>
          <div className={styles.text}>
            <div className={styles.titleContainer}>
              <div className={styles.tagline}>{content.tagline}</div>
              <h1 className={styles.title}>{content.title}</h1>
            </div>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>

          {/* Conteúdo expandido se for página de conteúdo */}
          {customContent?.content && (
            <div className={styles.expandedContent}>



              <div
                className={styles.contentBody}
                dangerouslySetInnerHTML={{ __html: customContent.content }}
              />
            </div>



          )}

        <div className={styles.cta}>
          <a
            href="https://wa.me/4915146538687"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.017 2C6.486 2 2.017 6.468 2.017 12c0 1.75.458 3.391 1.255 4.826L2 22l5.326-1.25C8.752 21.543 10.342 22 12.017 22c5.531 0 9.999-4.468 9.999-10S17.548 2 12.017 2zm5.948 14.273c-.243.678-1.202 1.245-1.967 1.405-.543.113-1.252.203-3.636-.764-2.564-1.04-4.24-3.674-4.366-3.844-.126-.17-.99-1.295-.99-2.47 0-1.175.618-1.752.837-1.994.22-.242.478-.303.638-.303.16 0 .32.001.459.008.148.007.345-.056.54.413.196.47.673 1.62.732 1.74.058.12.097.261.019.422-.077.16-.116.26-.232.4-.116.14-.245.313-.35.42-.116.12-.236.249-.102.487.135.238.598.973 1.284 1.574.882.773 1.626 1.014 1.855 1.127.229.113.362.095.495-.057.134-.152.573-.66.726-.886.152-.226.305-.189.514-.113.21.076 1.327.618 1.555.73.229.113.381.17.438.262.058.094.058.541-.185 1.22z" fill="currentColor" />
            </svg>
            <span>{content.cta.whatsapp}</span>
          </a>
          <a
            href="mailto:tcmunkes@gmail.com"
            className={styles.button}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{content.cta.email}</span>
          </a>
          <a
            href="#contact"
            className={styles.button}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{content.cta.schedule}</span>
          </a>
        </div>
      </div>


    </div>
    </section >
  );
} 