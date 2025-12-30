import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { situations, getCategoryName } from '../data/situations';
import type { SituationCategory } from '../types';

export const SituationPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const relationship = searchParams.get('relationship');
  const mbti = searchParams.get('mbti');
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<SituationCategory | 'all'>('all');

  const categories: Array<SituationCategory | 'all'> = [
    'all',
    'task_assignment',
    'reporting',
    'meeting',
    'feedback',
    'collaboration',
    'conflict_resolution',
    'motivation',
    'decision_making'
  ];

  const filteredSituations = filter === 'all'
    ? situations
    : situations.filter(s => s.category === filter);

  const handleNext = () => {
    if (selected && relationship && mbti) {
      navigate(`/advice?relationship=${relationship}&mbti=${mbti}&situation=${selected}`);
    }
  };

  const handleBack = () => {
    navigate(`/mbti?relationship=${relationship}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 16px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '16px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '8px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          상황을 선택하세요
        </h1>
        <p style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: '400'
        }}>
          어떤 상황에서 소통하시나요?
        </p>
      </motion.div>

      {/* 카테고리 필터 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '16px',
          maxWidth: '900px'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: filter === cat
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '6px 12px',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (filter !== cat) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }
            }}
          >
            {cat === 'all' ? '전체' : getCategoryName(cat)}
          </button>
        ))}
      </motion.div>

      {/* 상황 목록 */}
      <div style={{
        width: '100%',
        maxWidth: '1000px',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '10px',
          maxHeight: '50vh',
          overflowY: 'auto',
          padding: '6px'
        }}>
          {filteredSituations.map((situation, index) => (
            <motion.div
              key={situation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <GlassCard
                onClick={() => setSelected(situation.id)}
                selected={selected === situation.id}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '12px',
                  minHeight: '100px'
                }}
              >
                <div style={{
                  fontSize: '0.65rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '600',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {getCategoryName(situation.category)}
                </div>
                <h3 style={{
                  fontSize: '0.9rem',
                  color: 'white',
                  fontWeight: '700',
                  marginBottom: '6px',
                  lineHeight: '1.2'
                }}>
                  {situation.title}
                </h3>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.4',
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {situation.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: '12px',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '0.85rem',
            color: 'white',
            fontWeight: '600'
          }}>
            선택됨: {situations.find(s => s.id === selected)?.title}
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: 'flex',
          gap: '10px'
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
          조언 받기
        </GlassButton>
      </motion.div>
    </div>
  );
};
