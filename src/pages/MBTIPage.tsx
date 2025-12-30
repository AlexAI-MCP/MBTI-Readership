import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import type { MBTIType } from '../types';
import { mbtiTypes, mbtiCharacteristics } from '../data/mbtiData';

export const MBTIPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const relationship = searchParams.get('relationship');
  const [selected, setSelected] = useState<MBTIType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (selected && relationship) {
      navigate(`/situation?relationship=${relationship}&mbti=${selected}`);
    }
  };

  const handleBack = () => {
    navigate('/relationship');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
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
          marginBottom: '40px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '15px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          상대의 MBTI를 선택하세요
        </h1>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: '400'
        }}>
          16가지 성격 유형 중 선택하세요
        </p>
      </motion.div>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        position: 'relative',
        marginBottom: '40px'
      }}>
        {/* 좌측 스크롤 버튼 */}
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          ‹
        </button>

        {/* MBTI 카드 스크롤 컨테이너 */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '20px 10px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {mbtiTypes.map((type, index) => {
            const char = mbtiCharacteristics[type];
            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  minWidth: '280px',
                  flex: '0 0 auto'
                }}
              >
                <GlassCard
                  onClick={() => setSelected(type)}
                  selected={selected === type}
                  style={{
                    height: '100%',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px 25px'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      color: 'white',
                      fontWeight: '800',
                      marginBottom: '8px',
                      letterSpacing: '2px'
                    }}>
                      {type}
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: '600'
                    }}>
                      {char.name}
                    </p>
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    textAlign: 'center',
                    flex: 1
                  }}>
                    {char.description}
                  </p>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    padding: '15px',
                    marginTop: 'auto'
                  }}>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.5',
                      fontWeight: '500'
                    }}>
                      {char.communicationPreference}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* 우측 스크롤 버튼 */}
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          ›
        </button>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: '30px',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: 'white',
            fontWeight: '600'
          }}>
            선택됨: {selected} - {mbtiCharacteristics[selected].name}
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: 'flex',
          gap: '15px'
        }}
      >
        <GlassButton
          onClick={handleBack}
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
