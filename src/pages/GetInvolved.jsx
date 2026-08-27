import React from 'react';
import PageHero from '../components/PageHero';
import { Heart, Users, Share2, Handshake } from 'lucide-react';

export default function GetInvolved() {
  const waysToGetInvolved = [
    {
      icon: <Heart size={28} />,
      title: 'Volunteer Your Time',
      desc: 'Serve alongside us in food distribution, educational support, medical assistance, shelter aid, outreach programs, and community initiatives.'
    },
    {
      icon: <Share2 size={28} />,
      title: 'Share Your Resources',
      desc: 'Help extend our reach by sharing food, clothing, educational materials, medical supplies, or financial support to serve more lives with dignity and care.'
    },
    {
      icon: <Users size={28} />,
      title: 'Collaborate & Support the Mission',
      desc: 'Individuals, professionals, artists, and well-wishers are welcome to participate in our humanitarian and conscience-awakening initiatives.'
    },
    {
      icon: <Handshake size={28} />,
      title: 'Sponsor a Child or Family',
      desc: 'Support access to education, healthcare, and essential needs, helping individuals and families move toward stability and hope.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Pray with Us',
      desc: 'Join us in lifting up those we serve in prayer, seeking guidance, strength, and compassion in all our efforts.'
    },
    {
      icon: <Share2 size={28} />,
      title: 'Be a Voice for Love and Truth',
      desc: 'Help spread the message of love, peace, and moral responsibility within your family, community, and society.'
    }
  ];

  return (
    <div>
      <PageHero title="GET INVOLVED" subtitle="JOIN US IN MAKING A DIFFERENCE" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/pdf-pages/GET_INVOLVED_page_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
              <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Join the Global Movement
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                There are countless ways to participate in our mission to spread the Universal Royal Law of Love. Whether you have five minutes or five hours, whether you're nearby or across the globe, you can make a meaningful contribution to creating a more peaceful world.
              </p>
            </div>

            {/* 6 Cards in 2x3 Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto 64px auto' }}>
              {waysToGetInvolved.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto', padding: '32px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
              <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '16px' }}>
                "Getting involved is not about recognition—it is about love in action. You don't have to change the whole world to make a difference—just one life at a time."
              </p>
              <p style={{ color: 'var(--primary-blue)', fontWeight: '700', fontSize: '1.1rem' }}>
                Because GOD CARES—and so do we.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
