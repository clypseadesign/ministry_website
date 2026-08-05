import React from 'react';
import PageHero from '../components/PageHero';
import { Music, GraduationCap, HeartHandshake, Users, Radio, Sparkles } from 'lucide-react';

export default function UnitsInitiatives() {
  const units = [
    {
      icon: <Music size={28} />,
      title: 'MUSIC & ARTS DIVISION',
      desc: 'Creating and producing multilingual spiritual music, orchestral performances, and artistic expressions that celebrate the universal Royal Law of Love.'
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'EDUCATION & TRAINING UNIT',
      desc: 'Developing curriculum and training programs that teach principles of peace, love, and spiritual growth to communities worldwide.'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'HUMANITARIAN SERVICES',
      desc: 'Providing direct assistance to communities in need through food programs, shelter support, and emergency relief services.'
    },
    {
      icon: <Users size={28} />,
      title: 'COMMUNITY OUTREACH',
      desc: 'Building grassroots networks of volunteers and supporters who organize local events and spread the message of universal love.'
    },
    {
      icon: <Radio size={28} />,
      title: 'MEDIA & COMMUNICATIONS',
      desc: 'Managing our global communications strategy including radio, social media, publications, and digital content production.'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'YOUTH & CHILDREN PROGRAMS',
      desc: 'Engaging the next generation through age-appropriate programs that instill values of love, peace, and global citizenship.'
    }
  ];

  return (
    <div>
      <PageHero title="UNIT & INITIATIVES" subtitle="ORGANIZED FOR MAXIMUM IMPACT" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <h2 className="section-title">ORGANIZED FOR MAXIMUM IMPACT</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Our ministry is organized into specialized units, each dedicated to a specific aspect of our mission. Together, these units create a comprehensive approach to spreading the Universal Royal Law of Love across the globe.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {units.map((u, i) => (
              <div key={i} className="card-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="card-icon" style={{ shrink: 0 }}>
                  {u.icon}
                </div>
                <div>
                  <h3 className="card-title" style={{ fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
