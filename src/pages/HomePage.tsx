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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: '800',
          color: 'white',
          marginBottom: '20px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          letterSpacing: '-1px'
        }}>
          MBTI 커뮤니케이션 가이드
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: '400',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          상대의 MBTI 성향에 맞춘 효과적인 소통 방법을 알아보세요
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              시작하기
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.6'
            }}>
              업무 상황에서 더 나은 소통을 위한<br/>맞춤형 조언을 받아보세요
            </p>
          </div>

          <GlassButton
            onClick={() => navigate('/relationship')}
            variant="primary"
            size="large"
          >
            조언 받기
          </GlassButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '800px',
          width: '100%'
        }}
      >
        {[
          { title: '50가지 상황', desc: '다양한 업무 시나리오' },
          { title: '16개 성격 유형', desc: '모든 MBTI 타입 지원' },
          { title: '맞춤형 조언', desc: '세밀한 커뮤니케이션 가이드' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '25px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '8px'
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
