import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GlassButton } from '../components/GlassButton';

export const HomePage = () => {
  const navigate = useNavigate();

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
          marginBottom: '30px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '12px',
          letterSpacing: '-0.5px'
        }}>
          MBTI 커뮤니케이션 가이드
        </h1>
        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontWeight: '400',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          상대의 MBTI 성향에 맞춘 효과적인 소통 방법
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px',
          maxWidth: '380px',
          width: '100%',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4px' }}>
            <h2 style={{
              fontSize: '1.1rem',
              color: 'white',
              fontWeight: '600',
              marginBottom: '6px'
            }}>
              시작하기
            </h2>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.5'
            }}>
              맞춤형 조언을 받아보세요
            </p>
          </div>

          <GlassButton
            onClick={() => navigate('/relationship')}
            variant="primary"
            size="medium"
          >
            조언 받기
          </GlassButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          maxWidth: '600px',
          width: '100%'
        }}
      >
        {[
          { title: '50가지 상황', desc: '업무 시나리오' },
          { title: '16개 유형', desc: 'MBTI 지원' },
          { title: '맞춤 조언', desc: '세밀한 가이드' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px 12px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <h3 style={{
              fontSize: '0.95rem',
              color: 'white',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
