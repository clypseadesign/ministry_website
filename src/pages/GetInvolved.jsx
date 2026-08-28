import React from 'react';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';

const waysToGetInvolved = [
  {
    img: '/get-involved-assets/p0_img10_x1112.png',
    title: 'Volunteer Your Time',
    desc: 'Serve alongside us in food distribution, educational support, medical assistance, shelter aid, outreach programs, and community initiatives.'
  },
  {
    img: '/get-involved-assets/p0_img15_x1132.png',
    title: 'Share Your Resources',
    desc: 'Help extend our reach by sharing food, clothing, educational materials, medical supplies, or financial support to serve more lives with dignity and care.'
  },
  {
    img: '/get-involved-assets/p0_img9_x1108.png',
    title: 'Collaborate & Support the Mission',
    desc: 'Individuals, professionals, artists, and well-wishers are welcome to participate in our humanitarian and conscience-awakening initiatives.'
  },
  {
    img: '/get-involved-assets/p0_img4_x1088.png',
    title: 'Sponsor a Child or Family',
    desc: 'Support access to education, healthcare, and essential needs, helping individuals and families move toward stability and hope.'
  },
  {
    img: '/get-involved-assets/p0_img0_x1072.png',
    title: 'Pray with Us',
    desc: 'Join us in lifting up those we serve in prayer, seeking guidance, strength, and compassion in all our efforts.'
  }
];

export default function GetInvolved() {
  return (
    <div>
      <PageHero
        title="GET INVOLVED"
        subtitle="JOIN THE GLOBAL MOVEMENT"
        bgImage={asset('/get-involved-assets/p0_img13_x1124.png')}
      />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              There are countless ways to participate in our mission to spread the Universal Royal Law of Love. Whether you have five minutes or five hours, whether you're nearby or across the globe, you can make a meaningful contribution to creating a more peaceful world.
            </p>
          </div>

          {/* 5 Photo Cards (2-column grid; last card centered) */}
          <div className="grid-2">
            {waysToGetInvolved.map((item, i) => (
              <div
                key={item.title}
                className="image-card"
                style={i === waysToGetInvolved.length - 1 ? { gridColumn: '1 / -1', maxWidth: '520px', margin: '0 auto' } : {}}
              >
                <img
                  src={asset(item.img)}
                  alt={item.title}
                  className="image-card-img"
                  style={{ display: 'block', width: '100%', height: '240px', objectFit: 'cover' }}
                />
                <div
                  className="image-card-body"
                  style={{
                    padding: '20px 24px',
                    borderTop: '1px solid var(--border-card)',
                    background: '#ffffff'
                  }}
                >
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.98rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* "Be a Voice for Love and Truth" — full-width CTA, not a card */}
          <div
            style={{
              marginTop: '48px',
              textAlign: 'center',
              background: 'linear-gradient(180deg, var(--sky-blue-top) 0%, var(--sky-blue-bottom) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '56px 32px',
              color: '#ffffff',
            }}
          >
            <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Be a Voice for Love and Truth
            </h3>
            <p style={{ color: '#eaf2ff', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '760px', margin: '0 auto' }}>
              Help spread the message of love, peace, and moral responsibility within your family, community, and society.
            </p>
          </div>

          {/* Quote Section */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '64px auto 0 auto', padding: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
            <p style={{ color: 'var(--text-dark)', fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', marginBottom: '16px' }}>
              "Getting involved is not about recognition—it is about love in action. You don't have to change the whole world to make a difference—just one life at a time."
            </p>
            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', fontSize: '1.2rem' }}>
              Because GOD CARES—and so do we.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
