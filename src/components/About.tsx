'use client';

import { useState } from 'react';
import { Language } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './About.module.scss';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const content = siteContent[language].about;
  const [selectedCountry, setSelectedCountry] = useState<number>(1); // Default to Germany (most recent)

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className='dots'>
          <img src="/dots.svg" alt="Divider" />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.contentWrapper}>

            <div className={styles.imageContainer}>
              <div className={styles.placeholder}>
                <img src="/tati.jpg" alt="Tatiana" />
              </div>
            </div>

            <div className={styles.textContent}>
              <h2 className={styles.title}>{content.title}</h2>
              <h3 className={styles.name}>{content.name}</h3>
              <p className={styles.experience}>{content.experience}</p>

            </div>
          </div>

          <p className={styles.description}>{content.description}</p>

        </div>
        <div className={styles.noteBox}>

          <div className={styles.noteIcon}>
            <svg width="577" height="411" viewBox="0 0 577 411" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.46" d="M228.983 309.952C255.894 338.594 269.448 409.868 274.262 410.035C279.021 410.201 275.793 358.505 342.696 337.927C409.628 317.349 479.982 312.51 533.165 282.199C586.348 251.915 615.625 157.978 473.052 79.5856C330.507 1.19327 150.864 59.3131 135.223 151.61C119.555 243.906 202.155 281.309 229.066 309.924H229.011L228.983 309.952Z" fill="#4489C9" />
              <path opacity="0.42" d="M174.826 333.839C236.024 349.551 255.811 380.418 269.754 405.168C283.697 429.918 263.965 367.487 296.638 313.928C344.784 234.98 455.074 222.939 447.866 90.6533C445.584 48.5233 343.837 -46.3316 182.034 26.9439C33.8386 94.0737 -27.4153 224.134 11.3798 295.074C37.8183 343.405 113.599 318.099 174.798 333.811L174.826 333.839Z" fill="#36BCCA" />
            </svg>

          </div>
          <p className={styles.noteText}>{content.personalNote}</p>
        </div>

        {content.countries && (
          <div className={styles.experienceSection}>
            <h3 className={styles.experienceTitle}>
              {language === 'en' ? 'Professional Experience' :
                language === 'pt' ? 'Experiência Profissional' :
                  'Berufserfahrung'}
            </h3>

            <div className={styles.countriesTimeline}>
              {content.countries.map((country) => (
                <div
                  key={country.id}
                  className={`${styles.countryItem} ${selectedCountry === country.id ? styles.active : ''}`}
                  onClick={() => setSelectedCountry(country.id)}
                >
                  <div className={styles.countryFlag}>{country.flag}</div>
                  <div className={styles.countryName}>{country.country}</div>
                </div>
              ))}
            </div>

            <div className={styles.experiencesContainer}>
              {content.countries
                .filter(country => country.id === selectedCountry)
                .map(country => (
                  <div key={country.id} className={styles.experienceDetails}>
                    <h3 className={styles.selectedCountryTitle}>
                      {country.flag} {country.country} - {country.location}
                    </h3>
                    <div className={styles.experiencesList}>
                      {country.experiences.map((experience, index) => (
                        <div key={index} className={styles.experienceCard}>
                          <h4 className={styles.experienceCompany}>{experience.company}</h4>
                          <h5 className={styles.experiencePosition}>{experience.position}</h5>
                          <p className={styles.experienceDescription}>{experience.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 