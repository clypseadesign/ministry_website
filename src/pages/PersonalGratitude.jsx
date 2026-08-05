import React from 'react';
import PageHero from '../components/PageHero';
import { Heart, Award, Star, Download } from 'lucide-react';
import founderImg from '/assets/91e0b0b1480b4477247e78718d2ec15606e7e622.jpg';

export default function PersonalGratitude() {
  return (
    <div>
      <PageHero title="PERSONAL GRATITUDE & SINCERE THANKS" subtitle="FROM THE DESK OF DR. C. JAMES WHITE" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">A MESSAGE OF DEEP APPRECIATION</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Every step of our journey at God Cares Ministries has been made possible by the unwavering faith, support, and generosity of our volunteers, donors, prayer partners, and friends worldwide.
            </p>
          </div>

          {/* Letter Card */}
          <div className="card-item" style={{ padding: '48px', background: 'var(--bg-card)', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '32px' }}>
              <img src={founderImg} alt="Dr. C. James White" style={{ width: '120px', height: '150px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)' }}>
                  Dr. C. James White
                </h3>
                <p style={{ color: 'var(--primary-blue)', fontWeight: '700', fontSize: '0.9rem' }}>Founder & Director</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>God Cares Ministries International</p>
              </div>
            </div>

            <div style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p><strong>Beloved Friends & Partners,</strong></p>
              <p>
                Words cannot fully express the profound gratitude I hold in my heart for each one of you. When God Cares Ministries began in 1999, it started with a humble vision: to extend love in action to those whom the world often forgets.
              </p>
              <p>
                Through your selflessness, we have been able to feed the hungry, construct medical facilities, record songs of peace in 50+ languages, and share The Universal Royal Law of Love across borders.
              </p>
              <p>
                You are the living proof that love transforms lives. On behalf of our entire ministry team and the thousands of families whose lives have been touched, I say a heartfelt <strong>THANK YOU</strong>.
              </p>
              <p style={{ fontStyle: 'italic', fontWeight: '700', color: 'var(--primary-dark-blue)', marginTop: '16px' }}>
                "May God abundantly bless you and your families for your kindness, compassion, and unwavering support."
              </p>
            </div>
          </div>

          {/* Donor Appreciation Certificate Preview */}
          <div className="card-item" style={{ marginTop: '48px', textAlign: 'center', background: '#ffffff', border: '2px dashed var(--accent-gold)' }}>
            <Award size={48} style={{ color: 'var(--accent-gold)', margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px' }}>
              CERTIFICATE OF SINCERE GRATITUDE
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
              As a token of our heartfelt appreciation, all donors and volunteers can view and download their personalized Certificate of Gratitude.
            </p>
            <button className="btn-primary" style={{ background: 'var(--accent-gold)', color: 'var(--primary-navy)' }}>
              <Download size={18} /> DOWNLOAD CERTIFICATE (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
