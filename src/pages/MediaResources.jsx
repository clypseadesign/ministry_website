import React from 'react';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';
import { Video, BookOpen, HeartPulse, GraduationCap, Headphones } from 'lucide-react';

export default function MediaResources() {
  const resources = [
    {
      icon: <Video size={28} />,
      title: 'AUDIO-VISUAL PROJECTS',
      desc: 'Explore powerful Moral videos, motivational content, and spiritual teachings like The Universal Royal Law of Love – A Divine Call to Humanity, created to inspire reflection and positive life change.'
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

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/media_and_resource_page_1.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section className="section" style={{ background: '#ffffff' }}>
            <div className="container">
              <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
                <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Inspiring Lives Through Faith-Based Media
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Media & Resources is a space where truth, love, and spiritual growth come together to inspire lives. Through meaningful Christian media content, inspirational videos, and faith-based resources, God Cares Ministries shares messages that awaken human conscience, promote moral responsibility, and guide individuals toward a life of purpose, peace, and well-being. We believe true transformation begins within—impacting both the mind, body, and soul, leading to a healthier and more meaningful life.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
                {resources.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {r.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{r.title}</h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
