import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import type { RelationshipType } from '../types';

export const RelationshipPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<RelationshipType | null>(null);

  const relationships = [
    {
      type: 'junior' as RelationshipType,
      title: '후배',
      description: '지도하고 이끌어야 하는 후배',
      icon: '👤'
    },
    {
      type: 'senior' as RelationshipType,
      title: '선배',
      description: '보고하고 협력하는 선배',
      icon: '👔'
    },
    {
      type: 'colleague' as RelationshipType,
      title: '동료',
      description: '함께 협업하는 동료',
      icon: '🤝'
    }
  ];

  const handleNext = () => {
    if (selected) {
      navigate(`/mbti?relationship=${selected}`);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '8px'
        }}>
          소통 상대를 선택하세요
        </h1>
        <p style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontWeight: '400'
        }}>
          누구와 대화하시나요?
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '16px',
        maxWidth: '600px',
        width: '100%',
        marginBottom: '30px'
      }}>
        {relationships.map((rel, index) => (
          <motion.div
            key={rel.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlassCard
              onClick={() => setSelected(rel.type)}
              selected={selected === rel.type}
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 16px',
                minHeight: '140px'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '12px',
                filter: selected === rel.type ? 'brightness(1.2)' : 'brightness(0.9)'
              }}>
                {rel.icon}
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                color: 'white',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                {rel.title}
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: 'center',
                lineHeight: '1.4'
              }}>
                {rel.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          display: 'flex',
          gap: '12px'
        }}
      >
        <GlassButton
          onClick={() => navigate('/')}
          variant="secondary"
          size="small"
        >
          이전
        </GlassButton>
        <GlassButton
          onClick={handleNext}
          variant="primary"
          size="small"
          disabled={!selected}
        >
          다음
        </GlassButton>
      </motion.div>
    </div>
  );
};
