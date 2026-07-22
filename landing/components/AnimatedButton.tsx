'use client';

import { m } from 'framer-motion';
import styles from './AnimatedButton.module.css';

type Variant = 'primary' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant: Variant;
  size: Size;
  children: React.ReactNode;
  onClick?: () => void;
}

export function AnimatedButton({ variant, size, children, onClick }: Props) {
  return (
    <m.button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </m.button>
  );
}
