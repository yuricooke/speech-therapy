'use client';

import { useState } from 'react';
import { Language } from '@/types';
import styles from './Contact.module.scss';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    en: {
      mainTitle: 'Get in touch and visit us!',
      title: 'Contact',
      address: 'Auf dem Königslande 96',
      city: '22047 - Hamburg',
      phone: 'Tel: +49 1514 6538687',
      email: 'tcmunkes@gmail.com',
      instagram: 'Instagram',
      transport: {
        title: 'Public Transport',
        bus: 'Bus Lines',
        subway: 'Subway Station'
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Thank you! Your message has been sent.',
        error: 'Something went wrong. Please try again.'
      }
    },
    pt: {
      mainTitle: 'Entre em contato e nos visite!',
      title: 'Contato',
      address: 'Auf dem Königslande 96',
      city: '22047 - Hamburgo',
      phone: 'Tel: +49 1514 6538687',
      email: 'tcmunkes@gmail.com',
      instagram: 'Instagram',
      transport: {
        title: 'Transporte Público',
        bus: 'Linhas de Ônibus',
        subway: 'Estação de Metrô'
      },
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar',
        sending: 'Enviando...',
        success: 'Obrigado! Sua mensagem foi enviada.',
        error: 'Algo deu errado. Por favor, tente novamente.'
      }
    },
    de: {
      mainTitle: 'Kontaktieren Sie uns und besuchen Sie uns!',
      title: 'Kontakt',
      address: 'Auf dem Königslande 96',
      city: '22047 - Hamburg',
      phone: 'Tel: +49 1514 6538687',
      email: 'tcmunkes@gmail.com',
      instagram: 'Instagram',
      transport: {
        title: 'Öffentliche Verkehrsmittel',
        bus: 'Buslinien',
        subway: 'U-Bahn-Station'
      },
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
        error: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.'
      }
    }
  };

  const t = translations[language];

  // Google Maps embed URL (no API key needed for basic embed)
  const mapAddress = encodeURIComponent('Auf dem Königslande 96, 22047 Hamburg, Germany');

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className={styles.mainTitle}>{t.mainTitle}</h2>
        <div className={styles.contactLayout}>

          

          {/* Left Side - Map and Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.mapContainer}>
              <iframe
                src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.addressInfo}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C6.48 0 3.5 2.98 3.5 6.5C3.5 11.75 10 20 10 20C10 20 16.5 11.75 16.5 6.5C16.5 2.98 13.52 0 10 0ZM10 8.75C8.62 8.75 7.5 7.63 7.5 6.25C7.5 4.87 8.62 3.75 10 3.75C11.38 3.75 12.5 4.87 12.5 6.25C12.5 7.63 11.38 8.75 10 8.75Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.address}>{t.address}</p>
                  <p className={styles.city}>{t.city}</p>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 0C15.88 0 17 1.12 17 2.5V17.5C17 18.88 15.88 20 14.5 20H5.5C4.12 20 3 18.88 3 17.5V2.5C3 1.12 4.12 0 5.5 0H14.5ZM14.5 1H5.5C4.67 1 4 1.67 4 2.5V17.5C4 18.33 4.67 19 5.5 19H14.5C15.33 19 16 18.33 16 17.5V2.5C16 1.67 15.33 1 14.5 1ZM13 15H7C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15ZM13 11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H13C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <a href="tel:+4915146538687">{t.phone}</a>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 3H2C0.9 3 0.01 3.9 0.01 5L0 15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V5C20 3.9 19.1 3 18 3ZM18 15H2V7L10 12.5L18 7V15ZM10 10L2 5H18L10 10Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <a href={`mailto:${t.email}`}>{t.email}</a>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                    </svg>
                  </div>
                  <a 
                    href="https://www.instagram.com/fonohamburg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    {t.instagram}
                  </a>
                </div>
              </div>

              {/* <div className={styles.transportInfo}>
                <h4 className={styles.transportTitle}>{t.transport.title}</h4>
                <div className={styles.transportDetails}>
                  <div className={styles.transportItem}>
                    <div className={styles.iconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14C4.83 14 5.5 13.33 5.5 12.5C5.5 11.67 4.83 11 4 11C3.17 11 2.5 11.67 2.5 12.5C2.5 13.33 3.17 14 4 14ZM14 14C14.83 14 15.5 13.33 15.5 12.5C15.5 11.67 14.83 11 14 11C13.17 11 12.5 11.67 12.5 12.5C12.5 13.33 13.17 14 14 14ZM4.5 9L6 9.5V6.5H15V9.5L16.5 9V6C16.5 5.45 16.05 5 15.5 5H13V3.5C13 2.67 12.33 2 11.5 2H6.5C5.67 2 5 2.67 5 3.5V5H2.5C1.95 5 1.5 5.45 1.5 6V12.5H4.5V9Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p><strong>{t.transport.bus}:</strong> 112, 172, 262</p>
                  </div>
                  <div className={styles.transportItem}>
                    <div className={styles.iconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM9 16C5.13 16 2 12.87 2 9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9C16 12.87 12.87 16 9 16ZM9.5 5H8V10L12.25 12.15L12.75 11.05L9.5 9.25V5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p><strong>{t.transport.subway}:</strong> U-Bahn Wandsbek-Gartenstadt</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.formSection}>
            {/* <h2 className={styles.sectionTitle}>{t.form.name} & {t.form.message}</h2> */}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>{t.form.success}</div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>{t.form.error}</div>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? t.form.sending : t.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

