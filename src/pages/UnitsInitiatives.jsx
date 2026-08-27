import React from 'react';
import PageHero from '../components/PageHero';
import { Music, GraduationCap, HeartHandshake, Users, Radio, Baby } from 'lucide-react';

export default function UnitsInitiatives() {
  const units = [
    {
      icon: Music,
      title: 'Music & Arts Division',
      description: 'Creating and producing multilingual spiritual music, orchestral performances, and artistic expressions that celebrate the universal Royal Law of Love.',
      color: '#005495'
    },
    {
      icon: GraduationCap,
      title: 'EDUCATION & TRAINING UNIT',
      description: 'Developing curriculum and training programs that teach principles of peace, love, and spiritual growth to communities worldwide.',
      color: '#D6B56C'
    },
    {
      icon: HeartHandshake,
      title: 'Humanitarian Services',
      description: 'Providing direct assistance to communities in need through food programs, shelter support, and emergency relief services.',
      color: '#005495'
    },
    {
      icon: Users,
      title: 'COMMUNITY OUTREACH',
      description: 'Building grassroots networks of volunteers and supporters who organize local events and spread the message of universal love.',
      color: '#D6B56C'
    },
    {
      icon: Radio,
      title: 'Media & Communications',
      description: 'Managing our global communications strategy including radio, social media, publications, and digital content production.',
      color: '#005495'
    },
    {
      icon: Baby,
      title: 'Youth & Children Programs',
      description: 'Engaging the next generation through age-appropriate programs that instill values of love, peace, and global citizenship.',
      color: '#D6B56C'
    }
  ];

  return (
    <div>
      <PageHero title="UNIT & INITIATIVES" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/pdf-pages/UNIT_and_INITIATIVES_page_1.png)',
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
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
                <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Organized for Maximum Impact
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our ministry is organized into specialized units, each dedicated to a specific aspect of our mission. Together, these units create a comprehensive approach to spreading the Universal Royal Law of Love across the globe.
                </p>
              </div>

              {/* Units Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '64px' }}>
                {units.map((unit, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '40px 32px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-card)',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 85, 149, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '50%', 
                      background: unit.color, 
                      color: '#ffffff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 20px auto' 
                    }}>
                      <unit.icon size={28} />
                    </div>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      color: 'var(--primary-dark-blue)', 
                      fontFamily: 'var(--font-heading-fancy)', 
                      marginBottom: '12px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px' 
                    }}>
                      {unit.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                      {unit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div style={{ 
                background: 'linear-gradient(135deg, #005495 0%, #003d73 100%)', 
                padding: '48px', 
                borderRadius: 'var(--radius-md)', 
                textAlign: 'center',
                color: '#ffffff'
              }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Join Our Mission
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto', opacity: 0.9 }}>
                  Be part of our growing community of believers and changemakers. Together, we can make a lasting impact in the lives of people around the world.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="/get-involved" 
                    style={{ 
                      display: 'inline-block',
                      padding: '14px 32px',
                      background: '#D6B56C',
                      color: '#005495',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: '700',
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#005495';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#D6B56C';
                      e.currentTarget.style.color = '#005495';
                    }}
                  >
                    Get Involved
                  </a>
                  <a 
                    href="/donate-us" 
                    style={{ 
                      display: 'inline-block',
                      padding: '14px 32px',
                      background: 'transparent',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: '700',
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      border: '2px solid #ffffff',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#005495';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    Support Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
