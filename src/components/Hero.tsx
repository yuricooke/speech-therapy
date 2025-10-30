'use client';

import { Language } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './Hero.module.scss';

interface HeroProps {
  language: Language;
  customContent?: {
    tagline: string;
    title: string;
    description: string;
    backgroundImage?: string;
  };
}

export default function Hero({ language, customContent }: HeroProps) {
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
              <img
                src={`/${customContent?.backgroundImage || 'hamburg.jpg'}`}
                alt="Child in learning environment"
                role="presentation"
              />
            </picture>
          </figure>
        </div>


        <div className={`${styles.content} col-12 offset-xl-1 col-xl-9`}>
          {/* image of baloes.svg */}
          <div className={styles.balao}>
            <img src="/balao-sombra.svg" alt="Balao" />
          </div>
          <div className={styles.text}>
            <div className={styles.titleContainer}>
              <div className={styles.tagline}>{content.tagline}</div>
              <h1 className={styles.title}>{content.title}</h1>
            </div>
              <p className={styles.description} dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>

          <div className={styles.cta}>
            <a 
              href="https://wa.me/4915146538687" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.button}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 2C6.486 2 2.017 6.468 2.017 12c0 1.75.458 3.391 1.255 4.826L2 22l5.326-1.25C8.752 21.543 10.342 22 12.017 22c5.531 0 9.999-4.468 9.999-10S17.548 2 12.017 2zm5.948 14.273c-.243.678-1.202 1.245-1.967 1.405-.543.113-1.252.203-3.636-.764-2.564-1.04-4.24-3.674-4.366-3.844-.126-.17-.99-1.295-.99-2.47 0-1.175.618-1.752.837-1.994.22-.242.478-.303.638-.303.16 0 .32.001.459.008.148.007.345-.056.54.413.196.47.673 1.62.732 1.74.058.12.097.261.019.422-.077.16-.116.26-.232.4-.116.14-.245.313-.35.42-.116.12-.236.249-.102.487.135.238.598.973 1.284 1.574.882.773 1.626 1.014 1.855 1.127.229.113.362.095.495-.057.134-.152.573-.66.726-.886.152-.226.305-.189.514-.113.21.076 1.327.618 1.555.73.229.113.381.17.438.262.058.094.058.541-.185 1.22z" fill="currentColor"/>
              </svg>
              <span>{content.cta.whatsapp}</span>
            </a>
            <a 
              href="mailto:tcmunkes@gmail.com" 
              className={styles.button}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{content.cta.email}</span>
            </a>
            <a 
              href="#contact" 
              className={styles.button}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>{content.cta.schedule}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* 
                <div class="microsite micro-hero">
                  <div class="container">
                    <div class="hero__image">
                      <figure>
                        <picture>
                          <source srcset="https://picsum.photos/2880/2048?random=1" media="(min-width: 1440px)">
                            <source srcset="https://picsum.photos/1440/1080?random=2" media="(min-width: 1024px) and (max-width: 1439px)">
                              <source srcset="https://picsum.photos/1024/768?random=3" media="(min-width: 768px) and (max-width: 1023px)">
                                <source srcset="https://picsum.photos/768/1024?random=4" media="(min-width: 480px) and (max-width: 767px)">
                                  <source srcset="https://picsum.photos/480/1024?random=5" media="(max-width: 479px)">
                                    <img src="https://picsum.photos/2880/2048?random=14" alt="" role="presentation">
                                    </picture>
                                  </figure>
                                </div>

                                <!-- add class micro-hero__content--right to the div if the description is on the right -->
                                <div class="micro-hero__content">
                                  <div class="micro-hero__text">
                                    <h1 class="micro-hero__title">Parkhusene</h1>
                                    <div class="micro-hero__description">
                                      Velkommen til Parkhusene i Molobyen - et sosialt og hyggelig nabolag! Her bor du midt i byen, rett ved havet og med park og friområder som nærmeste nabo.
                                    </div>
                                  </div>

                                  <div class="micro-hero__cta">

                                    <a href="#" class="micro-hero__button">
                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 12.625H23.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.75 23.125L23.25 12.625L12.75 2.125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg> <span>Boligvelger</span>
                                    </a>
                                    <a href="#" class="micro-hero__button">
                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 12.625H23.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.75 23.125L23.25 12.625L12.75 2.125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                      <span>Kontakt megler</span>
                                    </a>
                                    <a href="#" class="micro-hero__button">
                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 12.625H23.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.75 23.125L23.25 12.625L12.75 2.125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                      <span>Salgsprospekt</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div> */}

// 
//                     <div className={styles.content}>
//   <h1 className={styles.title}>{content.title}</h1>
//   <h2 className={styles.subtitle}>{content.subtitle}</h2>
//   <p className={styles.description}>{content.description}</p>
//   <p className={styles.author}>-Nelson Mandela</p>
//   <button className={`btn btn--primary ${styles.cta}`}>
//     {content.cta}
//   </button>
// </div>
// <div className={styles.imageContainer}>
//   <div className={styles.placeholder}>
//     {/* Professional portrait placeholder */}
//     <div className={styles.placeholderContent}>
//       <span>Professional Portrait</span>
//     </div>
//   </div>
// </div>