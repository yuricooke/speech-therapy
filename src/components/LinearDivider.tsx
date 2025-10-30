import React from 'react';
import styles from './LinearDivider.module.scss';

interface LinearDividerProps {
  className?: string;
}

const LinearDivider: React.FC<LinearDividerProps> = ({ }) => {
  return (
    <div className='container'>
      <div className={styles.divider} />
    </div>
  );
};

export default LinearDivider; 