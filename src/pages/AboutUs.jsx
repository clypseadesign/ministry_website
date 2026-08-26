import React from 'react';
import { NavLink } from 'react-router-dom';
import { Eye, Edit3, Heart, Globe, Shield, HandHeart, UserCheck, Scale } from 'lucide-react';

export default function AboutUs() {
  const coreValuesList = [
    {
      icon: <Heart size={20} />,
      title: 'LOVE',
      description: 'We believe love is the foundation of all true service. Every action we take is guided by compassion, kindness, and respect for human dignity.'
    },
    {
      icon: <Globe size={20} />,
      title: 'SERVICE',
      description: 'We serve without discrimination, reaching beyond religion, culture, or nationality to care for those in need.'
    },
    {
      icon: <Shield size={20} />,
      title: 'INTEGRITY',
      description: 'We are committed to honesty, transparency, and accountability in all areas of our work and stewardship.'
    },
    {
      icon: <HandHeart size={20} />,
      title: 'COMPASSION IN ACTION',
      description: 'We believe love must be lived, not merely spoken. Our values are expressed through practical help and consistent care.'
    },
    {
      icon: <UserCheck size={20} />,
      title: 'HUMAN DIGNITY',
      description: 'Every person matters. We honor the inherent worth of every individual we serve.'
    },
    {
      icon: <Scale size={20} />,
      title: 'MORAL RESPONSIBILITY',
      description: 'We seek to awaken conscience and encourage ethical living through principles rooted in The Universal Law of Love.'
    }
  ];

  return (
    <div>
      {/* Cloud Banner Section */}
      <section className="hero-cloud-banner">
        <img src="/assets/all-pages-banner.png" alt="About Us Banner" className="hero-cloud-bg" />
        <div className="hero-content">
          <h1 style={{ fontSize: '4.3rem', marginBottom: '16px' }}>ABOUT US</h1>
          <NavLink to="/donate-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '8px 24px', borderRadius: '9999px', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>
            <span>Join "The Universal Royal Law of Love" Project</span>
            <span>➔</span>
          </NavLink>
        </div>
      </section>

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/pdf-pages/about_us_page_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Section 1: WHO WE ARE (Centered Layout) */}
          <section className="section" style={{ background: '#ffffff', padding: '64px 0 48px 0' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
              <h2 style={{ fontSize: '3.2rem', color: '#005595', marginBottom: '24px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WHO WE ARE
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '18px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                God Cares Ministries is a self-supporting, volunteer-led humanitarian and spiritual ministry established in 1999. Our work is founded on <strong>"The Universal Royal Law of Love"</strong>, which calls humanity to live by truth, compassion, and moral responsibility. Since our beginning, we have been a group of committed volunteers who willingly share our time, talents, and resources to reach out to the needy in all possible ways. We believe that true service goes beyond charity—it restores dignity, awakens conscience, and strengthens communities.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                We serve people of all backgrounds without discrimination, crossing boundaries of religion, culture, and nationality. Alongside humanitarian assistance, we work to address the root causes of suffering by promoting moral values, personal responsibility, and love for humanity. God Cares Ministries exists not for profit or recognition, but to serve with humility, integrity, and love.
              </p>

              <NavLink 
                to="/donate-us" 
                style={{ 
                  display: 'inline-block',
                  background: '#005595', 
                  borderRadius: '9999px', 
                  padding: '14px 40px', 
                  fontSize: '1.05rem', 
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(0, 85, 149, 0.25)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Because GOD CARES—and so do we.
              </NavLink>
            </div>
          </section>

          {/* Section 2: THE C. JAMES WHITE FAMILY (2-Column Grid) */}
          <section className="section" style={{ background: '#ffffff', padding: '48px 0 64px 0' }}>
            <div className="container">
              <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
                {/* Left Column: Photo */}
                <div>
                  <img
                    src="/about-us/family-new.png"
                    alt="C. James White Family"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '24px',
                      boxShadow: '0 12px 32px rgba(0, 85, 149, 0.12)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Right Column: Content */}
                <div>
                  <h2 
                    style={{ 
                      textAlign: 'left', 
                      fontSize: '2.6rem',
                      color: '#005595', 
                      marginBottom: '20px',
                      lineHeight: '1.3',
                      fontFamily: 'var(--font-heading-fancy)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    THE LOVING SUPPORT AND PRAYERFUL ENCOURAGEMENT OF THE C. JAMES WHITE FAMILY:
                  </h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                    The family behind God Cares Ministries continues to support the ministry, its charitable purposes, and all productions through personal sacrifice and dedicated commitment.
                  </p>
                    <p style={{ fontWeight: '700', color: '#005595', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Left to Right : Sharon Doris Angel . J, C . James White, Vijaya James White, & Stanley Dev Adams
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: OUR MISSION & VALUES (Side-by-Side Cards) */}
          <section className="section" style={{ background: '#ffffff', padding: '48px 0 64px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: '3.2rem', color: '#005595', marginBottom: '40px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                OUR MISSION & VALUES
              </h2>

              <div className="grid-2" style={{ gap: '32px' }}>
                {/* Left Card: OUR VISION */}
                <div 
                  style={{ 
                    background: '#eff5fb', 
                    borderRadius: '24px', 
                    padding: '36px', 
                    border: '1px solid #cbe0f5'
                  }}
                >
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      background: '#ffffff', 
                      color: '#005595', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '20px',
                      boxShadow: '0 4px 12px rgba(0, 85, 149, 0.1)'
                    }}
                  >
                    <Eye size={24} />
                  </div>
                  <h3 style={{ color: '#005595', fontSize: '2rem', marginBottom: '16px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    OUR VISION
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.98rem' }}>
                    We envision a world where love replaces indifference, compassion overcomes injustice, and every Individual is treated with dignity and respect. Our vision is to see transformed lives, restored communities, and a renewed moral consciousness where service is guided by humility, integrity, and love, inspiring people to build a society rooted in peace, unity, responsibility, and genuine care for humanity.
                  </p>
                </div>

                {/* Right Card: OUR MISSION */}
                <div 
                  style={{ 
                    background: '#eff5fb', 
                    borderRadius: '24px', 
                    padding: '36px', 
                    border: '1px solid #cbe0f5'
                  }}
                >
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      background: '#ffffff', 
                      color: '#005595', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '20px',
                      boxShadow: '0 4px 12px rgba(0, 85, 149, 0.1)'
                    }}
                  >
                    <Edit3 size={24} />
                  </div>
                  <h3 style={{ color: '#005595', fontSize: '2rem', marginBottom: '16px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    OUR MISSION
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.98rem' }}>
                    The mission of God Cares Ministries is to serve humanity through love in action. Rooted in The Universal Royal Law of Love, we strive to bring hope, healing, and dignity to individuals and communities in need. We are committed to meeting physical, emotional, and spiritual needs through compassion, service, and moral responsibility, inspiring people to live with Integrity, kindness, and care for one another.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: OUR CORE VALUES (2-Column Grid with Left Collage Image) */}
          <section className="section" style={{ background: '#ffffff', padding: '48px 0 64px 0' }}>
            <div className="container">
              <h2 style={{ textAlign: 'left', fontSize: '3.2rem', color: '#005595', marginBottom: '8px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                OUR CORE VALUES
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '36px', fontSize: '0.98rem', maxWidth: '640px' }}>
                These guiding principles shape every act of service we undertake. They are the foundation of who we are and a constant reminder that love—expressed through compassionate action—is the greatest gift we can offer the world.
              </p>

              <div className="grid-2" style={{ alignItems: 'flex-start', gap: '48px' }}>
                {/* Left Column: Graphic Collage */}
                <div>
                  <img 
                    src="/about-us/vision.png" 
                    alt="Our Core Values Graphic Collage" 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '24px', 
                      boxShadow: '0 12px 32px rgba(0, 85, 149, 0.15)',
                      display: 'block'
                    }} 
                  />
                </div>

                {/* Right Column: 6 Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {coreValuesList.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#005595', 
                          color: '#ffffff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-heading-fancy)', fontSize: '1.5rem', color: '#005595', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          {item.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: WHAT GUIDES US BANNER */}
          <section className="section" style={{ background: '#ffffff', padding: '48px 0 80px 0' }}>
            <div className="container">
              <div 
                style={{ 
                  background: '#005595', 
                  color: '#ffffff', 
                  borderRadius: '28px', 
                  padding: '56px 48px', 
                  textAlign: 'center',
                  boxShadow: '0 16px 40px rgba(0, 85, 149, 0.25)'
                }}
              >
                <h2 style={{ fontSize: '3.2rem', fontFamily: 'var(--font-heading-fancy)', color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  WHAT GUIDES US
                </h2>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#f1f5f9', maxWidth: '780px', margin: '0 auto 32px auto' }}>
                  At the heart of God Cares Ministries is a simple yet powerful belief: when love guides our actions, lives are changed and hope is restored.
                </p>
                <span
                  style={{
                    fontFamily: "'Anastasia', 'Limelight', 'Poiret One', 'Cinzel Decorative', cursive, serif",
                    color: '#005595',
                    fontWeight: '500',
                    fontSize: '2rem',
                    letterSpacing: '2px',
                    background: '#ffffff',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}
                >
                  BECAUSE GOD CARES—AND SO DO WE.
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
