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
      description: '지도하고 이끌어야 하는 후배와의 소통',
      icon: '👤'
    },
    {
      type: 'senior' as RelationshipType,
      title: '선배',
      description: '보고하고 협력하는 선배와의 소통',
      icon: '👔'
    },
    {
      type: 'colleague' as RelationshipType,
      title: '동료',
      description: '함께 협업하는 동료와의 소통',
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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '15px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          소통 상대를 선택하세요
        </h1>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: '400'
        }}>
          누구와 대화하시나요?
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '25px',
        maxWidth: '900px',
        width: '100%',
        marginBottom: '40px'
      }}>
        {relationships.map((rel, index) => (
          <motion.div
            key={rel.type}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
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
                padding: '35px 25px',
                minHeight: '220px'
              }}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px',
                filter: selected === rel.type ? 'brightness(1.2)' : 'brightness(1)'
              }}>
                {rel.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'white',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                {rel.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.85)',
                textAlign: 'center',
                lineHeight: '1.5'
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
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '15px'
        }}
      >
        <GlassButton
          onClick={() => navigate('/')}
          variant="secondary"
          size="medium"
        >
          이전
        </GlassButton>
        <GlassButton
          onClick={handleNext}
          variant="primary"
          size="medium"
          disabled={!selected}
        >
          다음
        </GlassButton>
      </motion.div>
    </div>
  );
};
