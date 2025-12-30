import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { generateAdvice } from '../data/adviceData';
import { mbtiCharacteristics } from '../data/mbtiData';
import { situations } from '../data/situations';
import type { MBTIType, RelationshipType } from '../types';

export const AdvicePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const relationship = searchParams.get('relationship') as RelationshipType;
  const mbti = searchParams.get('mbti') as MBTIType;
  const situationId = searchParams.get('situation') || '';

  const advice = generateAdvice(mbti, relationship, situationId);
  const mbtiInfo = mbtiCharacteristics[mbti];
  const situation = situations.find(s => s.id === situationId);

  const relationshipText = {
    junior: '후배',
    senior: '선배',
    colleague: '동료'
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '800px'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '20px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          커뮤니케이션 가이드
        </h1>

        <div style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'white',
            fontWeight: '600',
            marginBottom: '10px'
          }}>
            {relationshipText[relationship]} · {mbti} ({mbtiInfo.name})
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            {situation?.title}
          </p>
        </div>
      </motion.div>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        marginBottom: '40px'
      }}>
        {/* 개요 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard hoverable={false}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              개요
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7'
            }}>
              {advice.overview}
            </p>
          </GlassCard>
        </motion.div>

        {/* 핵심 포인트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard hoverable={false}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              핵심 포인트
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {advice.keyPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    color: 'white',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </span>
                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* 커뮤니케이션 스타일 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard hoverable={false}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              커뮤니케이션 스타일
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  어조
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '15px',
                  borderRadius: '12px'
                }}>
                  {advice.communicationStyle.tone}
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  접근 방법
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '15px',
                  borderRadius: '12px'
                }}>
                  {advice.communicationStyle.approach}
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  피해야 할 것
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {advice.communicationStyle.avoid.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                        background: 'rgba(255, 100, 100, 0.2)',
                        padding: '12px 15px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 150, 150, 0.3)'
                      }}
                    >
                      ✗ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 좋은 예시 vs 나쁜 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard hoverable={false}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              대화 예시
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '25px'
            }}>
              {/* 좋은 예시 */}
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: '#4ade80' }}>✓</span> 좋은 예시
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {advice.examples.good.map((example, index) => (
                    <div
                      key={index}
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        background: 'rgba(74, 222, 128, 0.15)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(74, 222, 128, 0.3)',
                        lineHeight: '1.6'
                      }}
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>

              {/* 나쁜 예시 */}
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: '#f87171' }}>✗</span> 피해야 할 예시
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {advice.examples.bad.map((example, index) => (
                    <div
                      key={index}
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        background: 'rgba(248, 113, 113, 0.15)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(248, 113, 113, 0.3)',
                        lineHeight: '1.6'
                      }}
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 추가 팁 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassCard hoverable={false}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              추가 팁
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {advice.tips.map((tip, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '15px',
                    borderRadius: '12px'
                  }}
                >
                  <span style={{
                    color: '#fbbf24',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>
                    💡
                  </span>
                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* 버튼 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <GlassButton
          onClick={() => navigate(`/situation?relationship=${relationship}&mbti=${mbti}`)}
          variant="secondary"
          size="medium"
        >
          다른 상황 선택
        </GlassButton>
        <GlassButton
          onClick={() => navigate('/')}
          variant="primary"
          size="medium"
        >
          처음으로
        </GlassButton>
      </motion.div>
    </div>
  );
};
