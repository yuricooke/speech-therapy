'use client';

import { useEffect } from 'react';
import styles from './GridOverlay.module.scss';

interface GridOverlayProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function GridOverlay({ isVisible, onToggle }: GridOverlayProps) {
  // Keyboard shortcut Shift+G
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === 'g') {
        event.preventDefault();
        onToggle();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onToggle]);

  if (!isVisible) return null;

  return (
    <>
      {/* Grid Overlay */}
      <div className={styles.gridOverlay}>
        <div className="container">
          {/* Desktop Grid: 12 columns */}
          <div className={`${styles.gridRow} ${styles.gridDesktop}`}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={styles.gridCol}>
                <div className={styles.gridBlock}></div>
              </div>
            ))}
          </div>
          
          {/* Mobile Grid: 4 columns */}
          <div className={`${styles.gridRow} ${styles.gridMobile}`}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={`mobile-${i}`} className={styles.gridCol}>
                <div className={styles.gridBlock}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakpoint Indicator */}
      <div className={styles.breakpointIndicator}></div>
    </>
  );
} 