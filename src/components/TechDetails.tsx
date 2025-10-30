'use client';


import styles from './TechDetails.module.scss';

interface TechDetailsProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function TechDetails({ isVisible, onClose }: TechDetailsProps) {
  if (!isVisible) return null;

  const colors = [
    { name: 'Primary', value: 'var(--primary)', hex: '#1A5077' },
    { name: 'Primary Dark', value: 'var(--primary-dark)', hex: '#154262' },
    { name: 'Primary Light', value: 'var(--primary-light)', hex: '#8DCDDE' },
    { name: 'Accent', value: 'var(--accent)', hex: '#E91E63' },
    { name: 'Accent Dark', value: 'var(--accent-dark)', hex: '#C71585' },
    { name: 'Accent Light', value: 'var(--accent-light)', hex: '#FF69B4' },
    { name: 'Neutral', value: 'var(--neutral)', hex: '#f1f1e9' },   
    { name: 'Text Primary', value: 'var(--text-primary)', hex: '#414141' },
    { name: 'Text Secondary', value: 'var(--text-secondary)', hex: '#65eded' },
    { name: 'Background', value: 'var(--background)', hex: '#f1f1e9' },
    { name: 'White', value: 'var(--white)', hex: '#ffffff' },
    { name: 'Black', value: 'var(--black)', hex: '#000000' },
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Frontend Tech Details</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.content}>
          {/* Colors Section */}
          <section className={styles.section}>
            <h3>Color Palette</h3>
            <div className={styles.colorGrid}>
              {colors.map((color) => (
                <div key={color.name} className={styles.colorItem}>
                  <div 
                    className={styles.colorSwatch} 
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className={styles.colorInfo}>
                    <strong>{color.name}</strong>
                    <span>{color.hex}</span>
                    <code>{color.value}</code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Section */}
          <section className={styles.section}>
            <h3>Typography</h3>
            <div className={styles.typographyGrid}>
              <div className={styles.typeExample}>
                <h1>Heading 1 - Droid Serif</h1>
                <code>font-family: &apos;Droid Serif&apos;, serif; font-weight: 700;</code>
              </div>
              <div className={styles.typeExample}>
                <h2>Heading 2 - Droid Serif</h2>
                <code>font-family: &apos;Droid Serif&apos;, serif; font-weight: 400;</code>
              </div>
              <div className={styles.typeExample}>
                <h3>Heading 3 - Bree Serif</h3>
                <code>font-family: &apos;Bree Serif&apos;, serif;</code>
              </div>
              <div className={styles.typeExample}>
                <p>Body text - Inter Variable</p>
                <code>font-family: &apos;Inter&apos;, sans-serif;</code>
              </div>
            </div>
          </section>

          {/* Grid System */}
          <section className={styles.section}>
            <h3>Grid System</h3>
            <div className={styles.gridExample}>
              <div className={styles.gridItem}>
                <span>Container</span>
                <code>max-width: responsive</code>
              </div>
              <div className={styles.gridDemo}>
                <div className={styles.demoCol}>Col 1</div>
                <div className={styles.demoCol}>Col 2</div>
                <div className={styles.demoCol}>Col 3</div>
              </div>
              <div className={styles.gridNote}>
                <p>
                  <strong>Grid Overlay:</strong> Use the 📐 button in the bottom-right corner 
                  or press <code>Shift+G</code> to toggle the visual grid overlay.
                </p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className={styles.section}>
            <h3>Button Styles</h3>
            <div className={styles.buttonGrid}>
              <button className="btn btn--primary">Primary Button</button>
              <button className="btn btn--secondary">Secondary Button</button>
            </div>
          </section>

          {/* Breakpoints */}
          <section className={styles.section}>
            <h3>Breakpoints</h3>
            <div className={styles.breakpointsList}>
              <div className={styles.breakpoint}>
                <strong>Mobile:</strong> <code>&lt; 768px</code>
              </div>
              <div className={styles.breakpoint}>
                <strong>Tablet:</strong> <code>768px - 1024px</code>
              </div>
              <div className={styles.breakpoint}>
                <strong>Desktop:</strong> <code>1024px - 1440px</code>
              </div>
              <div className={styles.breakpoint}>
                <strong>Large:</strong> <code>&gt; 1440px</code>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 