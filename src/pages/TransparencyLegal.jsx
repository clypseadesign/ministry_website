import React from 'react';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';

export default function TransparencyLegal() {
  return (
    <div>
      <PageHero title="TRANSPARENCY & LEGAL" subtitle="GOVERNANCE & FINANCIAL ACCOUNTABILITY" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/Transparency_and_Legal_page_1.png')})`,
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
                  Our Commitment to Transparency
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  At God Cares Ministries, we are committed to operating with integrity, honesty, and accountability in all that we do. Transparency is at the heart of our mission, ensuring that every action, message, and resource reflects our values and purpose.
                </p>
              </div>

              {/* Transparency Points - Simple list matching PDF */}
              <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Providing clear and accurate information about our mission and activities</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Maintaining honesty in all communications, published content and published content</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Ensuring responsible creation and sharing of all media and resources</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>We serve all people without discrimination, beyond religion, culture, or nationality</p>
                  </div>
                </div>
              </div>

              {/* Legal & Ethical Responsibility */}
              <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Legal & Ethical Responsibility
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem', textAlign: 'center' }}>
                  We operate in full respect of applicable laws and ethical standards. Our commitments include:
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Following all legal guidelines and regulations</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>All content shared through this website is intended for humanitarian, educational, and moral purposes</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Media and resources are protected under applicable copyright laws unless stated otherwise</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px', fontSize: '0.9rem', fontWeight: '700' }}>✓</div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Personal information shared with us is treated with respect, care, and confidentiality</p>
                  </div>
                </div>
              </div>

              {/* Government of India Registrations */}
              <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Government of India – Registrations & Approvals
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px', fontSize: '1rem', textAlign: 'center' }}>
                  God Cares Ministries is duly registered and recognized under various departments of the Government of India.
                </p>

                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', marginBottom: '24px' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase' }}>FOR INDIAN DONORS</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
                    (Donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961)
                  </p>
                  <div style={{ display: 'grid', gap: '12px', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Name:</span>
                      <span style={{ color: 'var(--text-dark)' }}>God Cares Ministries</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Bank:</span>
                      <span style={{ color: 'var(--text-dark)' }}>State Bank of India</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Number:</span>
                      <span style={{ color: 'var(--text-dark)' }}>43839096336</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch:</span>
                      <span style={{ color: 'var(--text-dark)' }}>Horamavu</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>040807</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>IFSC Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>SBIN0040807</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>MICR Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>560002515</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>SWIFT Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>SBININBBM06</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Address:</span>
                      <span style={{ color: 'var(--text-dark)', maxWidth: '60%', textAlign: 'right' }}>No. 21 & 22, Opp. Sycon Apartments, Horamavu Main Road, Horamavu, Bengaluru - 560043, Karnataka, India.</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase' }}>FOR Foreign Donors</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
                    Designated FCRA Receipt-cum-Utilisation Account
                  </p>
                  <div style={{ display: 'grid', gap: '12px', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Name:</span>
                      <span style={{ color: 'var(--text-dark)' }}>God Cares Ministries</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Bank:</span>
                      <span style={{ color: 'var(--text-dark)' }}>State Bank of India</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Number:</span>
                      <span style={{ color: 'var(--text-dark)' }}>43770602442</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch:</span>
                      <span style={{ color: 'var(--text-dark)' }}>New Delhi</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>00691</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>IFSC Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>SBIN0000691</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>SWIFT Code:</span>
                      <span style={{ color: 'var(--text-dark)' }}>SBININBB104</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Address:</span>
                      <span style={{ color: 'var(--text-dark)', maxWidth: '60%', textAlign: 'right' }}>State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi - 110001, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
