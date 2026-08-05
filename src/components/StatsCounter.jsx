import React from 'react';

export default function StatsCounter() {
  const stats = [
    { num: '15K+', label: 'LIVES TOUCHED' },
    { num: '150+', label: 'COUNTRIES REACHED' },
    { num: '1000+', label: 'ACTIVE FOLLOWERS' },
    { num: '50+', label: 'LANGUAGES' }
  ];

  return (
    <div className="stats-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
      {stats.map((st, i) => (
        <div key={i} className="stat-card">
          <div className="stat-num" style={{ fontSize: '3.2rem', fontWeight: '800', color: '#003366', fontFamily: 'var(--font-heading-fancy)', marginBottom: '6px', lineHeight: '1.1' }}>
            {st.num}
          </div>
          <div className="stat-label" style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            {st.label}
          </div>
        </div>
      ))}
    </div>
  );
}
