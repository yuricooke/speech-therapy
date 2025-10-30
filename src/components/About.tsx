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
        <div className={styles.aboutContent}>
          <div className={styles.imageContainer}>
            <div className={styles.placeholder}>
              <img src="/tatiana.avif" alt="Tatiana" />
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.title}>{content.title}</h2>
            <h3 className={styles.name}>{content.name}</h3>
            <p className={styles.experience}>{content.experience}</p>
            <p className={styles.description}>{content.description}</p>
            {content.personalNote && (
              <p className={styles.personalNote}>{content.personalNote}</p>
            )}
          </div>
        </div>

        {content.countries && (
          <div className={styles.experienceSection}>
            <h2 className={styles.experienceTitle}>
              {language === 'en' ? 'Professional Experience' : 
               language === 'pt' ? 'Experiência Profissional' : 
               'Berufserfahrung'}
            </h2>
            
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