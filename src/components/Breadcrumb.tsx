'use client';

import Link from 'next/link';
import { Language } from '@/types';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  language: Language;
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export default function Breadcrumb({ language, items }: BreadcrumbProps) {
  const homeLabels: Record<Language, string> = {
    pt: 'Início',
    en: 'Home',
    de: 'Startseite'
  };

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <div className="container">
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink}>
              {homeLabels[language]}
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className={styles.breadcrumbItem}>
              <span className={styles.separator}>→</span>
              {item.href ? (
                <Link href={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbCurrent}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
} 