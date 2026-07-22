'use client';

import styles from './GradientText.module.css';

interface Props {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary';
}

export function GradientText({ children, gradient = 'primary' }: Props) {
  return (
    <span className={`${styles.text} ${styles[gradient]}`}>
      {children}
    </span>
  );
}
