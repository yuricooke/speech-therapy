'use client';

import { useState } from 'react';
import { Language, TherapyService } from '@/types';
import { siteContent } from '@/utils/content';
import styles from './Products.module.scss';

interface ProductsProps {
  language: Language;
}

export default function Products({ language }: ProductsProps) {
  const therapyServices = siteContent[language].therapyServices;
  const productsContent = siteContent[language].products;
  const [selectedService, setSelectedService] = useState<TherapyService | null>(null);

  return (
    <section id="products" className={`section  ${styles.products}`}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{productsContent.title}</h2>
          <p className={styles.subtitle}>
            {productsContent.subtitle}
          </p>
        </div>

        <div className={styles.orbitalDiagram}>
          {/* Services row (linear layout) */}
          <div className={styles.servicesRow}>
            {therapyServices.map((service) => (
              <div
                key={service.id}
                className={styles.serviceItem}
                onClick={() => setSelectedService(service)}
              >
                <div className={styles.planetCard}>
                  <h4 className={styles.planetTitle}>{service.title}</h4>
                  <button className={styles.planetButton}>
                    {language === 'en' ? 'Explore' :
                     language === 'pt' ? 'Explorar' :
                     'Erkunden'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Particles */}
          <div className={styles.floatingParticles}>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className={styles.modalOverlay} onClick={() => setSelectedService(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedService(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}></div>
              <h2>{selectedService.title}</h2>
            </div>
            <div className={styles.modalBody}>
              {selectedService.detailedContent ? (
                <div className={styles.detailedContent}>
                  <div className={styles.overview}>
                    <p>{selectedService.detailedContent.overview}</p>
                  </div>
                  
                  {selectedService.detailedContent.disorders && (
                    <div className={styles.section}>
                      <h4>Disorders</h4>
                      <p>{typeof selectedService.detailedContent.disorders === 'string' ? selectedService.detailedContent.disorders : ''}</p>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.signs && Array.isArray(selectedService.detailedContent.signs) && (
                    <div className={styles.section}>
                      <h4>Signs to Watch For:</h4>
                                             <ul className={styles.signsList}>
                         {selectedService.detailedContent.signs.map((sign: string, index: number) => (
                           <li key={index}>{sign}</li>
                         ))}
                       </ul>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.risks && Array.isArray(selectedService.detailedContent.risks) && (
                    <div className={styles.section}>
                      <h4>Associated Risks:</h4>
                                             <ul className={styles.signsList}>
                         {selectedService.detailedContent.risks.map((risk: string, index: number) => (
                           <li key={index}>{risk}</li>
                         ))}
                       </ul>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.skills && Array.isArray(selectedService.detailedContent.skills) && (
                    <div className={styles.section}>
                      <h4>Key Skills Addressed:</h4>
                                             <ul className={styles.signsList}>
                         {selectedService.detailedContent.skills.map((skill: string, index: number) => (
                           <li key={index}>{skill}</li>
                         ))}
                       </ul>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.developmentChart && (
                    <div className={styles.section}>
                      <h4>Development Timeline:</h4>
                      <div className={styles.developmentChart}>
                        {Object.entries(selectedService.detailedContent.developmentChart as Record<string, string>).map(([age, sounds]) => (
                          <div key={age} className={styles.ageGroup}>
                            <strong>{age}:</strong> {sounds}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.treatment && (
                    <div className={styles.section}>
                      <h4>Treatment Approach:</h4>
                      <p>{typeof selectedService.detailedContent.treatment === 'string' ? selectedService.detailedContent.treatment : ''}</p>
                    </div>
                  )}
                  
                  {selectedService.detailedContent.germanTerms && (
                    <div className={styles.section}>
                      <h4>Medical Terminology:</h4>
                      <p className={styles.germanTerms}>{typeof selectedService.detailedContent.germanTerms === 'string' ? selectedService.detailedContent.germanTerms : ''}</p>
                    </div>
                  )}
                </div>
              ) : (
                <p>{selectedService.description}</p>
              )}
              
              <div className={styles.modalContact}>
                <p>
                  {language === 'en' ? 'Ready to start? Contact us to schedule your consultation.' : 
                   language === 'pt' ? 'Pronto para começar? Entre em contato para agendar sua consulta.' : 
                   'Bereit anzufangen? Kontaktieren Sie uns, um Ihre Beratung zu vereinbaren.'}
                </p>
                <a href="https://wa.me/4915146538687" className={styles.contactButton}>
                  {language === 'en' ? 'Contact via WhatsApp' : 
                   language === 'pt' ? 'Contato via WhatsApp' : 
                   'Kontakt über WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 