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
      const scrollAmount = 200;
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '24px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '8px'
        }}>
          상대의 MBTI를 선택하세요
        </h1>
        <p style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontWeight: '400'
        }}>
          16가지 성격 유형
        </p>
      </motion.div>

      <div style={{
        width: '100%',
        maxWidth: '900px',
        position: 'relative',
        marginBottom: '24px'
      }}>
        {/* 좌측 스크롤 버튼 */}
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '18px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          ‹
        </button>

        {/* MBTI 카드 스크롤 컨테이너 */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '12px 8px',
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
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                style={{
                  minWidth: '140px',
                  flex: '0 0 auto'
                }}
              >
                <GlassCard
                  onClick={() => setSelected(type)}
                  selected={selected === type}
                  style={{
                    height: '100%',
                    minHeight: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px 12px'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '10px'
                  }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      color: 'white',
                      fontWeight: '700',
                      marginBottom: '4px',
                      letterSpacing: '1px'
                    }}>
                      {type}
                    </h2>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: '500'
                    }}>
                      {char.name}
                    </p>
                  </div>

                  <p style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.4',
                    textAlign: 'center',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {char.description}
                  </p>
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
            right: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '18px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          ›
        </button>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '500'
          }}>
            선택: {selected} - {mbtiCharacteristics[selected].name}
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: '12px'
        }}
      >
        <GlassButton
          onClick={handleBack}
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
