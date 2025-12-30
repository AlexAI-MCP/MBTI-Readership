import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  style?: CSSProperties;
  hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  onClick,
  selected = false,
  style,
  hoverable = true
}) => {
  const baseStyles: CSSProperties = {
    background: selected
      ? 'rgba(255, 255, 255, 0.35)'
      : 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: selected
      ? '2px solid rgba(255, 255, 255, 0.5)'
      : '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: selected
      ? '0 8px 32px rgba(0, 0, 0, 0.2)'
      : '0 8px 32px rgba(0, 0, 0, 0.1)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    ...style
  };

  return (
    <motion.div
      style={baseStyles}
      onClick={onClick}
      whileHover={hoverable && onClick ? { scale: 1.02, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};
