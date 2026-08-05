import React from 'react';
import PageHero from '../components/PageHero';
import { Video, BookOpen, HeartPulse, GraduationCap, Headphones } from 'lucide-react';

export default function MediaResources() {
  const resources = [
    {
      icon: <Video size={28} />,
      title: 'AUDIO-VISUAL PROJECTS',
      desc: 'Explore powerful moral videos, motivational content, and spiritual teachings like The Universal Royal Law of Love – A Divine Call to Humanity, created to inspire reflection and positive life change.'
    },
    {
      icon: <BookOpen size={28} />,
      title: 'ARTICLES & MESSAGES',
      desc: 'Read insightful faith-based articles, spiritual blogs, and motivational messages focused on truth, moral values, human responsibility, and inner transformation.'
    },
    {
      icon: <HeartPulse size={28} />,
      title: 'HEALTH & WELLNESS MESSAGES',
      desc: 'Discover practical tips for holistic health, mental wellness, and spiritual well-being, helping you live a balanced and disciplined life.'
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'EDUCATIONAL RESOURCES',
      desc: 'Access informative learning materials, personal development resources, and awareness content that promote character building, ethical living, and social responsibility.'
    },
    {
      icon: <Headphones size={28} />,
      title: 'MUSIC & CREATIVE MEDIA',
      desc: 'Experience uplifting moral music, inspirational songs, and creative storytelling that spread messages of love, compassion, faith, and social awareness.'
    }
  ];

  return (
    <div>
      <PageHero title="MEDIA & RESOURCE" subtitle="INSPIRING LIVES THROUGH FAITH-BASED MEDIA" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
            <h2 className="section-title">INSPIRING LIVES THROUGH FAITH-BASED MEDIA</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Media & Resources is a space where truth, love, and spiritual growth come together to inspire lives. Through meaningful Christian media content, inspirational videos, and faith-based resources, God Cares Ministries shares messages that awaken human conscience, promote moral responsibility, and guide individuals toward a life of purpose, peace, and well-being.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {resources.map((r, i) => (
              <div key={i} className="card-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="card-icon">
                  {r.icon}
                </div>
                <div>
                  <h3 className="card-title" style={{ fontSize: '1.3rem' }}>{r.title}</h3>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
