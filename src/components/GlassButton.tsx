import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: CSSProperties;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style
}) => {
  const baseStyles: CSSProperties = {
    background: variant === 'primary'
      ? 'rgba(255, 255, 255, 0.3)'
      : 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '15px',
    padding: size === 'small' ? '10px 20px' : size === 'large' ? '18px 40px' : '14px 30px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    fontWeight: '600',
    color: 'white',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    ...style
  };

  return (
    <motion.button
      style={baseStyles}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05, boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)' }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};
